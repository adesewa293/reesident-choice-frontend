import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";
import "./Navbar.css";



export default function Navbar() {
    
    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      {/* ... */}
      <Link to="/" className="brand-name">
        Resident Choice
        </Link>
        <button className="nav-btn" 
            onClick={() => {
                console.log("button click");
                setIsNavExpanded(!isNavExpanded); 
            }}> 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
         {/* ... */}
        </button>
        <div
        className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
            <ul>
              {/* ... */}
            </ul>
        </div>
        
        <div className="navigation-menu">
        
        <ul>
            <li>
                <Link to="/homepage">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/Menuupdate">Menu</Link>
            </li>
            <li>
                <Link to="/Activities">Activities</Link>
            </li>
            <li>
                <Link to="/Messages">Update</Link>
            </li>
                </ul>
        </div>

    </nav>
  );
}
