import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // உங்களுடைய ரூட்டிங் முறைக்கு ஏற்ப மாற்றிக் கொள்ளலாம்
import './css/Home.css';
import insetImage from '../../assets/small-house.png'; 
import heroBg from '../../assets/bg-image.png'; 

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleCtaClick = (e) => {
    e.preventDefault();
    if (isAnimating) return; // டபுள் க்ளிக் தவிர்க்க
    
    setIsAnimating(true);

    // அனிமேஷன் நேரம் (550ms) முடிந்ததும் ரூட்/நேவிகேஷன் மாறும்
    setTimeout(() => {
      // navigate('/your-target-page'); // தேவையিন متண்யை மாற்றி கொள்ளலாம்
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className="home-container" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <h1 className="hero-title">
          Forming Spaces,<br />
          Defining Lifestyles
        </h1>

        <div className="hero-bottom-section">
          {/* Glassmorphism Card */}
          <div className="glass-card">
            <img src={insetImage} alt="Modern House Design" className="inset-image" />
          </div>

          {/* Text and Button Section */}
          <div className="hero-text-cta">
            <p className="hero-description">
              From first launches to lasting collaborations we're trusted to<br />
              deliver on time and at quality
            </p>
            <button 
              className={`journey-btn ${isAnimating ? 'is-animating' : ''}`}
              onClick={handleCtaClick}
            >
              <span className="btn-text">Start Your Journey</span>
              <div className="btn-toggle-capsule">
                <span className="toggle-dot"></span>
                <div className="toggle-arrow-circle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* --- Right Side Decorative Vertical Line --- */}
      <div className="right-vertical-line">
        <div className="top-marker"></div>
        <div className="vertical-bar"></div>
        <div className="bottom-marker"></div>
      </div>
      
    </div>
  );
};

export default Home;