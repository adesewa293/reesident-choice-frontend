import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'
import fb from "../Images/facebook.png"
import twitter from "../Images/twitter.png"
import instagram from "../Images/instagram.png"



const Footer=()=>{
  return(
    <footer className="footer">
      <div className="f_footer section_padding">
        <div className="f_footer-links">
          <div id="f_business" className="f_footer-links-div">
            <h4>For Business</h4>
              <Link to="/Community">
                <p>Create a Community</p>
              </Link>
              <Link to="/healthplan">
                <p>Health Plan</p>
              </Link>
              <Link to="/individual">
                <p>Individual</p>
              </Link>
          </div>
          <div className="f_footer-links_div">
            <h4>Main</h4>
            <Link to="/resource">
                <p>Resource center</p>
              </Link>
              <Link to="/resource">
                <p>Testimonials</p>
              </Link>
              <Link to="/resource">
                <p>Log In</p>
              </Link>
              <Link to="/resource">
                <p>Support</p>
              </Link>
          </div>
          <div className="f_footer-links_div">
            <h4>Company</h4>
            <Link to="/blog">
                <p>Blog</p>
              </Link>
              <Link to="/press">
                <p>Press</p>
              </Link>
              <Link to="/contact">
                <p>Contact</p>
              </Link>
          </div>
          <div className="f_footer-links_div">
            <h4> Coming Soon on</h4>
            <div className="socialmedia">
            <p><img className="socials" src={fb} alt=""/></p>
            <p><img className="socials" src={twitter} alt=""/></p>
            <p><img className="socials"src={instagram} alt=""></img> </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="f_footer-below">
          <div className="f_footer-copyright">
            <p>
              @{new Date().getFullYear()} ResidentChoice. All right reserved 
            </p>
          </div>
          <div className="f_footer-below-links">
            <Link to="/terms"><div><p>Terms & Conditions</p></div></Link>
            <Link to="/terms"><div><p>Privacy</p></div></Link>
            <Link to="/terms"><div><p>Security</p></div></Link>
            <Link to="/terms"><div><p>Cookies Declaration</p></div></Link>
          </div>
        </div>

      </div>
    </footer>

  )
}

export default Footer