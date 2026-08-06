import React from "react";
import "./css/FeaturedWorks.css"; 

import projectImg1 from "../../assets/ridgeway.png"; 
import projectImg2 from "../../assets/seaside.png"; 
import studioIcon from "../../assets/studio-icon.png"; // Studio Icon

const FeaturedWorks = () => {
  return (
    <section className="fw-section">
      <div className="fw-container">
        
        {/* Top Header Row - Left Side with Studio Icon */}
        <div className="fw-header-row">
          <div className="fw-header-left">
            <img src={studioIcon} alt="icon" className="fw-studio-icon" />
            OUR PROJECTS <span className="fw-slash-marks">///</span>
          </div>
          
          <div className="fw-header-center">
            <h2>Featured Workss</h2>
          </div>
          
          <div className="fw-header-right">
            <p>Creative solutions tailored for every style and<br />every space.</p>
          </div>
        </div>

        {/* Project Cards Container */}
        <div className="fw-cards-wrapper">
          
          {/* Card 1 */}
          <div className="fw-card">
            <img src={projectImg1} alt="Ridgeway Cultural Pavilion" className="fw-img" />
            
            <div className="fw-overlay-banner">
              <div className="fw-overlay-text">
                <h3 className="fw-project-title">Ridgeway Cultural Pavilion</h3>
                <div className="fw-project-tags">
                  <span className="fw-tag-box">Commercial</span>
                  <span className="fw-tag-box">Coimbatore,TN</span>
                </div>
              </div>
              
              <div className="fw-overlay-btn-wrapper">
                <button className="fw-journey-btn">
                  Start Your Journey
                  <span className="fw-btn-capsule">
                    <span className="fw-btn-dot"></span>
                    <span className="fw-btn-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="fw-card">
            <img src={projectImg2} alt="Seaside Cliff Residence" className="fw-img" />
            
            <div className="fw-overlay-banner">
              <div className="fw-overlay-text">
                <h3 className="fw-project-title">Seaside Cliff Residence</h3>
                <div className="fw-project-tags">
                  <span className="fw-tag-box">Residential</span>
                  <span className="fw-tag-box">Coimbatore,TN</span>
                </div>
              </div>
              
              <div className="fw-overlay-btn-wrapper">
                <button className="fw-journey-btn">
                  Start Your Journey
                  <span className="fw-btn-capsule">
                    <span className="fw-btn-dot"></span>
                    <span className="fw-btn-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;