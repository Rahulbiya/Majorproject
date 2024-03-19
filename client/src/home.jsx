import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from './components/Login';
import Services from './components/Services';
import CryptoPriceTracker from './components/CryptoPriceTracker';
import Mission from './components/Mission';
import Footer from './components/Footer';


const Home = ()=>{
    return (
        <>
        <div className='min-h-screen'>
          <div className='bg-gradient-to-bl from-orange-900 via-black to-black'>
            <Navbar/>
             <Welcome/>
          </div>
          <Services/>
          <CryptoPriceTracker/>
        </div>
        <Mission />
        <Footer />

        </>
    );
};

export default Home