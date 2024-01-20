import React, { useContext, useState, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import QRCode from "qrcode.react";
import { QrReader } from 'react-qr-reader';


import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const [qrCodeData, setQrCodeData] = useState("");
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`dataobject`, scanData);
    if (scanData && scanData !== "") {
      setData(scanData.text);
      setStartScan(false);
      setLoadingScan(false);
  
      // Use scanData.text directly
      handleChange(null, "addressTo", scanData.text);
      console.log(typeof(scanData.text));
      console.log(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  

  useEffect(() => {
    // Generate the QR code data from the current account
    setQrCodeData(currentAccount || "");
  }, [currentAccount]);


  const handleSubmit = (e) => {
    const { amount, keyword, message } = formData;
    const addressTo = data;

    e.preventDefault();

     if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };


  return (
    <div className="flex w-full justify-center items-center">
    <div className="flex flex-col md:flex-row items-start justify-between md:p-20 py-12 px-4 w-full">
      <div className="flex flex-1 justify-start items-start flex-col md:mr-8 ">
        <div className="p-3 flex justify-end items-start flex-col rounded-xl h-80 sm:w-72 w-full card bg-opacity-10 backdrop-blur-md backdrop-brightness-125 border-white-600 md:ml-20 blue-glassmorphism">
          <div className="flex justify-between flex-col w-full h-full ">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                <SiEthereum fontSize={21} color="#fff" />
              </div>
              <BsInfoCircle fontSize={17} color="#fff" />
            </div>
            <div>
              <p className="text-white font-light text-sm">
                {shortenAddress(currentAccount)}
              </p>
              <p className="text-white font-semibold text-lg mt-1 text-center">
                Ethereum
              </p>
            </div>
          </div>
  
          <div className="w-full h-40 mt-4 flex flex-col justify-center items-center">
            <QRCode value={qrCodeData} />
            <div>

            {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-10 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] bg-gradient-to-r from-orange-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-4.5"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-xl font-semibold">
              Connect Wallet
            </p>
          </button>
        )}
  
            </div>
          </div>
        </div>
  
      </div>


      <div className="flex flex-1 justify-start items-start flex-col md:mr-8">
        <div className="p-3 flex justify-end items-start flex-col rounded-xl h-80 sm:w-72 w-full card bg-opacity-10 backdrop-blur-md backdrop-brightness-125 border-red-600 md:ml-20">
          <div className="flex justify-between flex-col w-full h-full">
            
          <button
                onClick={() => {
                  setStartScan(!startScan);
                }}
                className="text-white w-full mt-2 border-[1px] p-3 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer bg-gradient-to-r from-orange-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
              >
                {startScan ? "Stop Scan" : "Start Scan"}
              </button>
  
              {startScan && (
                <>
                  <select
                    onChange={(e) => setSelected(e.target.value)}
                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                  >
                    <option value={"environment"}>Back Camera</option>
                    <option value={"user"}>Front Camera</option>
                  </select>
  
                  <QrReader
                    facingMode={selected}
                    delay={1000}
                    onError={handleError}
                    onResult={handleScan}
                    style={{ width: "100%", marginTop: "10px" }}
                  />
                </>
              )}
              {loadingScan && <p>Loading</p>}
 
          </div>

        </div>

      </div>



  
      <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10 md:ml-50 h-90">
        <div className="p-8 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
          {/* Address To input with QR scanner option */}
          <Input
            className="py-2"
            placeholder="Address To"
            name="addressTo"
            type="text"
            value={formData.addressTo}
            handleChange={handleChange}
          />
  
          {/* Other input fields */}
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            value={formData.amount}
            handleChange={handleChange}
          />
          <Input
            placeholder="Name"
            name="keyword"
            type="text"
            value={formData.keyword}
            handleChange={handleChange}
          />
          <Input
            placeholder="Enter Message"
            name="message"
            type="text"
            value={formData.message}
            handleChange={handleChange}
          />
  
          <div className="h-[1px] w-full bg-gray-400 my-2" />
  
          {isLoading ? (
            <Loader />
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              Send now
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Welcome;