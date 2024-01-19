import React from "react";

// import logo from "../../images/logo.png";

const Footer = () => (
<div className="w-full p-4 gradient-bg-footer">
  <div className="w-full flex justify-between items-center flex-col sm:flex-row flex-wrap my-4">
    <div className="flex items-center">
      {/* Your logo image goes here */}
    </div>
    <div className="flex-1 justify-evenly items-center mt-5 w-full sm:flex">
      <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
      <p className="text-white text-base text-center mx-2 cursor-pointer">Accounts</p>
      <p className="text-white text-base text-center mx-2 cursor-pointer">Transactions</p>
      <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
    </div>
  </div>

  <div className="flex justify-center items-center flex-col mt-5">
    {/* <p className="text-white text-sm text-center">Join us and experience the unexpected miracles.</p> */}
    <p className="text-white text-sm text-center font-medium mt-2">Contact us at: pariatapan0@gmail.com</p>
  </div>

  <div className="w-full h-0.5 bg-gray-400 mt-5" />

  <div className="w-full flex justify-between items-center mt-3">
    <p className="text-white text-xs">Email: pariatapan0@gmail.com</p>
    <p className="text-white text-xs">© 2023 YourCompany. All rights reserved</p>
  </div>
</div>

);

export default Footer;