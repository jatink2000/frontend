import React from "react";
import { motion } from "framer-motion";

function Buynow() {
  return (
    <>
      {/* Buy Now Floating Button */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="fixed right-5 bottom-5 bg-[#002b34] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 cursor-pointer z-50 hover:bg-[#204951] shadow-lg"
      >
        <span>🛍️ Buy Now</span>
      </motion.div>
    </>
  );
}

export default Buynow;
