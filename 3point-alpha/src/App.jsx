import './App.css'
{import('tailwindcss').Config}
import Wallpaper from './components/Pages/Wallpaper.png';
import Logo from './components/Navbar/Logo.svg'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import StartTrial from './components/Pages/StartTrial'
import TheLab from './components/Pages/TheLab'
import SocialHub from './components/Pages/SocialHub'
import BettingSimulator from './components/Pages/BettingSimulator'
import Basketball from './components/Pages/Basketball'
import Football from './components/Pages/Football'
import Baseball from './components/Pages/Baseball'
import Hockey from './components/Pages/Hockey'
import Soccer from './components/Pages/Soccer'
import ForgotPw from './components/Pages/ForgotPw'
import Faq from './components/Pages/Faq'
import AboutUs from './components/Pages/AboutUs'
import Articles from './components/Pages/Articles'
import TermsOfService from './components/Pages/TermsOfService'
import CheatSheet from './components/Pages/CheatSheet'
import LandingPage from './components/Pages/LandingPage'
import Membership from './components/Pages/Membership'
import GettingStarted from './components/Pages/GettingStarted'
import BettingEducationCenter from './components/Pages/BettingEducationCenter'
import LiveData from './components/Pages/LiveData'
import ArbCalc from './components/Pages/ArbCalc'
import EVCalculator from './components/Pages/EVCalculator'
import Friends from './components/Pages/Friends'
import Leaderboards from './components/Pages/Leaderboards'
import Achievements from './components/Pages/Achievements'
import ContactUs from './components/Pages/ContactUs'
import ErrorPage from './components/Pages/ErrorPage'
import Unauth from './components/Pages/Unauth'
import SignUp from './components/Pages/SignUp'
import Footer from './components/Footer/Footer'

import { GoogleLogin } from '@react-oauth/google';

export default function App() {

  return (
    <>

       <Navbar/>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/StartTrial" element={<StartTrial />} />
      <Route path="/TheLab" element={<TheLab />} />
      <Route path="/SocialHub" element={<SocialHub />} />
      <Route path="/BettingSimulator" element={<BettingSimulator />} />
      <Route path="/Basketball" element={<Basketball />} />
      <Route path="/Soccer" element={<Soccer />} />
      <Route path="/Football" element={<Football />} />
      <Route path="/Hockey" element={<Hockey />} />
      <Route path="/Baseball" element={<Baseball />} />
      <Route path="/TermsOfService" element={<TermsOfService />} />
      <Route path="/Faq" element={<Faq />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/CheatSheet" element={<CheatSheet />} />
      <Route path="/Articles" element={<Articles />} />
      <Route path="/LandingPage" element={<LandingPage />} />
       <Route path="/Membership" element={<Membership />} />
      <Route path="/GettingStarted" element={<GettingStarted />} />
      <Route path="/LiveData" element={<LiveData />} />
       <Route path="/EVCalculator" element={<EVCalculator />} />
      <Route path="/Friends" element={<Friends />} />
       <Route path="/ArbCalc" element={<ArbCalc />} />
      <Route path="/Leaderboards" element={<Leaderboards />} />
       <Route path="/BettingEducationCenter" element={<BettingEducationCenter />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/ErrorPage" element={<ErrorPage />} />
      <Route path="/Unauth" element={<Unauth />} />
       <Route path="/SignUp" element={<SignUp />} />
       <Route path="/Achievements" element={<Achievements />} />
       
    </Routes>

      <Footer/>
   
    
      </>
  )
}
/*  CONNECTING TO DATABASE
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://3pointdevs:<password>@cluster0.kmhin23.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server    (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
*/