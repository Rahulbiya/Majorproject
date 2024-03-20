import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/xcrypt_logo.png";

//signout
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';



const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  //signout
  const navigate = useNavigate();
 
  const handleLogout = () => {               
      signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/login");
          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
  }

  //open metamask wallet 
  const openMetaMask = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
          // MetaMask is connected and accounts are accessible
          console.log('MetaMask wallet connected:', accounts);
        })
        .catch(error => {
          // Handle error
          console.error('Error connecting to MetaMask:', error);
        });
    } else {
      // MetaMask is not installed
      console.error('MetaMask is not installed');
    }
  };

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
    <div className="md:flex-[0.9] flex-initial justify-center items-center">
      <img src={logo} alt="logo" className="w-32 cursor-pointer" />
    </div>
    <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
      {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
        <NavBarItem key={item + index} title={item} />
      ))}

      {/* //metamask wallet open  */}
      <button onClick={openMetaMask}>Wallets</button>

      {/* Signout Button */}
      <button onClick={handleLogout}>
                        Logout
                    </button>
    </ul>
    
    <div className="flex relative">
      {!toggleMenu && (
        <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
      )}
      {toggleMenu && (
        <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
      )}
      {toggleMenu && (
        <ul
          className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
        >
          <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
          {["Market", "Exchange", "Tutorials", "Wallets"].map(
            (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
          )}

           {/* //metamask wallet open  */}
      <button onClick={openMetaMask}>Wallets</button>

          {/* Signout Button */}
          <button onClick={handleLogout}>
                        Logout
                    </button>
        </ul>
      )}
    </div>
  </nav>
  );
};

export default Navbar;