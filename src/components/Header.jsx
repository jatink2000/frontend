import React from "react";

import {
  FaHeart,
  FaUser,
  FaBagShopping,
  FaMagnifyingGlass,
  FaLocationDot,
} from "react-icons/fa6";

  import { Link } from 'react-router-dom'


function Header() {

  

    let numwishlist=localStorage.getItem("countwishlist")
  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="bg-gray-100 py-2 text-sm font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 text-gray-500">
          <p>Super Value Deals - Save more with coupons</p>

          <div className="flex items-center gap-2">
            <img
              src="https://freshcart-next-js.vercel.app/images/icons/english.svg"
              alt="UK Flag"
              width="20"
            />
            <select className="border-none bg-transparent focus:outline-none cursor-pointer">
              <option>English</option>
              <option>Hindi</option>
              <option>Deutsch</option>
            </select>
          </div>
        </div>
      </div>

      {/* 🔹 Logo, Search, Icons */}
      <div className="bg-white font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-5">
          {/* ✅ Logo */}
          <img
            src="https://freshcart-next-js.vercel.app/images/logo/freshcart-logo.svg"
            alt="FreshCart Logo"
            className="h-10"
          />

          {/* ✅ Search Bar + Location */}
          <div className="flex items-center gap-3 flex-grow max-w-xl w-full order-3 md:order-none">
            {/* Search Bar */}
            <div className="flex w-full group transition-all duration-300">
              <input
                type="search"
                placeholder="Search for products"
                className="w-full border border-gray-300 rounded-l-md px-5 py-3 text-gray-700 text-base focus:outline-none 
                focus:ring-2 focus:ring-green-300 focus:border-green-200 focus:shadow-[0px_0px_10px_2px_rgba(34,197,94,0.6)] transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-gray-300 text-white px-5 rounded-r-md hover:bg-[#0AAD0A] transition"
              >
                <FaMagnifyingGlass className="text-lg" />
              </button>
            </div>

            {/* Location Button */}
            <button className="border border-gray-300 px-4 py-3 rounded-md text-gray-400 flex items-center gap-2 hover:bg-gray-100 transition">
              <FaLocationDot /> Location
            </button>
          </div>

          {/* ✅ Icons */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <a href="/Wishlist">
            <div className="relative text-gray-700 cursor-pointer hover:text-[#0AAD0A]">
              <FaHeart className="text-lg" />
              <span className="absolute -top-2 -right-2 bg-[#0AAD0A] text-white rounded-full text-xs px-1">
                {numwishlist}
              </span>
            </div></a>

            {/* User */}
            <div className="text-gray-700 hover:text-[#0AAD0A] cursor-pointer" >
              <a href="/Signup"><FaUser className="text-lg " /></a>
                

            </div>

    
           
            <div className="relative text-gray-700 cursor-pointer hover:text-[#0AAD0A]">
             <Link to="/CartSlider"><FaBagShopping className="text-lg"  /></Link> 
   
              <span className="absolute -top-2 -right-2 bg-[#0AAD0A] text-white rounded-full text-xs px-1">
                5 
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
