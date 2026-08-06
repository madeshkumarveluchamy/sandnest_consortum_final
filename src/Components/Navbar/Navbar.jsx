import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

// Logo and Menu Images
import logo from '../../assets/logo.png'; // Hero Main Logo
import menuLogo from '../../assets/logo2.png'; // New Logo for inside the Menu
import menuBuildingImg from '../../assets/nav-img.png'; 

// Social Icons (PNGs)
import fbIcon from "../../assets/facebook.png";
import inIcon from "../../assets/linkedin.png"; 
import igIcon from "../../assets/instagram.png";

// Contact Icons (PNGs)
import callIcon from "../../assets/telephone 1.png";
import gmailIcon from "../../assets/email 1.png";
import waIcon from "../../assets/whatsapp 1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState('GOOD MORNING');

  // Dynamic Greeting based on time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('GOOD MORNING');
    else if (hour < 18) setGreeting('GOOD AFTERNOON');
    else setGreeting('GOOD EVENING');
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ===== Main Header Navbar ===== */}
      <nav className={`navbar ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            {/* Main Hero Logo Remains the Same */}
            <img 
              src={logo} 
              alt="Sandnest Consortium" 
              style={{ opacity: isMenuOpen ? 0 : 1, transition: '0.3s' }} 
            />
          </Link>
        </div>

        {/* Center Greeting Text (Hidden when menu is open) */}
        <div 
          className="navbar-greeting" 
          style={{ opacity: isMenuOpen ? 0 : 1, transition: '0.3s' }}
        >
          {greeting} : BEGIN YOUR JOURNEY
        </div>

        {/* Dynamic Menu / Close Button */}
        <button className={`navbar-menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="menu-text">{isMenuOpen ? 'CLOSE' : 'EXPERIENCE'}</span>
          <span className="menu-icon-circle">
            <div className="hamburger-line line-1"></div>
            <div className="hamburger-line line-2"></div>
            <div className="hamburger-line line-3"></div>
          </span>
        </button>
      </nav>

      {/* ===== Full Screen Overlay Menu ===== */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}>
          
          {/* Main Content Card */}
          <div className="overlay-content-card" onClick={(e) => e.stopPropagation()}>
            
            {/* Header: Logo and Contact Icons */}
            <div className="overlay-header">
              <div className="overlay-brand-logo">
                {/* Updated: New Logo Inside the Menu */}
                <img src={menuLogo} alt="Sandnest Consortium Menu Logo" />
              </div>
              
              <div className="overlay-contact-icons">
                <a href="tel:+918048096689" className="icon-btn" title="Phone">
                  <img src={callIcon} alt="Call" className="contact-png-icon" />
                </a>
                <a href="mailto:sandnestarchitects@gmail.com" className="icon-btn" title="Email">
                  <img src={gmailIcon} alt="Gmail" className="contact-png-icon" />
                </a>
                <a href="https://wa.me/918048096689" target="_blank" rel="noreferrer" className="icon-btn" title="WhatsApp">
                  <img src={waIcon} alt="WhatsApp" className="contact-png-icon" />
                </a>
              </div>
            </div>

            {/* Middle Section: Image and Links Grid */}
            <div className="overlay-grid">
              
              <div className="overlay-image-col">
                <img src={menuBuildingImg} alt="Architecture Project" className="menu-featured-img" />
              </div>

              <div className="overlay-nav-col">
                <span className="badge-title">STRUCTURE</span>
                <ul className="overlay-links">
                  <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                  <li><Link to="/story" onClick={closeMenu}>Our Studio</Link></li>
                  <li><Link to="/services" onClick={closeMenu}>Our Services</Link></li>
                  <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                  <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
                </ul>
              </div>

              <div className="overlay-nav-col">
                <span className="badge-title">OUR EXPERTISE</span>
                <ul className="overlay-links">
                  <li><Link to="/project" onClick={closeMenu}>Structural Design</Link></li>
                  <li><Link to="/services" onClick={closeMenu}>Architectural Design</Link></li>
                  <li><Link to="/services" onClick={closeMenu}>Interior Design</Link></li>
                  <li><Link to="/services" onClick={closeMenu}>Landscape Design</Link></li>
                  <li><Link to="/services" onClick={closeMenu}>Sustainable Green Buildings</Link></li>
                </ul>
              </div>

              <div className="overlay-nav-col">
                <span className="badge-title">INSIGHTS</span>
                <ul className="overlay-links">
                  <li><Link to="/testimonials" onClick={closeMenu}>Testimonials</Link></li>
                  <li><Link to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link></li>
                </ul>
              </div>

            </div>

            {/* Bottom Section: Social Media Cards */}
            <div className="overlay-social-row">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-card">
                <span className="social-text">INSTAGRAM</span>
                <span className="social-arrow">⟶</span>
                <img src={igIcon} alt="Instagram" className="social-png-icon" />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-card">
                <span className="social-text">LINKEDIN</span>
                <span className="social-arrow">⟶</span>
                <img src={inIcon} alt="LinkedIn" className="social-png-icon" />
              </a>

              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-card">
                <span className="social-text">FACEBOOK</span>
                <span className="social-arrow">⟶</span>
                <img src={fbIcon} alt="Facebook" className="social-png-icon" />
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;