import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'

import { Addproducts } from "./Dashboard/Addproducts";

import Productdetail from './pages/Productdetail'
import Dashboard from './Dashboard/Dashboard'
import { Home } from './pages/Home'
import Signin from './pages/Signin'
import Wishlist from './pages/Wishlist'
import { Wishlistitem } from './pages/Wishlistitem'
import CartSlider from './pages/Cart'
import Checkout from './components/Checkout'












function App() {
  

  return (
    <>
    
      
      <BrowserRouter>
      
        <Routes>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/Addproducts' element={<Addproducts/>} />
          <Route path='/Productdetail' element={<Productdetail/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/Signin' element={<Signin/>} />
          <Route path='/Wishlist' element={<Wishlist/>} />
          <Route path='/Wishlistitem' element={<Wishlistitem/>} />
          <Route path='/CartSlider' element={<CartSlider/>} />
          <Route path='/Checkout' element={<Checkout/>} />



          

           

          


          



          
          


          </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
