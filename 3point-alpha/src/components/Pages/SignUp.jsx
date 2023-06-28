import { MdEmail } from 'react-icons/md';
import { FaLock, FaStripe } from 'react-icons/fa';
import { AiOutlineGoogle, AiFillFacebook } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function SignUp() {

  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);

  const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
      () => {
          if (user) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
      googleLogout();
      setProfile(null);
  };

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
                placeholder="Address"
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
                placeholder="Address Continued"
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
                placeholder="City"
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
                placeholder="Country"
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
                placeholder="State/Providence"
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
                placeholder="Zip/Postal Code"
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
                placeholder="Create a Username"
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
              PROMO CODE
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                className="w-40 bg-black border border-gold text-gold px-3 py-2 rounded-md focus:outline-none focus:border-gold"
                placeholder="PROMO"
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
         {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          
          */}
        <div>  
          {profile ? (
                <div>
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}><AiOutlineGoogle className="text-black text-3xl" /> </button>
            )}

        </div>
        <AiFillFacebook className="text-black text-3xl ml-2" />
          </div>
        </form>
      </div>
    </div>

  );
}

export default SignUp;