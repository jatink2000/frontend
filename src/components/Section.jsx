import React from "react";
import { FaClock, FaGift, FaBoxOpen, FaSyncAlt } from "react-icons/fa";

export default function Section() {
  const features = [
    {
      icon: <FaClock className="text-4xl text-[#0AAD0A]" />,
      title: "10 minute grocery now",
      desc: "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
    },
    {
      icon: <FaGift className="text-4xl text-[#0AAD0A]" />,
      title: "Best Prices & Offers",
      desc: "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers.",
    },
    {
      icon: <FaBoxOpen className="text-4xl text-[#0AAD0A]" />,
      title: "Wide Assortment",
      desc: "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
    },
    {
      icon: <FaSyncAlt className="text-4xl text-[#0AAD0A]" />,
      title: "Easy Returns",
      desc: "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6 font-medium">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-gray-700">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
