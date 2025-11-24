import React from "react";

export default function Bannersection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-medium">
      <div className="grid md:grid-cols-2 gap-6">

        {/* Fruits & Vegetables */}
        <div
          className="relative bg-gray-50 rounded-xl overflow-hidden flex items-center h-52"
          style={{
            backgroundImage:
              "url('https://freshcart-next-js.vercel.app/images/banner/grocery-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" p-8 rounded-r-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Fruits & Vegetables
            </h2>
            <p className="text-gray-600 mb-4">Get Upto 30% Off</p>
            <button className="bg-[#001e2b] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#003344] transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Freshly Baked Buns */}
        <div
          className="relative bg-gray-50 rounded-xl overflow-hidden flex items-center h-52"
          style={{
            backgroundImage:
              "url('https://freshcart-next-js.vercel.app/images/banner/grocery-banner-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" p-8 rounded-r-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Freshly Baked Buns
            </h2>
            <p className="text-gray-600 mb-4">Get Upto 25% Off</p>
            <button className="bg-[#001e2b] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#003344] transition">
              Shop Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
