import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Clock, Gift, Box, RefreshCcw } from "lucide-react";

function Bestsells() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 100 });
  }, []);



  return (
    <>
      {/* Daily Best Sells */}
      <div className="bg-white text-gray-900 py-12 font-medium">
      <div className="container max-w-7xl mx-auto px-4 py-10">
        {/* Title */}
        <h2 className="text-[22px] font-semibold mb-6 inline-block border-b-2 border-gray-200 pb-1">
          Daily Best Sells
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Offer Card */}
          <div
            className="rounded-xl text-white flex flex-col justify-center bg-cover bg-center p-8 sm:p-10"
            style={{
              backgroundImage:
                "url('https://freshcart-next-js.vercel.app/images/banner/banner-deal.jpg')",
            }}
          >
            <h3 className="text-lg sm:text-xl font-semibold leading-snug mb-2">
              100% Organic Coffee <br /> Beans.
            </h3>
            <p className="text-sm mb-5">Get the best deal before close.</p>
            <button className="bg-[#0AAD0A] hover:bg-[#0AAD0A] text-white font-medium rounded-md px-4 py-2 text-sm flex items-center gap-2 w-fit transition-all">
              Shop Now <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          {/* Product Card 1 */}
          <div className="border border-gray-200 rounded-xl p-5 text-center bg-white hover:border-[#0AAD0A] transition">
            <img
              src="https://freshcart-next-js.vercel.app/images/products/product-img-11.jpg"
              alt="Roast Ground Coffee"
              className="w-36 h-36 object-contain mx-auto my-3"
            />
            <p className="text-sm text-gray-500">Tea, Coffee & Drinks</p>
            <p className="text-[15px] font-medium text-black mt-1">
              Roast Ground Coffee
            </p>
            <p className="mt-2 text-[15px] font-semibold">
              $13.5{" "}
              <span className="line-through text-gray-400 text-sm font-normal ml-1">
                $18
              </span>
            </p>
            <p className="text-yellow-400 mt-1 text-sm">⭐ 4.3</p>
            <button className="bg-[#0AAD0A] text-white rounded-md py-2 px-4 text-sm font-medium mt-3 flex items-center justify-center gap-2 w-full transition">
              <i className="bi bi-plus-lg"></i> Add to cart
            </button>

            {/* Timer */}
            <div className="flex justify-between mt-4">
              {[
                ["1071", "Days"],
                ["4", "Hours"],
                ["1", "Mins"],
                ["6", "Sec"],
              ].map(([num, label], idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-center w-[22%]"
                >
                  <p className="text-[13px] font-semibold text-gray-800">
                    {num}
                  </p>
                  <span className="text-[11px] text-gray-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="border border-gray-200 rounded-xl p-5 text-center bg-white hover:border-[#0AAD0A] transition">
            <img
              src="https://freshcart-next-js.vercel.app/images/products/product-img-12.jpg"
              alt="Crushed Tomatoes"
              className="w-36 h-36 object-contain mx-auto my-3"
            />
            <p className="text-sm text-gray-500">Fruits & Vegetables</p>
            <p className="text-[15px] font-medium text-black mt-1">
              Crushed Tomatoes
            </p>
            <p className="mt-2 text-[15px] font-semibold">
              $13.5{" "}
              <span className="line-through text-gray-400 text-sm font-normal ml-1">
                $18
              </span>
            </p>
            <p className="text-yellow-400 mt-1 text-sm">⭐ 4.3</p>
            <button className="bg-[#0AAD0A] text-white rounded-md py-2 px-4 text-sm font-medium mt-3 flex items-center justify-center gap-2 w-full transition">
              <i className="bi bi-plus-lg"></i> Add to cart
            </button>

            <div className="flex justify-between mt-4">
              {[
                ["1071", "Days"],
                ["4", "Hours"],
                ["1", "Mins"],
                ["6", "Sec"],
              ].map(([num, label], idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-center w-[22%]"
                >
                  <p className="text-[13px] font-semibold text-gray-800">
                    {num}
                  </p>
                  <span className="text-[11px] text-gray-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="border border-gray-200 rounded-xl p-5 text-center bg-white hover:border-[#0AAD0A] transition">
            <img
              src="https://freshcart-next-js.vercel.app/images/products/product-img-13.jpg"
              alt="Golden Pineapple"
              className="w-36 h-36 object-contain mx-auto my-3"
            />
            <p className="text-sm text-gray-500">Fruits & Vegetables</p>
            <p className="text-[15px] font-medium text-black mt-1">
              Golden Pineapple
            </p>
            <p className="mt-2 text-[15px] font-semibold">
              $14.4{" "}
              <span className="line-through text-gray-400 text-sm font-normal ml-1">
                $18
              </span>
            </p>
            <p className="text-yellow-400 mt-1 text-sm">⭐ 4.3</p>
            <button className="bg-[#0AAD0A] text-white rounded-md py-2 px-4 text-sm font-medium mt-3 flex items-center justify-center gap-2 w-full transition">
              <i className="bi bi-plus-lg"></i> Add to cart
            </button>

            <div className="flex justify-between mt-4">
              {[
                ["1071", "Days"],
                ["4", "Hours"],
                ["1", "Mins"],
                ["6", "Sec"],
              ].map(([num, label], idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-center w-[22%]"
                >
                  <p className="text-[13px] font-semibold text-gray-800">
                    {num}
                  </p>
                  <span className="text-[11px] text-gray-500">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Bestsells;
