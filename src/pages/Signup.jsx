import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [signup, setSignup] = useState({ name: "", email: "", password: "" });

  const inputValue = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const submitBtn = async (e) => {
    e.preventDefault();

    if (!signup.name || !signup.email || !signup.password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await axios.post("https://freshcartproject-backend.vercel.app/signup", signup);

      if (res.data.status) { // ✅ updated key name
        alert("Signup successful!");
        setSignup({ name: "", email: "", password: "" });
      } else {
        alert(res.data.message || "Signup failed!");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Error saving data! Check backend connection.");
    }
  };


  // for cross button -----
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // goes back to previous page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4  font-medium">
      <div className="relative bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <button 
        onClick={handleClose}
        className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold">
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        <form onSubmit={submitBtn} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={signup.name}
              onChange={inputValue}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0AAD0A]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email address"
              value={signup.email}
              onChange={inputValue}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0AAD0A]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={signup.password}
              onChange={inputValue}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0AAD0A]"
            />
          </div>

          <p className="text-sm text-gray-500 text-center">
            By signing up, you agree to our{" "}
            <a href="#" className="text-[#0AAD0A] hover:underline">
              Terms of Service
            </a>{" "}
            &{" "}
            <a href="#" className="text-[#0AAD0A] hover:underline">
              Privacy Policy
            </a>
          </p>

          <button
            type="submit"
            className="w-full bg-[#0AAD0A] hover:[#0AAD0A] text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/Signin" className="text-[#0AAD0A] hover:underline font-medium">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
