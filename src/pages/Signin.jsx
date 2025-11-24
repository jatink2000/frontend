import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"

function Signin() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans font-medium">
      {/* 🔹 Navbar */}
      <header className="flex justify-between items-center px-10 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2 text-[#0AAD0A] font-bold text-2xl">
          <img
            src="https://freshcart-next-js.vercel.app/images/logo/freshcart-logo.svg"
            alt="FreshCart Logo"
            className="h-8"
          />
        </div>
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#0AAD0A] font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </header>

      {/* 🔹 Main Section */}
      <section className="flex flex-col lg:flex-row justify-center items-center gap-20 px-6 py-16 lg:px-24">
        {/* Left Illustration */}
        <div className="hidden lg:block w-1/2">
          <img
            src="https://freshcart-next-js.vercel.app/images/svg-graphics/signin-g.svg"
            alt="Login Illustration"
            className="w-[500px] mx-auto"
          />
        </div>

        {/* Right Form */}
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            Sign in to FreshCart
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Welcome back to FreshCart! Enter your email to get started.
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0AAD0A] focus:outline-none"
            />

            <input
              type="password"
              placeholder="*****"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0AAD0A] focus:outline-none"
            />

            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="text-[#0AAD0A] border-gray-300 rounded focus:ring-[#0AAD0A]"
                />
                Remember me
              </label>
              <Link
                to="#"
                className="text-[#0AAD0A] hover:underline font-medium"
              >
                Reset It
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0AAD0A] text-white py-2 rounded-md hover:bg-[#0AAD0A] transition duration-200 font-medium"
            >
              Sign In
            </button>

            <p className="text-center text-gray-600 text-sm">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-[#0AAD0A] font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default Signin;
