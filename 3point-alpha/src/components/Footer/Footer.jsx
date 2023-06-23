import React from 'react'
import FooterLogo from './FooterLogo.svg'
import { FaDiscord, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom'


const Footer = () => {
  return <footer class="text-white body-font border-t border-gold">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <NavLink to="/Home" className="-m-1.5 p-1.5">
            <span className="sr-only">3Point</span>
            <img className=""style={{height: 205, width: 205}} src={FooterLogo} alt="" />
          </NavLink>
      </a>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gold tracking-widest text-sm mb-3">INFORMATION</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to="/BettingEducationCenter" class="text-white hover:text-gold">Betting Education Center</Link>
          </li>
          <li>
           <Link to="/Membership" class="text-white hover:text-gold">Membership</Link>
          </li>
          <li>
            <Link to="/TermsOfService" class="text-white hover:text-gold">Terms Of Service</Link>
          </li>
          <li>
            <Link to="/GettingStarted" class="text-white hover:text-gold">Getting Started</Link>
          </li>
        </nav>
      </div>
     <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gold tracking-widest text-sm mb-3">TOOLS</h2>
        <nav class="list-none mb-10">
          <li>
           <Link to="/LiveData" class="text-white hover:text-gold">Live Odds/Scores</Link>
          </li>
          <li>
            <Link to="/TheLab" class="text-white hover:text-gold">The Lab</Link>
          </li>
          <li>
            <Link to="/EVCalculator" class="text-white hover:text-gold">+EV Calculator</Link>
          </li>
          <li>
            <Link to="/ArbCalc" class="text-white hover:text-gold">Arbitrage Calculator</Link>
          </li>
          <li>
             <Link to="/BettingSimulator" class="text-white hover:text-gold">Betting Simulator</Link>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gold tracking-widest text-sm mb-3">SOCIAL HUB</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to="/Friends" class="text-white hover:text-gold">Friends</Link>
          </li>
          <li>
             <Link to="/Leaderboards" class="text-white hover:text-gold">Leaderboards</Link>
          </li>
          <li>
            <Link to="/Achievements" class="text-white hover:text-gold">Achievements</Link>
          </li>
        </nav>
      </div>
     <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gold tracking-widest text-sm mb-3">CONNECT</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to="/ContactUs" class="text-white hover:text-gold">Contact Us</Link>
          </li>
          <li>
            <Link to="/AboutUs" class="text-white hover:text-gold">About Us</Link>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-transparent">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gold text-sm text-center sm:text-left">© Copyright 2023 3Point
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
         <a href="https://discord.com" target="_blank" rel="noopener noreferrer" class="text-gold ml-1">
    <FaDiscord className="text-2xl mr-2" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-gold ml-1">
    <FaTwitter className="text-2xl mr-2" />
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-gold ml-1">
    <FaFacebookF className="text-2xl mr-2" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-gold ml-1">
    <AiFillInstagram className="text-2xl mr-2" />
  </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="text-gold ml-1">
    <AiFillYoutube className="text-2xl mr-2" />
  </a>
      </span>
    </div>
  </div>
</footer>
}

export default Footer;