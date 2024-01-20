import { useState } from 'react'
import React from 'react'
import {Navbar , Welcome,Footer,Services} from './components'
import {Provider}  from 'react-redux'

const App = () => {
  return (
    <>
    <div className='min-h-screen'>
      <div className='bg-gradient-to-bl from-orange-900 via-black to-black'>
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      {/* <Transactions/> */}
      <Footer />
    </div>
  </>
  )
}

export default App
