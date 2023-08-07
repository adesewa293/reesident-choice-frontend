import React from 'react'
import './Footer.css'
import fb from "../Images/facebook.png"
import twitter from "../Images/twitter.png"
import instagram from "../Images/instagram.png"



const Footer=()=>{
  return(
    <div ClassName="footer">
      <div ClassName="f_footer section_padding">
        <div ClassName="f_footer-links">
          <div ClassName="f_footer-links-div">
            <h4>For Business</h4>
              <a href="/Community">
                <p>Create a Community</p>
              </a>
              <a href="/healthplan">
                <p>Health Plan</p>
              </a>
              <a href="/individual">
                <p>Individual</p>
              </a>
          </div>
          <div className="f_footer-links_div">
            <h4>Main</h4>
            <a href="/resource">
                <p>Resource center</p>
              </a>
              <a href="/resource">
                <p>Testimonials</p>
              </a>
              <a href="/resource">
                <p>Log In</p>
              </a>
              <a href="/resource">
                <p>Support</p>
              </a>
          </div>
          <div ClassName="f_footer-links_div">
            <h4>Company</h4>
            <a href="/blog">
                <p>Blog</p>
              </a>
              <a href="/press">
                <p>Press</p>
              </a>
              <a href="/contact">
                <p>Contact</p>
              </a>
          </div>
          <div ClassName="f_footer-links_div">
            <h4> Cooming Soon on</h4>
            <div ClassName="socialmedia">
            <p><img src={fb} alt=""/></p>
            <p><img src={twitter} alt=""/></p>
            <p><img src={instagram} alt=""></img> </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div ClassName="f_footer-below">
          <div ClassName="f_footer-copyright">
            <p>
              @{new Date().getFullYear()} ResidentChoice. All right reserved 
            </p>
          </div>
          <div ClassName="f_footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/terms"><div><p>Privacy</p></div></a>
            <a href="/terms"><div><p>Security</p></div></a>
            <a href="/terms"><div><p>Cookies Declaration</p></div></a>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Footer