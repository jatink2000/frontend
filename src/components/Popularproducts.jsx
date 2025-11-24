import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Popularproducts() {  

  let [products,setproducts]=useState([])

  useEffect(()=>{
    ourproduct()
  },[])

  let ourproduct=()=>{
    axios.get("https://freshcartproject-backend.vercel.app/popularproducts").then((res)=>{
      if(res.data.status){
        setproducts(res.data.popularproducts)
      }
    })
  }


  let go=useNavigate()
  let productdetails=(item)=>{
    go("/Productdetail",{state:item})
  }


  


  return (
    <>
        
      <div className="max-w-7xl mx-auto px-4 py-10 font-medium">
              <h2 className="text-[22px] font-semibold mb-5">Popular products</h2>
              <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(230px,1fr))]">
                {products.map((item) => (
                  <div onClick={()=>productdetails(item)}
                    key={item.id}
                    className="relative border border-gray-200 rounded-xl p-5 text-center bg-white transition-all hover:border-[#0AAD0A]"
                  >
                    {item.badge && (
                      <span
                        className={`absolute top-3 left-3 text-white text-[12px] font-semibold py-[3px] px-[8px] rounded ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {item.discount && (
                      <span className="absolute top-10 left-3 bg-[#0AAD0A] text-white text-[12px] font-semibold py-[3px] px-[8px] rounded">
                        {item.discount}
                      </span>
                    )}
                    <img
                      src={item.productimage}
                      className="w-[150px] h-[150px] object-contain mx-auto mt-4"
                    />
                    <p className="text-gray-500 text-[13px] mt-3">{item.category}</p>
                    <p className="text-[15px] font-medium text-black mt-1">
                      {item.name}
                    </p>
                    <p className="text-yellow-400 text-[13px] mt-1">
                      ⭐ {item.rating} 
                    </p>
                    <p className="mt-2 text-[15px] font-semibold">
                      ${item.price}
                      <span className="text-gray-400 line-through text-[13px] font-normal ml-1">
                        ${item.oldprice}
                      </span>
                    </p>
                    <button className="mt-3 bg-[#0AAD0A] hover:bg-green-700 text-white rounded-md py-[6px] px-5 text-[14px] font-medium inline-flex items-center gap-2">
                      <BsPlusLg className="text-[12px]" /> Add
                    </button>
                  </div>
                ))}
              </div>
            </div>

    </>
  )
}

export default Popularproducts