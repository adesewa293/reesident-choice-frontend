import React, { useState } from "react";
import "./Navbar.css";
import Login from "../Login";
import Logout from "../Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <nav className="navigation">
        {/* ... */}
        <Link to="/" className="brand-name">
          Resident Choice
        </Link>

        <button
          className="nav-btn"
          onClick={() => {
            console.log("button click");
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* ... */}
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {isAuthenticated && (
              <>
                <li>
                  <Link to="/Menuupdate">Menu</Link>
                </li>
                <li>
                  <Link to="/Activities">Activities</Link>
                </li>
                <li>
                  <Link to="/Message">Message</Link>
                </li>
              </>
            )}
            <Login />
            <Logout />
          </ul>
        </div>
      </nav>
    </>
  );
}
