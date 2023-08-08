import React from 'react'
import "./App.css"

import Activities from "./Components/Activities"
import Eventupdate from "./Components/Eventupdate"
import Homepage from "./Components/Homepage"
import Mealoptions from "./Components/Mealsoptions"
import Menuupdate from "./Components/Menuupdate"
import Privatemessage from "./Components/Privatemessage"
import Residentlanding from "./Components/Residentlanding"
import Services from "./Components/Services"
import Stafflanding from "./Components/Stafflanding"
import Activitiess from "./Components/Activitiess"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Body from "./Components/Body"

import Login from "./Login"
import Logout from "./Logout"
import Profile from "./Profile"

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() 
{
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Login/>
      <Profile/>
      <Logout/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Services" element={< Services/>} />
        <Route path="/Residentlanding" element={< Residentlanding/>} />
        <Route path="/Mealoptions" element={< Mealoptions/>} />
        <Route path="/Activities" element={< Activities/>} />
        <Route path="/Privatemessage" element={< Privatemessage/>} />
        <Route path="/Stafflanding" element={< Stafflanding/>} />
        <Route path="/Eventupdate" element={< Eventupdate/>} />
        <Route path="/Menuupdate" element={< Menuupdate />} />
      </Routes>
      <Body/>
      <Footer />
    </div>
  </BrowserRouter>
  )
}



