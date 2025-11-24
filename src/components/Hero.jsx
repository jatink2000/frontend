import React from "react";

export default function HeroBanner() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-10">
      {/* Container with background image */}
      <div
        className="relative bg-cover bg-center rounded-xl text-[#001e2b] p-10 md:p-27"
        style={{
          backgroundImage:
            "url('https://freshcart-next-js.vercel.app/images/slider/slide-1.jpg')",
        }}
      >
        {/* Optional light overlay */}
        <div className="absolute inset-0  rounded-xl"></div>

        {/* Content */}
        <div className="relative z-10 max-w-lg">
          <span className="bg-yellow-400 text-[#001e2b] text-sm font-semibold px-3 py-1 rounded-full">
            Free Shipping - orders over $100
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight">
            Free Shipping on <br /> orders over{" "}
            <span className="text-[#0AAD0A]">$100</span>
          </h1>

          <p className="text-gray-700 mt-5 text-lg leading-relaxed">
            Free Shipping to First-Time Customers Only. After promotions and
            discounts are applied.
          </p>

          <button className="mt-6 bg-[#001e2b] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#003344] transition inline-flex items-center gap-2">
            Show Now <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
