import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

import arrowIcon from '../../assets/arrows3.png';

// Logo and Menu Images 
import logoBlack from '../../assets/logo2.png'; 
import logoWhite from '../../assets/logo.png'; 
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
  
  // Theme state: Background dark-a irukka nu track panna
  const [isDarkSection, setIsDarkSection] = useState(false); 

  // Scroll state: Page scroll aagi irukka illaya nu track panna
  const [isScrolled, setIsScrolled] = useState(false);

  // Dynamic Greeting based on time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('GOOD MORNING');
    else if (hour < 18) setGreeting('GOOD AFTERNOON');
    else setGreeting('GOOD EVENING');
  }, []);

  // Scroll aagum pothu section color and scroll position-a check panra logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const darkSections = document.querySelectorAll('.dark-section');
      let overDarkSection = false;

      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          overDarkSection = true;
        }
      });
      setIsDarkSection(overDarkSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Button state for 3D Cube Animation
  let btnState = 'experience';
  if (isMenuOpen) {
    btnState = 'close';
  } else if (isScrolled) {
    btnState = 'logo';
  }

  return (
    <>
      {/* ===== Main Header Navbar ===== */}
      <nav className={`navbar ${isMenuOpen ? 'nav-open' : ''}`}>
        
        {/* Left Logo - Hides on scroll with 3D Fold Up Effect */}
        <div 
          className="navbar-logo"
          style={{ 
            opacity: (isMenuOpen || isScrolled) ? 0 : 1, 
            transform: (isMenuOpen || isScrolled) ? 'translateY(-35px) rotateX(90deg)' : 'translateY(0) rotateX(0deg)',
            transformOrigin: 'top center',
            pointerEvents: (isMenuOpen || isScrolled) ? 'none' : 'auto',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <Link to="/" onClick={closeMenu}>
            <img 
              src={isDarkSection ? logoWhite : logoBlack} 
              alt="Sandnest Consortium" 
            />
          </Link>
        </div>

        {/* Center Greeting Text - Hides on scroll with 3D Fold Up Effect */}
        <div 
          className={`navbar-greeting fw-bolder ${isDarkSection ? 'text-white' : 'text-black'}`} 
          style={{ 
            opacity: (isMenuOpen || isScrolled) ? 0 : 1, 
            transform: (isMenuOpen || isScrolled) ? 'translate(-50%, -35px) rotateX(90deg)' : 'translate(-50%, 0) rotateX(0deg)',
            transformOrigin: 'top center',
            pointerEvents: (isMenuOpen || isScrolled) ? 'none' : 'auto',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
          }}
        >
          {greeting} : BEGIN YOUR JOURNEY
        </div>

        {/* Dynamic Menu Button */}
        <button className={`navbar-menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          
          {/* 3D Cube Animated Text Wrapper */}
          <span className="menu-text">
            <span className={`menu-text-item ${btnState === 'experience' ? 'active' : 'hidden-up'}`}>
              EXPERIENCE
            </span>
            
            <span className={`menu-text-item ${btnState === 'logo' ? 'active' : (btnState === 'close' ? 'hidden-up' : 'hidden-down')}`}>
              <img src={logoBlack} alt="Logo" className="scroll-btn-logo" />
            </span>
            
            <span className={`menu-text-item ${btnState === 'close' ? 'active' : 'hidden-down'}`}>
              CLOSE
            </span>
          </span>
          
          <span className="menu-icon-circle">
            <div className="hamburger-line line-1"></div>
            <div className="hamburger-line line-2"></div>
            <div className="hamburger-line line-3"></div>
          </span>
        </button>
      </nav>

      {/* ===== Full Screen Overlay Menu (Always in DOM for animation) ===== */}
      <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={closeMenu}>
        
        {/* Main Content Card */}
        <div className="overlay-content-card" onClick={(e) => e.stopPropagation()}>
          
          {/* Header: Logo and Contact Icons */}
          <div className="overlay-header">
            <div className="overlay-brand-logo">
              <img src={logoBlack} alt="Sandnest Consortium Menu Logo" />
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
              <div className="overlay-nav-head">
                <span className="badge-title">STRUCTURE</span>
              </div>
              <ul className="overlay-links">
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/story" onClick={closeMenu}>Our Studio</Link></li>
                <li><Link to="/services" onClick={closeMenu}>Our Services</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
              </ul>
            </div>

            <div className="overlay-nav-col">
              <div className="overlay-nav-head">
                <span className="badge-title">OUR EXPERTISE</span>
              </div>
              <ul className="overlay-links">
                <li><Link to="/structural-design" onClick={closeMenu}>Structural Design</Link></li>
                <li><Link to="/architectural-design" onClick={closeMenu}>Architectural Design</Link></li>
                <li><Link to="/interior-design" onClick={closeMenu}>Interior Design</Link></li>
                <li><Link to="/landscape-design" onClick={closeMenu}>Landscape Design</Link></li>
                <li><Link to="/sustainable-green-buildings" onClick={closeMenu}>Sustainable Green Buildings</Link></li>
              </ul>
            </div>

            <div className="overlay-nav-col">
              <div className="overlay-nav-head">
                <span className="badge-title">INSIGHTS</span>
              </div>
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
              <span className="social-arrow">
                <img src={arrowIcon} alt="Arrow" className="social-arrow-img" />
              </span>
              <img src={igIcon} alt="Instagram" className="social-png-icon" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-card">
              <span className="social-text">LINKEDIN</span>
              <span className="social-arrow">
                <img src={arrowIcon} alt="Arrow" className="social-arrow-img" />
              </span>
              <img src={inIcon} alt="LinkedIn" className="social-png-icon" />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-card">
              <span className="social-text">FACEBOOK</span>
              <span className="social-arrow">
                <img src={arrowIcon} alt="Arrow" className="social-arrow-img" />
              </span>
              <img src={fbIcon} alt="Facebook" className="social-png-icon" />
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;