import React, { useRef, useState,useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './css/Studio.css';  
import './css/Story.css';  

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



const useInViewOnce = (threshold = 0.35) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
};

// --- ANIMATED SLOT COUNTER COMPONENT ---
const SlotCounter = ({ value, baseDirection = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
                    <span key={num}>{num}</span>
                  ))}
                  <span> {char}</span>
                </>
              ) : (
                <>
                  <span>{char}</span>
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
                    <span key={num}>{num}</span>
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

// --- 2. Updated CounterStat Component ---
const CounterStat = ({ count, suffix, title, subTitle }) => {
  return (
    <div className="stat-item stat-slot-item">
      <h3 className="slot-number-heading tit">
        <SlotCounter value={count} baseDirection="up" />
        <span className="stat-suffix ">{suffix}</span>
      </h3>
      <p className="des">
        {title}
        {subTitle ? <br /> : null}
        {subTitle}
      </p>
    </div>
  );
};

const Studio = () => {
  // State for handling video modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const [ leftImgRef, leftImgVisible] = useInViewOnce(0.4);
  const [rightImgRef, rightImgVisible] = useInViewOnce(0.4);

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
     <section className="studio-section">
        <div className="studio-container">
          <div className="studio-left-content">
            <div>
              
            <div className="studio-badge-row">
              <img src={studioIcon} alt="Studio Icon" className="studio-badge-icon" />
              {/* stit class added */}
              <span className="studio-badge-title stit plus-font">OUR STUDIO</span>
              <span className="studio-badge-slashes">///</span>
            </div>
              
              <h2 className="studio-title tit plus-font">
                We build legacy spaces that bridge the gap between classic
                elegance and modern innovation
              </h2>
            </div>

            <div className="second-div">
              <div
                ref={leftImgRef}
                className={`studio-img-card left-card story-image-card ${
                  leftImgVisible ? "is-visible" : ""
                }`}
              >
                <img
                  src={heroHouseImg}
                  alt="Classic elegance bedside table installation"
                />
              </div>

              <div className="studio-text-box">
                <p className="studio-description des plus-font">
                  A multidisciplinary practice focused on thoughtful design,
                  sustainable materials, and high-quality execution. From
                  residential builds to large commercial projects, we shape
                  environments with clarity, and purpose.
                </p>
                <div className="arch-services-action-container">
          <button className="arch-services-btn">
            {/* Button Text: .des class added here */}
            <span className="arch-services-btn-text des plus-font">Start Your Journey</span>
            
            <div className="arch-services-btn-capsule">
              <span className="arch-services-btn-dot"></span>
              <div className="arch-services-btn-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        </div>
              </div>
            </div>
          </div>

          <div className="studio-images-wrapper">
            <div
              ref={rightImgRef}
              className={`studio-img-card right-card story-image-card ${
                rightImgVisible ? "is-visible" : ""
              }`}
            >
              <img
                src={heroInteriorImg}
                alt="Modern minimalist lounge setup with custom frame"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: STATS BANNER
          ========================================== */}
      <section
        className="counter-strip-sections"
        style={{ '--bg-image': `url(${statsBgImg})` }}
      >
        <div className="counter-white-box">
          <CounterStat
            count={08}
            suffix="+"
            title="Years of"
            subTitle="Excellence"
          />
          <div className="stat-divider"></div>
          <CounterStat
            count={125}
            suffix="+"
            title="COMPLETED"
            subTitle="PROJECTS"
          />
          <div className="stat-divider"></div>
          <CounterStat
            count={1.5}
            suffix="M+"
            title="SQ.FT."
            subTitle="DESIGNED"
          />

          <div className="stat-divider"></div>
          <CounterStat
            count={07}
            suffix="+"
            title="DESIGN"
            subTitle="AWARDS"
          />
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
                <span className="stit plus-font">EXCELLENCE IN ARCHITECTURE</span>
                <img src={leafRight} alt="leaf" className="studio-leaf-ico" />
              </div>
              
              {/* tit class added */}
              <h2 className="studio-arch-heading plus-font">
                Architectural excellence crafted through visionary design, structural precision, and unwavering attention to detail.
              </h2>
              
              <div className="studio-arch-btn-group">
                <button className="studio-contact-pill-btn">
                  <span className="studio-contact-text plus-font">Contact us</span>
                  <span className="studio-contact-circle-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#9c6c44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                {/* VIDEO BUTTON TRIGGER */}
                <button 
                  className="studio-video-link-btn plus-font" 
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
                <h4 className="stit plus-font">LONG-TERM VISION</h4>
                {/* des class added */}
                <p className="des plus-font">Our architects transform complex concepts into spaces that stand the test of time.</p>
              </div>
            </div>

            <div className="studio-feature-item">
              <div className="studio-feature-bar"></div>
              <div className="studio-feature-content">
                {/* stit class added */}
                <h4 className="stit plus-font">STRUCTURAL DETAIL</h4>
                {/* des class added */}
                <p className="des plus-font">Every element is engineered for perfection, harmonizing form, material, and spatial flow.</p>
              </div>
            </div>

            <div className="studio-feature-item">
              <div className="studio-feature-bar"></div>
              <div className="studio-feature-content">
                {/* stit class added */}
                <h4 className="stit plus-font">IMPACT WE CREATE</h4>
                {/* des class added */}
                <p className="des plus-font">We build environments that are not only aesthetically striking but also functionally transformative.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Studio;