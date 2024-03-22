import React, { useState, useEffect } from "react";

const ETHPriceConverter = () => {
  const [ethPriceInUSD, setEthPriceInUSD] = useState(null);
  const [ethPriceInINR, setEthPriceInINR] = useState(null);
  const [ethAmount, setEthAmount] = useState(1); // Initial ETH amount

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd,inr");
        const data = await response.json();
        setEthPriceInUSD(data.ethereum.usd);
        setEthPriceInINR(data.ethereum.inr);
      } catch (error) {
        console.error("Error fetching Ethereum price:", error);
        // Handle errors gracefully (e.g., display an error message)
      }
    };

    fetchEthPrice();
  }, []); // Empty dependency array to fetch price only once on component mount

  const handleEthAmountChange = (event) => {
    const newEthAmount = parseFloat(event.target.value);
    if (isNaN(newEthAmount) || newEthAmount < 0) {
      setEthAmount(0); // Handle invalid or negative input
    } else {
      setEthAmount(newEthAmount);
    }
  };

  const convertEthToCurrency = (currency) => {
    if (!ethPriceInUSD || !ethPriceInINR) {
      return "Fetching price...";
    }
    const price = currency === "USD" ? ethPriceInUSD : ethPriceInINR;
    return (ethAmount * price).toFixed(2);
  };

  return (
    <div className="eth-price-converter bg-gray-800  shadow-md px-8 py-6 flex flex-col items-center">
      <div className="flex items-center mb-4">
        <input
          type="number"
          min="0"
          step="0.01" // Allow decimal input
          placeholder="Enter ETH amount"
          className="w-40 px-3 py-2 border border-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-white bg-gray-700"
          value={ethAmount}
          onChange={handleEthAmountChange}
        />
        <select
          className="text-white bg-gray-700 px-3 py-2 border border-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
          onChange={(event) => convertEthToCurrency(event.target.value)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      {convertEthToCurrency("USD") !== "Fetching price..." && (
        <p className="text-green-500 font-semibold text-lg">
          {ethAmount} ETH ≈ {convertEthToCurrency("USD")} USD or {convertEthToCurrency("INR")} INR
        </p>
      )}
      {convertEthToCurrency("USD") === "Fetching price..." && <p className="text-gray-500">Fetching Ethereum price...</p>}
    </div>
  );
};

export default ETHPriceConverter;