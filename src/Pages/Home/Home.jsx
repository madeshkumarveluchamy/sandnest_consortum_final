import React from 'react';
import './css/Home.css';

// Single luxury villa background image asset
import heroBgImage from '../../assets/luxury_villa_color.png';

const Home = () => {
  return (
    <div className="home-container dark-section" style={{ backgroundImage: `url(${heroBg})` }}>
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
    </section>
  );
};

export default Home;