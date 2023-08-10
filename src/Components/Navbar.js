import React, { useState } from "react";
import "./Navbar.css";
import Login from "../Login";
import Logout from "../Logout";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <nav className="navigation">
        {/* ... */}
        <a href="/" className="brand-name">
          Resident Choice
        </a>

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
          <ul>{/* ... */}</ul>
        </div>

        <div className="navigation-menu">
          <ul>
            <li>
              <a href="/homepage">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>

            {isAuthenticated && (
              <>
                <li>
                  <a href="/Menuupdate">Menu</a>
                </li>
                <li>
                  <a href="/Activities">Activities</a>
                </li>
                <li>
                  <a href="/Message">Message</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <Login />
      <Logout />
    </>
  );
}

