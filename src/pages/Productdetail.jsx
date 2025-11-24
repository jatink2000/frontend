import React, { useState } from "react";
import {
  FaCartPlus,
  FaHeart,
  FaShareAlt,
  FaStar,
  FaRedoAlt,
} from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Buynow from "../components/Buynow";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Productdetail() {

  let loc=useLocation()
  

  const [activeTab, setActiveTab] = useState("details");
  const [mainImage, setMainImage] = useState(
    "https://freshcart-next-js.vercel.app/images/products/product-single-img-1.jpg"
  );
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState("250g");

  const images = [
    "https://freshcart-next-js.vercel.app/images/products/product-single-img-1.jpg",
    "https://freshcart-next-js.vercel.app/images/products/product-single-img-2.jpg",
    "https://freshcart-next-js.vercel.app/images/products/product-single-img-3.jpg",
    "https://freshcart-next-js.vercel.app/images/products/product-single-img-4.jpg",
  ];

  const products = [
    {
      id: 1,
      badge: "Sale",
      discount: "10%",
      image:
        "https://freshcart-next-js.vercel.app/images/products/product-img-1.jpg",
      category: "Snack & Munchies",
      title: "Haldiram's Sev Bhujia",
      rating: 4.3,
      reviews: 4,
      price: 21.6,
      oldPrice: 24,
      badgeColor: "bg-red-500",
      
    },
    {
      id: 2,
      image:
        "https://freshcart-next-js.vercel.app/images/products/product-img-2.jpg",
      category: "Bakery & Biscuits",
      title: "NutriChoice Digestive",
      rating: 4.3,
      reviews: 4,
      price: 24,
      oldPrice: 24,
      
    },
    {
      id: 3,
      badge: "Buy 1 Get $4.00 Off",
      image:
        "https://freshcart-next-js.vercel.app/images/products/product-img-3.jpg",
      category: "Bakery & Biscuits",
      title: "Cadbury 5 Star Chocolate",
      rating: 4.3,
      reviews: 4,
      price: 35,
      oldPrice: 35,
      badgeColor: "bg-pink-600",
    },
    {
      id: 4,
      badge: "Hot",
      discount: "40%",
      image:
        "https://freshcart-next-js.vercel.app/images/products/product-img-4.jpg",
      category: "Snack & Munchies",
      title: "Onion Flavour Potato",
      rating: 4.3,
      reviews: 4,
      price: 3,
      oldPrice: 5,
      badgeColor: "bg-red-500",
    },
    {
      id: 5,
      discount: "35%",
      image:
        "https://freshcart-next-js.vercel.app/images/products/product-img-5.jpg",
      category: "Instant Food",
      title: "Salted Instant Popcorn",
      rating: 4.3,
      reviews: 4,
      price: 11.7,
      oldPrice: 18,
    },
  ];



  let wishlist=(wishlistitem)=>{
    axios.post("https://backend-two-delta-25.vercel.app/wishlistitem",{wishlistitem})
  }


  let addtocart=(cartitem)=>{
    axios.post("https://backend-two-delta-25.vercel.app/cart",{cartitem})
  }

  return (
    <>
      <Header />
      <Navbar />

      {/* ---------------- Product Section ---------------- */}
      <div className="flex justify-center py-10 px-4 md:px-8">
        <div className="w-full max-w-7xl font-medium">
          {/* Breadcrumb */}
          <div className="text-gray-500 text-sm mb-6">
            <a href="#" className="text-[#0AAD0A] hover:underline">
              Home
            </a>{" "}
            /{" "}
            <a href="#" className="text-[#0AAD0A] hover:underline">
              Shop
            </a>
            / {loc.state.name}
          </div>

          {/* Product Content */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Left: Product Images */}
            <div className="flex-1">
              <div className="rounded-lg overflow-hidden shadow transition-all hover:-translate-y-1 hover:shadow-lg">
                <img
                  src={loc.state.productimage}
                  alt="Cadbury 5 Star"
                  className="w-xl h-auto rounded-lg transition-transform duration-300 hover:scale-105" 
                />
              </div>

            
            </div>

            {/* Right: Details */}
            <div className="flex-1">
              <h3 className="text-[#0AAD0A] uppercase text-sm mb-2 tracking-wide">
                {loc.state.category}
              </h3>
              <h1 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
                {loc.state.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center text-yellow-400 text-sm mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="ml-2 text-gray-600">(4 reviews)</span>
              </div>

              {/* Price */}
              <div className="text-2xl font-semibold mb-6">
                ${loc.state.price}
                <del className="text-gray-400 text-lg ml-2">${loc.state.oldprice}</del>
              </div>
            

              {/* Sizes */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {["250g", "500g", "1kg"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setActiveSize(size)}
                    className={`px-4 py-2 border rounded-md transition ${
                      activeSize === size
                        ? "bg-gray-400 text-white border-gray-400"
                        : "bg-white border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>


              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <button className="bg-[#0AAD0A] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#0AAD0A] transition-transform hover:-translate-y-0.5" onClick={()=>addtocart(loc.state)}>
                  <FaCartPlus /> Add to cart
                </button>

                <button className="bg-gray-100 p-3 rounded-xl hover:bg-[#0AAD0A] hover:text-white transition">
                  <FaRedoAlt />
                </button>

                <button className="bg-gray-100 p-3 rounded-xl hover:bg-[#0AAD0A] hover:text-white transition"  onClick={()=>wishlist(loc.state)}>
                  <FaHeart />
                </button>
              </div>

              {/* Info */}
              <div className="mt-6 text-gray-600 text-sm leading-7">
                <p>
                  <strong>Product Code:</strong> FBB00255
                </p>
                <p>
                  <strong>Availability:</strong> In Stock
                </p>
                <p>
                  <strong>Type:</strong> Fruits
                </p>
                <p>
                  <strong>Shipping:</strong> 01 day shipping{" "}
                  <span className="text-gray-500">(Free pickup today)</span>
                </p>
              </div>

              {/* Share */}
              <div className="mt-6">
                <button className="border border-gray-300 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-[#0AAD0A] hover:text-white transition">
                  <FaShareAlt /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* ------------------ Review Section ------------------ */}
            <div className="min-h-screen flex justify-center py-10 px-4 md:px-8">
                <div className="w-full max-w-7xl bg-white rounded-lg p-6 md:p-12 font-medium">
                    {/* Tabs */}
                    <ul className="flex flex-wrap border-b border-gray-200 mb-10 gap-4 text-sm md:text-base">
                        {["details", "information", "reviews", "seller"].map((tab) => (
                            <li
                                key={tab}
                                className={`cursor-pointer px-4 py-2 font-medium transition ${activeTab === tab
                                        ? "border-b-2 border-[#0AAD0A] text-[#0AAD0A]"
                                        : "text-gray-500 hover:text-[#0AAD0A]"
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab === "details"
                                    ? "Product Details"
                                    : tab === "information"
                                        ? "Information"
                                        : tab === "reviews"
                                            ? "Reviews"
                                            : "Seller Info"}
                            </li>
                        ))}
                    </ul>

                    {/* -------- Tabs Content -------- */}

                    {/* Product Details Tab */}
                     {activeTab === "details" && ( <div className="animate-fadeIn">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2"> Nutrient Value & Benefits </h3> 
                      <p className="text-gray-600 mb-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. </p> 
                      <h3 className="text-lg font-semibold text-gray-900 mb-2"> Storage Tips </h3> 
                      <p className="text-gray-600 mb-6"> Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. </p> 
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Unit</h3> <p className="text-gray-600 mb-6">3 units</p>
                       <h3 className="text-lg font-semibold text-gray-900 mb-2">Seller</h3>
                        <p className="text-gray-600 mb-6">DMart Pvt. LTD</p> 
                        <h3 className="text-lg font-semibold text-gray-900 mb-2"> Disclaimer </h3> 
                        <p className="text-gray-600"> Image shown is a representation and may slightly vary from the actual product. </p> 
                        </div> 
                        )}


                    {/* Information Tab */}

                     {activeTab === "information" && 
                    (<div className="animate-fadeIn"> <h3 className="text-lg font-semibold text-gray-900 mb-4"> Details </h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> {[["Weight", "1000 Grams"], ["ASIN", "SB0025UJ75W"], 
                     ["Ingredient Type", "Vegetarian"], ["Best Sellers Rank", "#2 in Fruits"], ["Brand", "DMart"], ["Date First Available", "30 April 2022"], 
                     ["Item Weight", "500g"], ["Generic Name", "Banana Robusta"], ["Item Package Quantity", "1"], ["Form", "Larry the Bird"], 
                     ["Manufacturer", "DMart"], ["Net Quantity", "340.0 Gram"], ["Product Dimensions", "9.6 × 7.49 × 18.49 cm"],].map(([label, value], i) =>
                      (<div key={i} className="bg-gray-100 p-3 rounded-md text-gray-700" > <strong className="block text-gray-900">{label}</strong>
                       <p className="text-sm">{value}</p> </div>))} </div> </div>)}

                    {/* Reviews Tab */}
                    {activeTab === "reviews" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>

                            {/* Rating Summary */}
                            <div className="bg-gray-100 p-6 rounded-lg mb-6">
                                <h2 className="text-[#0AAD0A] text-2xl font-semibold mb-1">
                                    4.4 out of 5
                                </h2>
                                <p className="text-gray-600 mb-3">7,530 global ratings</p>

                                {[80, 60, 20, 10, 5].map((w, i) => (
                                    <div key={i} className="flex items-center gap-2 mb-1">
                                        <div className="w-full h-2 bg-gray-300 rounded">
                                            <div
                                                className="bg-green-500 h-2 rounded"
                                                style={{ width: `${w}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm text-gray-700">{5 - i} ★</span>
                                    </div>
                                ))}
                            </div>

                            {/* Write Review */}
                            <div className="mb-10">
                                <h4 className="font-medium mb-2">Review this product</h4>
                                <textarea
                                    placeholder="Share your thoughts with other customers"
                                    className="w-full h-24 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
                                ></textarea>
                                <button className="mt-3 bg-[#0AAD0A] text-white px-5 py-2 rounded-md hover:bg-[#0AAD0A]">
                                    Write a Review
                                </button>
                            </div>

                            <hr className="my-6" />

                            {/* Customer Reviews */}
                            <h3 className="text-lg font-semibold mb-4">Reviews</h3>

                            {[
                                {
                                    name: "Shankar Nandakumar",
                                    title: "Needs to match the weight at delivery point",
                                    text: "Product quality is good, weight mismatch may occur during packaging...",
                                    imgs: [1, 2, 3],
                                },
                                {
                                    name: "Robert Tiwari",
                                    title: "Good product but needs accurate weight",
                                    text: "Bananas were fresh and well packed...",
                                    imgs: [],
                                },
                            ].map((r, i) => (
                                <div key={i} className="flex flex-col sm:flex-row gap-4 mb-6">
                                    <img
                                        src={`https://i.pravatar.cc/50?img=${i + 1}`}
                                        alt=""
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm">
                                            {r.name}{" "}
                                            <span className="text-[#0AAD0A] text-xs ml-1">
                                                Verified Purchase
                                            </span>
                                        </h4>
                                        <p className="font-medium text-gray-900 mt-1">{r.title}</p>
                                        <p className="text-gray-600 text-sm mt-1">{r.text}</p>

                                        {r.imgs.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {r.imgs.map((img, j) => (
                                                    <img
                                                        key={j}
                                                        src="https://via.placeholder.com/60"
                                                        alt=""
                                                        className="w-14 h-14 rounded-md object-cover"
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        <p className="text-xs text-gray-500 mt-2">Helpful · Report abuse</p>
                                    </div>
                                </div>
                            ))}

                            {/* Read More Button */}
                            <button className="border border-[#0AAD0A] text-green-500 px-5 py-2 rounded-md hover:bg-[#0AAD0A] hover:text-white transition">
                                Read More Reviews
                            </button>

                            <hr className="my-6" />

                            {/* Create Review Section */}
                            <div>
                                <h3 className="font-semibold mb-3">Create Review</h3>

                                <label className="block font-medium mb-1">Overall rating</label>
                                <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>

                                <label className="block font-medium mb-1">Rate Features</label>
                                <p className="text-sm text-gray-700 mb-1">Flavor ⭐⭐⭐⭐☆</p>
                                <p className="text-sm text-gray-700 mb-3">Value for money ⭐⭐⭐⭐⭐</p>

                                <label className="block font-medium mb-1">Add a headline</label>
                                <input
                                    type="text"
                                    placeholder="What’s most important to know"
                                    className="w-full border rounded-lg p-2 mb-3"
                                />

                                <label className="block font-medium mb-1">Add a photo or video</label>
                                <textarea
                                    placeholder="Drop files here to upload"
                                    className="w-full border rounded-lg p-2 mb-3 h-24"
                                ></textarea>

                                <label className="block font-medium mb-1">Add a written review</label>
                                <textarea
                                    placeholder="What did you like or dislike?"
                                    className="w-full border rounded-lg p-2 mb-4 h-24"
                                ></textarea>

                                <button className="bg-[#0AAD0A] text-white px-6 py-2 rounded-md hover:bg-[#0AAD0A]">
                                    Submit Review
                                </button>
                            </div>
                        </div>
                    )}


                    {activeTab === "seller" && (
                        <div className="animate-fadeIn">
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">Seller Information</h3>
                            <p className="text-gray-600">DMart Pvt. LTD, India.</p>
                        </div>
                    )}
                </div>
            </div>


           
{/* related products  */}
      {/* <div className="max-w-7xl mx-auto px-4 py-10 font-medium">
        <h2 className="text-[22px] font-semibold mb-5">Related Items</h2>
        <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(230px,1fr))]">
          {products.map((item) => (
            <div
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
                src={item.image}
                alt={item.title}
                className="w-[150px] h-[150px] object-contain mx-auto mt-4"
              />
              <p className="text-gray-500 text-[13px] mt-3">{item.category}</p>
              <p className="text-[15px] font-medium text-black mt-1">
                {item.title}
              </p>
              <p className="text-yellow-400 text-[13px] mt-1">
                ⭐ {item.rating} ({item.reviews})
              </p>
              <p className="mt-2 text-[15px] font-semibold">
                ${item.price}{" "}
                <span className="text-gray-400 line-through text-[13px] font-normal ml-1">
                  ${item.oldPrice}
                </span>
              </p>
              <button className="mt-3 bg-[#0AAD0A] hover:bg-green-700 text-white rounded-md py-[6px] px-5 text-[14px] font-medium inline-flex items-center gap-2">
                <BsPlusLg className="text-[12px]" /> Add
              </button>
            </div>
          ))}
        </div>
      </div> */}

      <Footer />
      <Buynow />
    </>
  );
}