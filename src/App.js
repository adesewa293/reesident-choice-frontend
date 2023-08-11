import React from "react";
import "./App.css";
import Activities from "./Components/Activities";
import Homepage from "./Components/Homepage";
import Menuupdate from "./Components/Menuupdate";
import Privatemessage from "./Components/Privatemessage";
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
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/About" element={<About />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Message" element={<Privatemessage />} />
          <Route path="/Menuupdate" element={<Menuupdate />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
