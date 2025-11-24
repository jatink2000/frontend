import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-sm text-gray-600 font-medium">
      {/* ====== TOP LINKS ====== */}
      <div className="container max-w-7xl mx-auto  px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {/* --- Categories --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#0AAD0A] cursor-pointer">Vegetables & Fruits</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Breakfast & instant food</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Bakery & Biscuits</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Atta, rice & dal</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Sauces & spreads</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Organic & gourmet</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Baby care</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Cleaning essentials</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Personal care</li>
          </ul>
        </div>

        {/* --- Column 2 --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 invisible">.</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#0AAD0A] cursor-pointer">Dairy, bread & eggs</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Cold drinks & juices</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Tea, coffee & drinks</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Masala, oil & more</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Chicken, meat & fish</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Paan corner</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Pharma & wellness</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Home & office</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Pet care</li>
          </ul>
        </div>

        {/* --- Get to know us --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Get to know us</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#0AAD0A] cursor-pointer">Company</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">About</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Blog</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Help Center</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Our Value</li>
          </ul>
        </div>

        {/* --- For Consumers --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">For Consumers</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#0AAD0A] cursor-pointer">Payments</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Shipping</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Product Returns</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">FAQ</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Shop Checkout</li>
          </ul>
        </div>

        {/* --- Become a Shopper --- */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Become a Shopper</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#0AAD0A] cursor-pointer">Shopper Opportunities</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Become a Shopper</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Earnings</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">Ideas & Guides</li>
            <li className="hover:text-[#0AAD0A] cursor-pointer">New Retailers</li>
          </ul>
        </div>
      </div>

      {/* ====== MIDDLE BAR ====== */}
      <div className="border-t border-gray-200">
        <div className="container max-w-7xl mx-auto  flex flex-col md:flex-row justify-between items-center px-6 py-5 text-gray-700">
          {/* Payment Partners */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-semibold text-gray-900">Payment Partners</span>
            <img src="https://freshcart-next-js.vercel.app/images/payment/amazonpay.svg" className="h-5" />
            <img src="https://freshcart-next-js.vercel.app/images/payment/american-express.svg" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-5" />
          </div>

          {/* App Badges */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-gray-900 font-medium">Get deliveries with FreshCart</span>
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
              className="h-10"
            />
          </div>
        </div>
      </div>

      {/* ====== BOTTOM BAR ====== */}
      <div className="border-t border-gray-200">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-gray-600 pb-25">
          <p>
            © 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved.{" "}
            Powered by{" "}
            <span className="text-[#0AAD0A] font-medium hover:underline cursor-pointer">
              Codescandy
            </span>.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-gray-800">Follow us on</span>
            <FaFacebookF className="text-gray-600 hover:text-[#0AAD0A] cursor-pointer transition" />
            <FaTwitter className="text-gray-600 hover:text-[#0AAD0A] cursor-pointer transition" />
            <FaInstagram className="text-gray-600 hover:text-[#0AAD0A] cursor-pointer transition" />
          </div>
        </div>
      </div>
    </footer>
  );
}
