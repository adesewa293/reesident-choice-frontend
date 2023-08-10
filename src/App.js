import React from "react";
import "./App.css";

// import Activities from "./Components/Activities";
import Eventupdate from "./Components/Eventupdate";
import Homepage from "./Components/Homepage";
import Menuupdate from "./Components/Menuupdate";
import Privatemessage from "./Components/Privatemessage";
import Residentlanding from "./Components/Residentlanding";
import Services from "./Components/Services";
import Stafflanding from "./Components/Stafflanding";
// import About from "./Components/About"

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Profile from "./Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Profile />
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/Services" element={<Services/>} />
          <Route path="/Residentlanding" element={<Residentlanding />} />
          {/* <Route path="/Activities" element={<Activities />} /> */}
          <Route path="/Message" element={<Privatemessage />} />
          <Route path="/Stafflanding" element={<Stafflanding />} />
          <Route path="/Eventupdate" element={<Eventupdate />} />
          <Route path="/Menuupdate" element={<Menuupdate />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
