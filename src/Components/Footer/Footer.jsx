import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css'; 

import fbIcon from "../../assets/facebook.png";
import inIcon from "../../assets/linkedin.png"; 
import igIcon from "../../assets/instagram.png";

// நீங்க சொன்ன ரெண்டு Background இமேஜஸ்
import bgLeft from "../../assets/footer-bg.png"; 
import bgRight from "../../assets/footer-bg1.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      
      {/* Background Images Layer */}
      <div className="footer-background-layer">
        <img src={bgLeft} alt="Background Left" className="bg-image-left" />
        <img src={bgRight} alt="Background Right" className="bg-image-right" />
      </div>

      <div className="footer-content-wrapper">
        <div className="footer-top-grid">
          
          {/* Left Column - Navigation Links */}
          <div className="footer-nav-links">
            <Link to="/" className="sdes">Home</Link>
            <Link to="/projects" className="sdes">Projects</Link>
            <Link to="/services" className="sdes">Our Services</Link>
            <Link to="/studio" className="sdes">Our Studio</Link>
            <Link to="/contact" className="sdes">Contact</Link>
            <Link to="/blog" className="sdes">Blog</Link>
          </div>

          {/* Middle Column - Location & Studio Notes */}
          <div className="footer-middle-section">
            <div className="location-block">
              <h4 className="underlined-title stit">Location :</h4>
              <p className="address-text des">
                No.385/2, Sandnest Consortium,<br />
                Road Inside Gv happy nest arch inside dead end<br />
                gate, jothinagar, kalampalayam,<br />
                coimbatore-641010, Coimbatore
              </p>
              <p className="contact-text sdes">
                Call us: +91 804 809 66 89<br />
                Email: <a href="mailto:sandnestarchitects@gmail.com">sandnestarchitects@gmail.com</a>
              </p>
            </div>

            <div className="studio-notes-block">
              <h4 className="underlined-title stit">Studio Notes :</h4>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter Your Mail ID......." className="sdes" required />
                <button type="submit" className="sdes">Submit</button>
              </form>
            </div>
          </div>

          {/* Right Column - Studio Updates (Social Icons) */}
          <div className="footer-right-section">
            <h4 className="underlined-title stit">Studio Updates :</h4>
            <div className="social-icons-container">
              <a href="#" className="social-icon-box">
                <img src={igIcon} alt="Instagram" />
              </a>
              <a href="#" className="social-icon-box">
                <img src={fbIcon} alt="Facebook" />
              </a>
              <a href="#" className="social-icon-box">
                <img src={inIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Giant Text */}
        <div className="footer-bottom-brand">
          <h1 className="tit">SANDNEST CONSORTIUM</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;