import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Navbar.css';

import arrowIcon from '../../assets/arrows3.png';

// Logo and Menu Images 
import logoBlack from '../../assets/logo2.png'; 
import logoWhite from '../../assets/logo.png'; 
import menuBuildingImg from '../../assets/nav-img.png'; 

// Time-based Greeting Icons
import afternoonIcon from '../../assets/clock.png';
import morningIcon from '../../assets/sunny.png';
import eveningIcon from '../../assets/half-moon.png';

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
  
  // State for both greeting text and its matching icon
  const [greeting, setGreeting] = useState('GOOD MORNING');
  const [currentIcon, setCurrentIcon] = useState(morningIcon);
  
  // Theme state
  const [isScrolled, setIsScrolled] = useState(false);

  // Current route
  const location = useLocation(); 
  
  // Check if current page is Home
  const isHome = location.pathname === '/';

  // Dynamic Greeting based on time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('GOOD MORNING');
      setCurrentIcon(morningIcon);
    } else if (hour < 18) {
      setGreeting('GOOD AFTERNOON');
      setCurrentIcon(afternoonIcon);
    } else {
      setGreeting('GOOD EVENING');
      setCurrentIcon(eveningIcon);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    let timeoutId;

    if (isMenuOpen) {
      document.body.style.paddingRight = `${scrollbarWidth}px`; 
      document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`); 
      document.body.classList.add('menu-open'); 
    } else {
      timeoutId = setTimeout(() => {
        document.body.style.paddingRight = '0px'; 
        document.documentElement.style.setProperty('--scrollbar-width', '0px'); 
        document.body.classList.remove('menu-open'); 
      }, 500); 
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isMenuOpen]);

  // FIX: Handle automatic scrolling when navigating via Hash Link (like /#voices-of-clients)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Adding a slight delay to allow the menu closing animation to finish
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400); 
      }
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Default close action (scrolls to top)
  const closeMenu = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' 
    });
  };

  // Custom close action for Hash links (prevents scrolling to top)
  const closeMenuNoScroll = () => {
    setIsMenuOpen(false);
  };

  let btnState = 'experience';
  if (isMenuOpen) {
    btnState = 'close';
  } else if (isScrolled) {
    btnState = 'logo';
  }

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'nav-open' : ''}`}>
        
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
              src={isHome ? logoWhite : logoBlack} 
              alt="Sandnest Consortium" 
            />
          </Link>
        </div>

        <div 
          className={`navbar-greeting fw-bolder ${isHome ? 'text-white' : 'text-black'}`} 
          style={{ 
            opacity: (isMenuOpen || isScrolled) ? 0 : 1, 
            transform: (isMenuOpen || isScrolled) ? 'translate(-50%, -35px) rotateX(90deg)' : 'translate(-50%, 0) rotateX(0deg)',
            transformOrigin: 'top center',
            pointerEvents: (isMenuOpen || isScrolled) ? 'none' : 'auto',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
          }}
        >
          <img 
            src={currentIcon} 
            alt="Greeting Icon" 
            className="greeting-icon" 
            style={{ filter: isHome ? 'none' : 'brightness(0)' }} 
          />
          <span>{greeting} : BEGIN YOUR JOURNEY</span>
        </div>

        <button className={`navbar-menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          
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

      <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={closeMenu}>
        
        <div className="overlay-content-card" onClick={(e) => e.stopPropagation()}>
          
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

          <div className="overlay-grid">
            
            <div className="overlay-image-col">
              <img src={menuBuildingImg} alt="Architecture Project" className="menu-featured-img" />
            </div>

            <div className="overlay-nav-col">
              <div className="overlay-nav-head">
                <span className="badge-title">STRUCTURE</span>
              </div>
              <ul className="overlay-links">
                <li><Link to="/" className='font-alice' onClick={closeMenu}>Home</Link></li>
                <li><Link to="/our-studio" onClick={closeMenu}>Our Studio</Link></li>
                <li><Link to="/services" onClick={closeMenu}>Our Services</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
              </ul>
            </div>

            <div className="overlay-nav-col">
              <div className="overlay-nav-head1">
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
                {/* FIX: Changed path to /#voices-of-clients and updated onClick handler */}
                <li><Link to="/#voices-of-clients" onClick={closeMenuNoScroll}>Testimonials</Link></li>
                <li><Link to="/" onClick={closeMenu}>Privacy Policy</Link></li>
              </ul>
            </div>

          </div>

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