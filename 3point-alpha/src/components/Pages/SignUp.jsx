import React from 'react'
import { MdEmail } from 'react-icons/md';
import { FaLock, FaStripe } from 'react-icons/fa';
import { AiOutlineGoogle, AiFillFacebook } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
       <div className="bg-gray-300 bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-7 w-96">
        <h2 className="text-3xl font-bold text-black mb-6">Sign Up</h2>
        <form>
           <div className="mb-2">
            <label htmlFor="firstName" className="block text-black text-sm font-bold mb-2">
              First Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your first name"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-black text-sm font-bold mb-2">
              Last Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="firstName" className="block text-black text-sm font-bold mb-2">
              Address 1
            </label>
            <div className="relative">
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your address"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-black text-sm font-bold mb-2">
              Address 2
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your address"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-black text-sm font-bold mb-2">
              City
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your city"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-black text-sm font-bold mb-2">
              Country
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your country"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-black text-sm font-bold mb-2">
              State/Providence
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your state/providence"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-black text-sm font-bold mb-2">
              Zip/Postal Code
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your zip/postal code"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-black text-sm font-bold mb-2">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Create a username"
                required
              />
            </div>
          </div>
          <div className="mb-2 relative">
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
              <MdEmail className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-xl" />
            </div>
          </div>
          <div className="mb-2 relative">
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
              <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-xl" />
            </div>
          </div>
          <div className="mb-2 relative">
            <label htmlFor="confirmPassword" className="block text-black text-sm font-bold mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500 pr-10"
                placeholder="Confirm your password"
                required
              />
              <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-xl" />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-black text-sm font-bold mb-2">
              PROMO
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                className="w-40 bg-black border border-gold text-gold px-3 py-2 rounded-md focus:outline-none focus:border-gold"
                placeholder="PROMO CODE"
                require
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-600 hover:to-gray-800 text-gray-50 text-sm font-semibold leading-6 px-3 py-1 rounded-md border-2 border-gold"
          >
            Sign Up
          </button>
          <div className="flex justify-center mt-4">
            <span className="text-sm font-medium">Or sign up with:</span>
          </div>
          <div className="flex justify-center mt-2">
            <AiOutlineGoogle className="text-black text-3xl" />
            <AiFillFacebook className="text-black text-3xl ml-2" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;