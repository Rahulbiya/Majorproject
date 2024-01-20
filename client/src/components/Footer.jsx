import React from "react";

// import logo from "../../images/logo.png";

const Footer = () => (
<div className="w-full bg-gray-800">
  <div className="w-full flex justify-between items-center flex-col sm:flex-row flex-wrap">
    <div className="flex items-center">
      <img src="http://localhost:5173/images/xcrypt_logo.png" alt="your image" width='170px' height='200px' />
    </div>
    {/* <div className="flex-1 justify-evenly items-center mt-5 w-full sm:flex">
      <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
      <p className="text-white text-base text-center mx-2 cursor-pointer">Accounts</p>
      <p className="text-white text-base text-center mx-2 cursor-pointer">Transactions</p>
      <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
    </div> */}

    <div className="flex flex-col text-white p-1">
      <h4 className="text-blue mb-0.5 text-indigo-700">Connect</h4>
      <a href="http://">Discord</a>
      <a href="http://">X/Twitter</a>
      <a href="http://">Github</a>
    </div>

      <div className="flex flex-col text-white p-1">
      <h4 className="text-blue mb-0.5 text-indigo-700	">Apps</h4>
      <a href="http://">DEX</a>
      <a href="http://">NFT</a>
      <a href="http://">DAO</a>
    </div>

 

  <div className="flex justify-center items-center flex-col mt-5">
    {/* <p className="text-white text-sm text-center">Join us and experience the unexpected miracles.</p> */}
    <p className="text-white text-sm text-center font-medium mt-2">Contact us at: pariatapan0@gmail.com</p>
  </div>

   </div>

  <div className="w-full h-0.5 bg-gray-800	 mt-5" />

  <div className="w-full flex justify-center items-center mt-3">
    <p className="text-white text-xs">© 2024 YourCompany. All rights reserved</p>
  </div>
</div>

);

export default Footer;