import axios from 'axios'
import React, { useState } from 'react'

 function Wishlistitem() {

    let [wishlist,setwishlist]=useState({})


    let inputvalue=(e)=>{
        setwishlist({
           ...wishlist, [e.target.name]:e.target.value
        })
    }



    let additem=()=>{
        axios.post("https://freshcartproject-backend.vercel.app/wishlistitem",{wishlist})
    }

  return (
    <>

     <h1>wishlist products</h1>
    <label>product name</label>
    <input type='text' placeholder='product name' name='name' onChange={inputvalue}/>
    
    {/* <label>product rating</label>
    <input type='text' placeholder='product rating' name='rating' onChange={inputvalue}/> */}
     <label>product image</label>
    <input type='text' placeholder='product image url' name='productimage' onChange={inputvalue}/>

    <label>product price</label>
    <input type='text' placeholder='product price' name='price' onChange={inputvalue}/>
     
    <button onClick={additem}>Add product</button>
     
      
      
    </>
  )
}

export {Wishlistitem}


