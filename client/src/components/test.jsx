import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

function MyComponent() {
    const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
    const [data, setData] = useState(null);
    
    const [error, setError] = useState(null);

    const url = `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=0xd18F36E01c7718907CD52080cff7228c176232bC&startblock=1&offset=10&page=1&sort=desc&apikey=272XCJSQQFIRC4ZSUCY1V6DQXT1D7J4MS6`; // Replace with your actual URL
    console.log(url)
    
    useEffect(() => {
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();        
      }
      throw response;
    })
    .then(data => setData(data))
    .catch(error => {
      console.error("Error fetching data: ", error);
      setError(error);
    });
    }, []);
  
    if(currentAccount === ''){
      return(
        <>
         <div  className='flex w-full fustify-center items-center 2x1:px-20 gradient-bg-transactions'>
          <div className='flex flex-col md:p-12 py-12 px-4'></div>
          <h1 className='text-white text-3x1 text-center my-2'>Please connect your wallet</h1>
          </div>
        </>
      );
      }
  return (
    <>
        { console.log(data)}
        { 
            data && data.result.map((item, index) => (
                <div key={index} className='flex w-full fustify-center items-center 2x1:px-20 gradient-bg-transactions'>
        <div className='flex flex-col md:p-12 py-12 px-4'>
                  
                    <h1 className='text-white text-3x1 text-center my-2'>from : {(item.from)}</h1>
                    <h1 className='text-white text-3x1 text-center my-2'>to : {(item.to)}</h1>
                    <h1 className='text-white text-3x1 text-center my-2'>value : {item.value}</h1>
                    <h1 className='text-white text-3x1 text-center my-2'>date : {new Date(item.timeStamp * 1000).toLocaleString()}</h1>
                    <h1 className='text-white text-3x1 text-center my-2'>Status : {item.isError === "0" ? "Success" : "Failed"}</h1>
                
            </div>
       </div>
       
            ))}
      
      </>
   
  );

}

export default MyComponent;