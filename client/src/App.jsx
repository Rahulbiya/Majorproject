import { useState } from 'react'
import React from 'react'
import {Navbar , Welcome,Footer,Services , Transactions} from './components'
import {Provider}  from 'react-redux'

const App = () => {
  return (
    <>
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer />
    </div>
  </>
  )
}

export default App
