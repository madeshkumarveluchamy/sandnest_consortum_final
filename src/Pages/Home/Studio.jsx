import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
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

// --- ANIMATED SLOT COUNTER COMPONENT ---
const SlotCounter = ({ value, baseDirection = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); 
  const chars = Array.from(String(value));

  let digitIndex = 0;

  return (
    <span ref={ref} className="slot-wrapper-inline">
      {chars.map((char, i) => {
        if (isNaN(parseInt(char))) {
          return (
            <span key={i} className="slot-static-char">
              {char}
            </span>
          );
        }

        const isOdd = digitIndex % 2 !== 0;
        const finalDirection = isOdd
          ? baseDirection === "up"
            ? "down"
            : "up"
          : baseDirection;

        digitIndex++;

        return (
          <span key={i} className="digit-column">
            <motion.div
              initial={{ y: finalDirection === "up" ? "0%" : "-90.9%" }}
              animate={
                isInView ? { y: finalDirection === "up" ? "-90.9%" : "0%" } : {}
              }
              transition={{
                duration: 2.5,
                ease: [0.45, 0.05, 0.55, 0.95],
                delay: i * 0.1, 
              }}
              className="digit-strip"
            >
              {finalDirection === "up" ? (
                <>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <span key={num} className="plus-font">
                      {num}
                    </span>
                  ))}
                  <span className="plus-font">{char}</span>
                </>
              ) : (
                <>
                  <span className="plus-font">{char}</span>
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
                    <span key={num} className="plus-font">
                      {num}
                    </span>
                  ))}
                </>
              )}
            </motion.div>
          </span>
        );
      })}
    </span>
  );
};

const Studio = () => {
  // State for handling video modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="studio-main-wrapper">
      
      {/* ==========================================
          VIDEO MODAL OVERLAY
          ========================================== */}
      {isVideoModalOpen && (
        <div className="studio-video-modal-overlay" onClick={() => setIsVideoModalOpen(false)}>
          <div className="studio-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="studio-video-close-btn" onClick={() => setIsVideoModalOpen(false)}>
              &times;
            </button>
            <div className="studio-video-iframe-container">
              <iframe 
                src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1" 
                title="Studio Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          SECTION 1: OUR STUDIO HERO
          ========================================== */}
      <section className="studio-hero-section">
        <div className="studio-hero-container">
          
          <div className="studio-hero-left-content animate-fade-in-up">
            <div className="studio-badge-row">
              <img src={studioIcon} alt="Studio Icon" className="studio-badge-icon" />
              {/* stit class added */}
              <span className="studio-badge-title stit">OUR STUDIO</span>
              <span className="studio-badge-slashes">///</span>
            </div>
            
            {/* tit class added */}
            <h1 className="studio-main-heading tit">
              We build legacy spaces that bridge the gap between classic elegance and modern innovation
            </h1>
            
            {/* des class added */}
            <p className="studio-main-desc des">
              A multidisciplinary practice focused on thoughtful design, sustainable materials, and high-quality execution. From residential builds to large commercial projects, we shape environments with clarity, and purpose.
            </p>
            
            <button className="studio-btn">
              <span className="studio-btn-text">Start Your Journey</span>
              <div className="studio-btn-toggle-capsule">
                <span className="studio-toggle-dot"></span>
                <div className="studio-toggle-arrow-circle">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </button>
          </div>

          <div className="studio-hero-images-wrapper">
            <img src={heroHouseImg} alt="Modern House" className="studio-img-house-unique animate-float" />
            <img src={heroInteriorImg} alt="Interior Sofa" className="studio-img-interior-unique animate-float-delayed" />
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 2: STATS BANNER
          ========================================== */}
      <section className="studio-stats-area">
        <div className="studio-stats-bg" style={{ backgroundImage: `url(${statsBgImg})` }}>
          
          <div className="studio-stats-box animate-scale-up">
            <div className="studio-stat-card">
              <h3 className="tit">
                <SlotCounter value="08" />
                <span className="stat-suffix">+</span>
              </h3>
              {/* sdes class added */}
              <p className="sdes">YEARS OF EXCELLENCE</p>
            </div>
            <div className="studio-stat-card">
              <h3 className="tit">
                <SlotCounter value="125" />
                <span className="stat-suffix">+</span>
              </h3>
              {/* sdes class added */}
              <p className="sdes">COMPLETED PROJECTS</p>
            </div>
            <div className="studio-stat-card">
              <h3 className="tit">
                <SlotCounter value="1.5" />
                <span className="stat-suffix">M+</span>
              </h3>
              {/* sdes class added */}
              <p className="sdes">SQ. FT. DESIGNED</p>
            </div>
            <div className="studio-stat-card">
              <h3 className="tit">
                <SlotCounter value="07" />
                <span className="stat-suffix">+</span>
              </h3>
              {/* sdes class added */}
              <p className="sdes">DESIGN AWARDS</p>
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

            <div className="studio-arch-center-box animate-fade-in-up">
              <div className="studio-arch-subtitle-row">
                <img src={leafLeft} alt="leaf" className="studio-leaf-ico" />
                {/* stit class added */}
                <span className="stit">EXCELLENCE IN ARCHITECTURE</span>
                <img src={leafRight} alt="leaf" className="studio-leaf-ico" />
              </div>
              
              {/* tit class added */}
              <h2 className="studio-arch-heading tit">
                Architectural excellence crafted through visionary design, structural precision, and unwavering attention to detail.
              </h2>
              
              <div className="studio-arch-btn-group">
                <button className="studio-contact-pill-btn">
                  <span className="studio-contact-text">Contact us</span>
                  <span className="studio-contact-circle-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#9c6c44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                {/* VIDEO BUTTON TRIGGER */}
                <button 
                  className="studio-video-link-btn" 
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <span className="studio-play-icon-wrapper">
                    <img src={playIcon} alt="Play" className="studio-play-ico" />
                  </span>
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
                {/* stit class added */}
                <h4 className="stit">LONG-TERM VISION</h4>
                {/* des class added */}
                <p className="des">Our architects transform complex concepts into spaces that stand the test of time.</p>
              </div>
            </div>

            <div className="studio-feature-item">
              <div className="studio-feature-bar"></div>
              <div className="studio-feature-content">
                {/* stit class added */}
                <h4 className="stit">STRUCTURAL DETAIL</h4>
                {/* des class added */}
                <p className="des">Every element is engineered for perfection, harmonizing form, material, and spatial flow.</p>
              </div>
            </div>

            <div className="studio-feature-item">
              <div className="studio-feature-bar"></div>
              <div className="studio-feature-content">
                {/* stit class added */}
                <h4 className="stit">IMPACT WE CREATE</h4>
                {/* des class added */}
                <p className="des">We build environments that are not only aesthetically striking but also functionally transformative.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Studio;