import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa6"; // ✅ Added missing import

const menuItems = [
  {
    name: "Home",
    dropdown: [
      "Home Default",
      "Home Modern",
      "Home Creative",
      "Home Local Store",
      "Home Minimalist",
    ],
  },
  {
    name: "Shop",
    dropdown: [
      "Shop Grid - Filter",
      "Shop 3 Column",
      "Shop List",
      "Shop Single",
      "Shop Wishlist",
    ],
  },
  { name: "Stores", dropdown: ["Store List", "Store Grid", "Store Single"] },
  { name: "Pages", dropdown: ["Blog", "About Us", "Contact", "404 Error"] },
  {
    name: "Account",
    dropdown: ["Sign In", "Sign Up", "Forget Password", "My Account"],
  },
  { name: "Dashboard" },
  { name: "Docs" },
];

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);



  return (
    <>
      {/* 🔹 Navigation Bar with Mobile Dropdown */}
      <div className="bg-white border-b border-gray-300">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex gap-20 items-center relative font-medium">
          {/* All Departments Button */}
          <button className="bg-[#0AAD0A] text-white px-4 py-2 rounded flex items-center gap-2 font-poppins font-medium">
            <FaBorderAll /> All Departments
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-poppins font-medium">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative cursor-pointer group"
                onMouseEnter={() =>
                  setActiveDropdown(item.dropdown ? item.name : null)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="hover:text-[#0AAD0A]">{item.name}</span>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 z-50"
                  >
                    {item.dropdown.map((drop, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-green-100 hover:text-[#0AAD0A] cursor-pointer"
                      >
                        {drop}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={() =>
              setActiveDropdown(activeDropdown === "mobile" ? null : "mobile")
            }
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
          >
            <motion.div
              animate={{
                rotate: activeDropdown === "mobile" ? 90 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              ☰
            </motion.div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {activeDropdown === "mobile" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-200 overflow-hidden"
          >
            <ul className="flex flex-col px-4 py-3 space-y-2">
              {menuItems.map((item, index) => (
                <li key={index} className="border-b border-gray-100 pb-2">
                  <div
                    className="flex justify-between items-center cursor-pointer hover:text-[#0AAD0A]"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? "mobile" : item.name
                      )
                    }
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <span className="text-gray-500 text-sm">
                        {activeDropdown === item.name ? "▲" : "▼"}
                      </span>
                    )}
                  </div>

                  {/* Submenu inside Mobile */}
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 mt-2 space-y-1"
                    >
                      {item.dropdown.map((drop, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 hover:text-[#0AAD0A] cursor-pointer"
                        >
                          {drop}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Navbar;
