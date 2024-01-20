// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CryptoPriceTracker = () => {
//   const [cryptoData, setCryptoData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false' 
//         );

//         setCryptoData(response.data);
//       } catch (error) {
//         console.error('Error fetching crypto data:', error);
//       }
//     };

//     // Fetch data on component mount
//     fetchData();

//     // Fetch data every 5 seconds (adjust as needed)
//     const intervalId = setInterval(fetchData, 5000000);

//     // Cleanup the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array means this effect runs once after initial render

//   return (
//     <div className="max-w-2xl mx-auto my-8">
//     <h2 className="text-3xl font-bold mb-4 text-white">Crypto Price Tracker</h2>
//     <ul className="space-y-4">
//       {cryptoData.map((crypto) => (
//         <li key={crypto.id} className="bg-white p-4 rounded-md shadow-md">
//           <img
//             src={crypto.image}
//             alt={crypto.name}
//             className="w-10 h-10 mr-4 rounded-full"
//           />
//           <div>
//             <h3 className="text-xl font-semibold">{crypto.name}</h3>
//             <p className="text-gray-600">Symbol: {crypto.symbol}</p>
//             <p className="text-green-600">Current Price: ${crypto.current_price}</p>
//             <p className="text-blue-600">Market Cap: ${crypto.market_cap}</p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   </div>
//   );
// };

// export default CryptoPriceTracker;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CryptoPriceTracker = () => {
//   const [cryptoData, setCryptoData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.coinbase.com/v2/exchange-rates?currency=BTC' // Replace with the actual API endpoint
//         );

//         setCryptoData(response.data.data);
//       } catch (error) {
//         console.error('Error fetching crypto data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-2xl mx-auto my-8">
//       <h2 className="text-3xl font-bold mb-4">Crypto Price Tracker</h2>
//       {cryptoData ? (
//         <ul className="space-y-4">
//           {Object.entries(cryptoData.rates).map(([symbol, price]) => (
//             <li key={symbol} className="bg-white p-4 rounded-md shadow-md">
//               <div>
//                 <h3 className="text-xl font-semibold">{symbol}</h3>
//                 <p className="text-green-600">Current Price: ${price}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default CryptoPriceTracker;


// src/App.js

import React, { useEffect, useState } from 'react';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coincap.io/v2/assets'); // Replace with your API endpoint
        const data = await response.json();
        setCryptoData(data.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-semibold">Crypto Price Tracker</h1>
      </header>

      <main className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {cryptoData.slice(0, 21).map((crypto) => (
    <div key={crypto.id} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{crypto.name}</h2>
      <p className="text-gray-600">{crypto.symbol}</p>
      <p className="text-2xl font-bold mt-2">${crypto.priceUsd}</p>
      <p className={crypto.changePercent24Hr >= 0 ? 'text-green-500' : 'text-red-500'}>
        {crypto.changePercent24Hr}%
      </p>
    </div>
  ))}
</div>
      </main>
    </div>
  );
};

export default App;
