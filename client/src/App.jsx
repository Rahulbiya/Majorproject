import { useState } from 'react'
import React from 'react'
import {Navbar , Welcome,Footer,Services} from './components'
import {Provider}  from 'react-redux'
import Mission from './components/Mission'
import CryptoPriceTracker from './components/CryptoPriceTracker'
import MyComponent from './components/test'


const App = () => {
  return (
    <>
    <div className='min-h-screen'>
      <div className='bg-gradient-to-bl from-orange-900 via-black to-black'>
        <Navbar/>
     
        <Welcome/>
      </div>
      <Services/>
      {/* <div className="bg-gray-100 min-h-screen flex items-center justify-center"> */}
      {/* <Market /> */}
      <MyComponent/>
       <CryptoPriceTracker/>
      </div>
      {/* <Transactions/> */}
      <Mission />
      <Footer />
  </>
  )
}

export default App
