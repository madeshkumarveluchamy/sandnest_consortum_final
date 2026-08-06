import React from 'react';
import './css/Studio.css';

// --- ASSETS IMPORTS ---
import studioIcon from '../../assets/studio-icon.png';
import heroHouseImg from '../../assets/hero-house.png';
import heroInteriorImg from '../../assets/hero-interior.png';
import statsBgImg from '../../assets/stats-bg.png';
import leafLeft from '../../assets/leaf-left.png';
import leafRight from '../../assets/leaf-right.png';
import playIcon from '../../assets/play-icon.png';
import archLeftBg from '../../assets/arch-left-bg.png'; 
import archLeftMain from '../../assets/arch-left-main.png';
import archRightBg from '../../assets/arch-right-bg.png';
import archRightMain from '../../assets/arch-right-main.png';

const Studio = () => {
  return (
    <div className="studio-main-wrapper">
      
      {/* ==========================================
          SECTION 1: OUR STUDIO HERO
          ========================================== */}
      <section className="studio-hero-section">
        <div className="studio-hero-container">
          
          <div className="studio-hero-left-content">
            <div className="studio-badge-row">
              <img src={studioIcon} alt="Studio Icon" className="studio-badge-icon" />
              <span className="studio-badge-title">OUR STUDIO</span>
              <span className="studio-badge-slashes">///</span>
            </div>
            
            <h1 className="studio-main-heading">
              We build legacy spaces that bridge the gap between classic elegance and modern innovation
            </h1>
            
            <p className="studio-main-desc">
              A multidisciplinary practice focused on thoughtful design, sustainable materials, and high-quality execution. From residential builds to large commercial projects, we shape environments with clarity, and purpose.
            </p>
            
            <button className="studio-journey-btn">
              Start Your Journey 
              <span className="studio-toggle-pill">
                <span className="toggle-dot-studio"></span>
                <div className="studio-toggle-dot">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </span>
            </button>
          </div>

         <div className="studio-hero-images-wrapper">
  <img src={heroHouseImg} alt="Modern House" className="studio-img-house-unique" />
  <img src={heroInteriorImg} alt="Interior Sofa" className="studio-img-interior-unique" />
</div>

        </div>
      </section>

      {/* ==========================================
          SECTION 2: STATS BANNER
          ========================================== */}
      <section className="studio-stats-area">
        <div className="studio-stats-bg" style={{ backgroundImage: `url(${statsBgImg})` }}>
          
          <div className="studio-stats-box">
            <div className="studio-stat-card">
              <h3>08+</h3>
              <p>YEARS OF EXCELLENCE</p>
            </div>
            <div className="studio-stat-card">
              <h3>125+</h3>
              <p>COMPLETED PROJECTS</p>
            </div>
            <div className="studio-stat-card">
              <h3>1.5M+</h3>
              <p>SQ. FT. DESIGNED</p>
            </div>
            <div className="studio-stat-card">
              <h3>07+</h3>
              <p>DESIGN AWARDS</p>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3: EXCELLENCE IN ARCHITECTURE
          ========================================== */}
      <section className="studio-arch-section">
        <div className="studio-arch-container">
          
          <div className="studio-arch-top-grid">
            
            <div className="studio-arch-images-group studio-arch-left-group">
              <img src={archLeftBg} alt="Design bg" className="studio-arch-tilted-img studio-arch-tilted-left" />
              <img src={archLeftMain} alt="Design main" className="studio-arch-straight-img studio-arch-straight-left" />
            </div>

            <div className="studio-arch-center-box">
              <div className="studio-arch-subtitle-row">
                <img src={leafLeft} alt="leaf" className="studio-leaf-ico" />
                <span>EXCELLENCE IN ARCHITECTURE</span>
                <img src={leafRight} alt="leaf" className="studio-leaf-ico" />
              </div>
              
              <h2 className="studio-arch-heading">
                Architectural excellence crafted through visionary design, structural precision, and unwavering attention to detail.
              </h2>
              
              <div className="studio-arch-btn-group">
                <button className="studio-contact-pill-btn">
                  Contact us
                  <span className="studio-contact-circle-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#9c6c44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                <button className="studio-video-link-btn">
                  <img src={playIcon} alt="Play" className="studio-play-ico" />
                  Watch Video
                </button>
              </div>
            </div>

            <div className="studio-arch-images-group studio-arch-right-group">
              <img src={archRightBg} alt="Interior bg" className="studio-arch-tilted-img studio-arch-tilted-right" />
              <img src={archRightMain} alt="Interior main" className="studio-arch-straight-img studio-arch-straight-right" />
            </div>

          </div>

          <div className="studio-features-grid">
            <div className="studio-feature-item">
              <div className="studio-feature-bar"></div>
              <div className="studio-feature-content">
                <h4>LONG-TERM VISION</h4>
                <p>Our architects transform complex concepts into spaces that stand the test of time.</p>
              </div>
            </div>

            <div className="studio-feature-item">
              <div className="studio-feature-bar"></div>
              <div className="studio-feature-content">
                <h4>STRUCTURAL DETAIL</h4>
                <p>Every element is engineered for perfection, harmonizing form, material, and spatial flow.</p>
              </div>
            </div>

            <div className="studio-feature-item">
              <div className="studio-feature-bar"></div>
              <div className="studio-feature-content">
                <h4>IMPACT WE CREATE</h4>
                <p>We build environments that are not only aesthetically striking but also functionally transformative.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Studio;