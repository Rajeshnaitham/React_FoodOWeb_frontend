import React from 'react'
import LandingPage from './foodweb/pages/LandingPage'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import ProductMenu from './foodweb/components/ProductMenu'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/products/:firmId/:firmname' element={<ProductMenu/>}/>
      </Routes>
      {/* <LandingPage /> */}
    </div>
  )
}

export default App

