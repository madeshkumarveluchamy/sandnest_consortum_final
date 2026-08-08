import { useState, useEffect, useRef } from "react";
import "./css/FeaturedWorks.css"; 

import projectImg1 from "../../assets/ridgeway.png"; 
import projectImg2 from "../../assets/seaside.png"; 
import studioIcon from "../../assets/studio-icon.png"; 

const FeaturedWorks = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const observer = useRef(null);

  // --- Scroll Reveal & Parallax Animation Logic ---
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.15, // 15% தெரிந்ததும் அனிமேஷன் தொடங்கும்
      rootMargin: "0px 0px -50px 0px"
    });

    const header = document.querySelector('.fw-header-row');
    if (header) observer.current.observe(header);

    const wrappers = document.querySelectorAll('.fw-card-wrapper');
    wrappers.forEach((wrapper) => observer.current.observe(wrapper));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleCtaClick = (e) => {
    e.preventDefault();
    if (isAnimating) return; 
    
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <section className="fw-section">
      <div className="fw-container">
        
        {/* Animated Header */}
        <div className="fw-header-row">
          <div className="fw-header-left">
            <div className="fw-header-mask">
              <div className="fw-slide-text delay-0">
                <img src={studioIcon} alt="icon" className="fw-studio-icon" />
                OUR PROJECTS <span className="fw-slash-marks">///</span>
              </div>
            </div>
          </div>
          
          <div className="fw-header-center">

            <div className="fw-header-mask">
              <h2 className="fw-slide-text delay-1">Featured Works</h2>
            </div>

            <h2>Featured Workss</h2>
          </div>
          
          <div className="fw-header-right">
            <div className="fw-header-mask">
              <p className="fw-slide-text delay-2">
                Creative solutions tailored for every style and<br />every space.
              </p>
            </div>
          </div>
        </div>

        {/* Project Cards (with Scroll Parallax & Zoom) */}
        <div className="fw-cards-container">
          
          {/* Card 1 */}
          <div className="fw-card-wrapper">
            <div className="fw-card">
              
              {/* Parallax Background Div */}
              <div 
                className="fw-img-bg" 
                style={{ backgroundImage: `url(${projectImg1})` }}
              ></div>
              
              <div className="fw-overlay-banner">
                <div className="fw-overlay-text">
                  <h3 className="fw-project-title">Ridgeway Cultural Pavilion</h3>
                  <div className="fw-project-tags">
                    <span className="fw-tag-box">Commercial</span>
                    <span className="fw-tag-box">Coimbatore,TN</span>
                  </div>
                </div>
                
                <div className="fw-overlay-btn-wrapper">
                  <button 
                    className={`fw-journey-btn ${isAnimating ? 'is-animating' : ''}`}
                    onClick={handleCtaClick}
                  >
                    Start Your Journey
                    <div className="fw-btn-capsule">
                      <span className="fw-btn-dot"></span>
                      <div className="fw-btn-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="fw-card-wrapper">
            <div className="fw-card">
              
              {/* Parallax Background Div */}
              <div 
                className="fw-img-bg" 
                style={{ backgroundImage: `url(${projectImg2})` }}
              ></div>
              
              <div className="fw-overlay-banner">
                <div className="fw-overlay-text">
                  <h3 className="fw-project-title">Seaside Cliff Residence</h3>
                  <div className="fw-project-tags">
                    <span className="fw-tag-box">Residential</span>
                    <span className="fw-tag-box">Coimbatore,TN</span>
                  </div>
                </div>
                
                <div className="fw-overlay-btn-wrapper">
                  <button 
                    className={`fw-journey-btn ${isAnimating ? 'is-animating' : ''}`}
                    onClick={handleCtaClick}
                  >
                    Start Your Journey
                    <div className="fw-btn-capsule">
                      <span className="fw-btn-dot"></span>
                      <div className="fw-btn-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;