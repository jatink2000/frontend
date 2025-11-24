import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function CartSlider() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);



  useEffect(() => {
    cartdata()
  }, [])

  let cartdata = () => {
    axios.get("https://backend-two-delta-25.vercel.app/cartlistitem").then((res) => {
      if (res.data.status) {
        setCartItems(res.data.cartitemlist)
      }
    })
  }



  let Mycartitem = ({ data }) => {
    let [quantity, setquantity] = useState(data.quantity);

    let increment = (cartid) => {
      setquantity(++quantity)
      axios.post("https://backend-two-delta-25.vercel.app/updatecartitem", { quantity, cartid })
      window.location.reload()
    }

    let decrement = (cartid) => {
      if (quantity > 1) {
        setquantity(--quantity)
        axios.post("https://backend-two-delta-25.vercel.app/updatecartitem", { quantity, cartid })
        window.location.reload()
      }
    }



    return (
      <>
        <div key={data.id}>
          <div className="flex items-center gap-3 my-4">
            <img
              src={data.productimage}
              alt={data.name}
              className="w-14 h-14 rounded-md object-cover"
            />
            <div className="flex-1">
              <h4 className="text-sm font-medium">{data.name}</h4>
              <p
                className="text-green-600 text-xs cursor-pointer"
              >
                🗑 Remove
              </p>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md">
              <button
                className="text-lg"
                onClick={() => decrement(data)}
              >
                −
              </button>
              <span className="w-5 text-center">{data.quantity}</span>
              <button
                className="text-lg"
                onClick={() => increment(data)}
              >
                +
              </button>
            </div>
            <div className="w-16 text-right font-semibold">
              ${data.price*data.quantity}
            </div>
          </div>
          <hr />
        </div>
      </>
    )
  }


  // total cart price 
  let totalprice=cartItems.reduce((total,item)=>{
    return total+item.price*item.quantity
  },0)


  let go=useNavigate()

  let chcekout=()=>{
      go("/checkout",{state:totalprice})
  }





  return (
    <div className="font-[Inter] bg-gray-50 min-h-screen">
      {/* 🛒 Open Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="m-5 px-5 py-2 bg-green-600 text-white rounded-md"
      >
        🛒 Open Cart
      </button>

      {/* Cart Slider */}
      <div
        className={`fixed top-0 right-0 w-96 h-screen bg-white shadow-2xl transform transition-transform duration-300 flex flex-col z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold">Shop Cart</h2>
          <X
            onClick={() => setIsOpen(false)}
            className="text-gray-600 cursor-pointer hover:text-black"
          />
        </div>

        <p className="text-gray-500 text-sm px-5">Location in 382480</p>
        <div className="mx-5 my-3 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          You’ve got <strong>FREE delivery</strong>. Start checkout now!
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5">
          {cartItems.map((item) => (
            <Mycartitem data={item} />
          ))}
        </div>

        {/* Footer */}
        <div className="p-5 border-t flex justify-between">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Continue Shopping
          </button>
            <button className="bg-[#051c2c] text-white px-4 py-2 rounded-md" onClick={chcekout}>
            Checkout ${totalprice}
          </button>
          
        </div>
      </div>
    </div>
  );
}
