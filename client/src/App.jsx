import { useState } from 'react'
import React from 'react'
import {Navbar , Welcome,Footer,Services} from './components'
import {Provider}  from 'react-redux'
import Mission from './components/Mission'

const App = () => {
  return (
    <>
    <div className='min-h-screen'>
      <div className='bg-gradient-to-bl from-orange-900 via-black to-black'>
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {/* <Market /> */}
      </div>
      {/* <Transactions/> */}
      <Mission />
      <Footer />
    </div>
  </>
  )
}

export default App
