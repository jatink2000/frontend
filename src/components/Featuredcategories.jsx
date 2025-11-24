import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function FeaturedCategories() {
  const scrollRef = useRef(null);

  const categories = [
    {
      img: "https://freshcart-next-js.vercel.app/images/category/category-fruits-vegetables.jpg",
      name: "Fruits & Vegetables",
    },
    {
      img: "https://freshcart-next-js.vercel.app/images/category/category-dairy-bread-eggs.jpg",
      name: "Dairy, Bread & Eggs",
    },
    {
      img: "https://freshcart-next-js.vercel.app/images/category/category-snack-munchies.jpg",
      name: "Snack & Munchies",
    },
    {
      img: "https://freshcart-next-js.vercel.app/images/category/category-bakery-biscuits.jpg",
      name: "Bakery & Biscuits",
    },
    {
      img: "https://freshcart-next-js.vercel.app/images/category/category-instant-food.jpg",
      name: "Instant Food",
    },
                    {
      img: "https://freshcart-next-js.vercel.app/images/category/category-chicken-meat-fish.jpg",
      name: "chicken meat-fish",
    },
        {
      img: "https://freshcart-next-js.vercel.app/images/category/category-cold-drinks-juices.jpg",
      name: "Cold drinks and juices",
    },
            {
      img: "https://freshcart-next-js.vercel.app/images/category/category-tea-coffee-drinks.jpg",
      name: "tea coffie and drinks",
    },
                {
      img: "https://freshcart-next-js.vercel.app/images/category/category-atta-rice-dal.jpg",
      name: "atta rice & dal",
    },
                {
      img: "https://freshcart-next-js.vercel.app/images/category/category-baby-care.jpg",
      name: "baby care",
    },
                    {
      img: "https://freshcart-next-js.vercel.app/images/category/category-chicken-meat-fish.jpg",
      name: "chicken meat-fish",
    },
                       {
      img: "https://freshcart-next-js.vercel.app/images/category/category-cleaning-essentials.jpg",
      name: "cleaning essentials",
    },
                       {
      img: "https://freshcart-next-js.vercel.app/images/category/category-pet-care.jpg",
      name: "pet care",
    },
                           {
      img: "https://freshcart-next-js.vercel.app/images/category/category-fruits-vegetables.jpg",
      name: "fruits & vegitables",
    },
    

  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white py-10  ">
      <div className="max-w-7xl mx-auto px-4 relative font-medium ">
        {/* Header with Arrows */}
        <div className="flex items-center justify-between mb-6 ">
          <h2 className="text-2xl font-semibold text-gray-800">
            Featured Categories
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <FaChevronLeft className="text-gray-500" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <FaChevronRight className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Scrollable Category Row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="min-w-[200px] flex-shrink-0 border border-gray-200 rounded-xl  transition-all duration-300 cursor-pointer text-center p-10 bg-gray-30 hover:border-[#0AAD0A] hover:bg-white"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-24 h-24 mx-auto object-contain mb-3"
              />
              <p className="text-gray-700 text-sm font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
