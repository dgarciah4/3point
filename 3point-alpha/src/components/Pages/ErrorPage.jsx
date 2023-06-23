import React from 'react'
import { NavLink } from 'react-router-dom';
export default function ErrorPage() {
  return (
  
      <main className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gold sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-white">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink to="/Home"
              className="w-full bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-600 hover:to-gray-800 text-gray-50 text-sm font-semibold leading-6 px-3 py-2.5 rounded-md border-2 border-gold"
            >
              Go back home
            </NavLink>
            <NavLink to="" className="w-full bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-600 hover:to-gray-800 text-gray-50 text-sm font-semibold leading-6 px-3 py-2.5 rounded-md border-2 border-gold">
              Contact support <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
        </div>
      </main>
    
  )
}