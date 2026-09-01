import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css'; 

import fbIcon from "../../assets/facebook.png";
import inIcon from "../../assets/linkedin.png"; 
import igIcon from "../../assets/instagram.png";

// Background Images
import bgLeft from "../../assets/footer-bg.png"; 
import bgRight from "../../assets/footer-bg1.png";

const Footer = () => {
  // ==========================================
  // Newsletter form state
  // ==========================================
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Link click panna top-ku scroll aaga
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' 
    });
  };

  // Google Sheets-ku email anuppum function
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzLP1NKV2h-55Nd6AN7te8zV_mjjSNJYNi_mG6iwlWl5s42bHRZVsc89RcYksAC5EC4/exec';

    const data = new FormData();
    data.append('email', email);
    data.append('formType', 'Newsletter Subscription'); 

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: data,
        mode: 'no-cors' 
      });

      setSubmitMessage('Subscribed successfully!');
      setEmail(''); 
      
    } catch (error) {
      console.error('Error submitting newsletter:', error);
      setSubmitMessage('Oops! Error occurred.');
    } finally {
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    }
  };
  // ==========================================

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
            <Link to="/" onClick={handleScrollToTop}>Home</Link>
            <Link to="/our-studio" onClick={handleScrollToTop}>Our Studio</Link>
            <Link to="/services" onClick={handleScrollToTop}>Our Services</Link>
            <Link to="/contact" onClick={handleScrollToTop}>Contact</Link>
            <Link to="/blog" onClick={handleScrollToTop}>Blog</Link>
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
              <h4 className="underlined-title">Studio Notes :</h4>
              
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder="Enter Your Mail ID......." 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
              
              {submitMessage && (
                <p style={{ color: submitMessage.includes('Error') ? 'red' : 'green', marginTop: '10px', fontSize: '14px', fontWeight: 'bold' }}>
                  {submitMessage}
                </p>
              )}
            </div>
          </div>

          {/* Right Column - Studio Updates (Social Icons) */}
          <div className="footer-right-section">
            <h4 className="underlined-titles">Studio Updates :</h4>
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
      </div> 

      {/* Bottom Giant Text */}
      <div className="footer-bottom-brand">
        <h1>SANDNEST CONSORTIUM</h1>
      </div>
      
    </footer>
  );
};

export default Footer;