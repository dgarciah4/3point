import React from 'react'
import { FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AiOutlineGoogle, AiFillFacebook } from "react-icons/ai"
import { NavLink } from 'react-router-dom';


function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-gray-300 bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-black mb-6">Log In</h2>
        <form>
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-black text-sm font-bold mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500 pr-10"
                placeholder="Enter your email"
                required
              />
              <MdEmail className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-x1" />
            </div>
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-black text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500 pr-10"
                placeholder="Enter your password"
                required
              />
              <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text=x1" />
            </div>
            <NavLink to="/ForgotPw" className="text-blue-500 text-xs mt-1 block hover:text-gold">
  Forgot Password?
</NavLink>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-600 hover:to-gray-800 text-gray-50 text-sm font-semibold leading-6 px-3 py-1 rounded-md border-2 border-gold"
          >
            Log In
          </button>
        <div className="flex justify-center mt-2">
            <span className="text- text-sm font-medium">Or</span>
          </div>
          <div className="flex justify-center mt-2">
            <AiOutlineGoogle className="text-black text-3xl" />
            <AiFillFacebook className="text-black text-3xl ml-2" />
          </div>
           <div className="flex justify-center mt-2">
            <span className="text-sm text-black">
              Don't have an account? Sign up{' '}
              <NavLink to="/signup" className="text-blue-500 hover:text-gold underline">
                here
              </NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;