import React, { useState, useEffect, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

function MyComponent() {
  const { currentAccount } = useContext(TransactionContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Initialize error state
  const [expanded, setExpanded] = useState(false);

  const url = `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=0xd18F36E01c7718907CD52080cff7228c176232bC&startblock=1&offset=10&page=1&sort=desc&apikey=272XCJSQQFIRC4ZSUCY1V6DQXT1D7J4MS6`; // Replace with your actual URL

  //const url = `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${currentAccount}&startblock=1&offset=10&page=1&sort=desc&apikey=272XCJSQQFIRC4ZSUCY1V6DQXT1D7J4MS6`; 

// console.log('current account', currentAccount);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }, []);
  
  // console.log('data',data);
  
  if (currentAccount === "") {
    return (
      <div className="flex justify-center items-center w-full px-20 py-12 gradient-bg-transactions">
        <div className="flex flex-col p-12">
          <h1 className="text-white text-3xl text-center my-2">
            Please connect your wallet
          </h1>
        </div>
      </div>
    );
  }

  const renderTransactions = () => {
    if (!data || !data.result) return null;

    const transactionsToDisplay = expanded ? data.result : data.result.slice(0, 6);

    function shortenAddress(address, chars = 6) {
      if (!address) return '';
      return address.slice(0, chars) + '...' + address.slice(-chars);
  }

    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {transactionsToDisplay.map((item, index) => (
          <div key={index} className="max-w-lg">
            <div className="bg-white rounded-lg shadow-md p-6">

              <h1 className="text-gray-800 text-xl font-bold mb-2" >
              From: {shortenAddress(item.from)}
              </h1>
              <h1 className="text-gray-800 text-xl font-bold mb-2">
                To: {shortenAddress(item.to)}
              </h1>
              <p className="text-gray-700 text-base mb-2">
                Value: {item.value * 10 ** -18}
              </p>
              <p className="text-gray-700 text-base mb-2">
                Date: {new Date(item.timeStamp * 1000).toLocaleString()}
              </p>
              <p className="text-gray-700 text-base mb-2">
                Status: {item.isError === "0" ? "Success" : "Failed"}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col items-center w-full px-20 bg-black">
      {renderTransactions()}
      {data && data.result.length > 6 && (
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleExpand}
        >
          {expanded ? "Collapse" : "Expand"}
        </button>
      )}
    </div>
  );
}

export default MyComponent;
