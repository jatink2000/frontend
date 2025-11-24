import axios from 'axios'
import React, { useState } from 'react'

 function Addproducts() {

    let [product,setproduct]=useState({})


    let inputvalue=(e)=>{
        setproduct({
           ...product, [e.target.name]:e.target.value
        })
    }



    let additem=()=>{
        axios.post("https://freshcartproject-backend.vercel.app/addproduct",{product})
    }

  return (
    <>

     <h1>Addproducts</h1>
    <label>product name</label>
    <input type='text' placeholder='product name' name='name' onChange={inputvalue}/>
    <label>product category</label>
    <select  name='category' onChange={inputvalue} >
      <option>select yor category</option>
      <option value="Snack & Munchies">Snack & Munchies</option>
      <option value="Instant Food">Instant Food</option>
      <option value="Dairy, Bread & Eggs">Dairy, Bread & Eggs</option>
      <option value="Bakery & Biscuits">Bakery & Biscuits</option>
    </select>
    <label>product quantity</label>
    <input type='text' placeholder='product quantity' name='quantity' onChange={inputvalue}/>
     <label>product image</label>
    <input type='text' placeholder='product image url' name='productimage' onChange={inputvalue}/>

    <label>product price</label>
    <input type='text' placeholder='product price' name='price' onChange={inputvalue}/>
     <label>product old price</label>
    <input type='text' placeholder='product old price' name='oldprice' onChange={inputvalue}/>
    <button onClick={additem}>Add product</button>
     
      
      
    </>
  )
}

export {Addproducts}


