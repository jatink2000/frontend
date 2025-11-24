import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Buynow from "../components/Buynow";




function Wishlist() {
  

   let [wishlist,setwishlist]=useState([])

  useEffect(()=>{
    ourwishlist()
  },[])

  let ourwishlist=()=>{
    axios.get("https://backend-two-delta-25.vercel.app/wishlist").then((res)=>{
      if(res.data.status){
        setwishlist(res.data.wishlist)
      }
    })
  }



  // removeitem 
  let removeitem=(item)=>{
    axios.post("https://backend-two-delta-25.vercel.app/removewishlistitem",{item})

    window.location.reload()
  }

  localStorage.setItem("countwishlist",wishlist.length)

  return (
       <>
    <Header/>
    <Navbar/>

    <div className="min-h-screen bg-white max-w-7xl mx-auto px-6 md:px-12 py-10 text-gray-800  font-medium">
      {/* 🔹 Breadcrumb */}
      <div className="text-sm text-gray-500 mb-3">
        <a href="/" className="text-green-600 hover:underline">
          Home
        </a>{" "}
        /{" "}
        <a href="#" className="text-green-600 hover:underline">
          Shop
        </a>{" "}
        / <span>Shop Wishlist</span>
      </div>

      {/* 🔹 Title */}
      <h1 className="text-3xl font-semibold mb-1">My Wishlist</h1>
      <p className="text-gray-500 mb-8">
        There are {wishlist.length} products in this wishlist.
      </p>

      {/* 🔹 Table */}
      <div className="overflow-x-auto ">
        <table className="min-w-full text-sm text-left ">
          <thead className="bg-gray-100 text-gray-400 font-medium">
            <tr>
             
              <th className="p-4">Product</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Actions</th>
              <th className="p-4">Remove</th>
            </tr>
          </thead>

          <tbody>
            {wishlist.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 transition-all"
              >
               

                {/* Product Info */}
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={item.productimage}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover "
                  />
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <span className="text-xs text-gray-500">{item.qty}</span>
                  </div>
                </td>

                <td className="p-4">${item.price}</td>

                {/* Action Button */}
                <td className="p-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-md text-sm font-medium">
                      Add to cart
                    </button>
                </td>

                {/* Remove */}
                <td className="p-4">
                  <button className="text-gray-400 hover:text-red-500 text-lg" onClick={()=>removeitem(item)}>
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <Footer/>
    <Buynow/>
    </>
  );
};

export default Wishlist;
