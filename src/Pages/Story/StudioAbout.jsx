import React from 'react';
import './css/StudioAbout.css';
import studioImage from '../../assets/aboutourstudioimage.png';

const StudioAbout = () => {
  return (
    <section className="studio-about-wrapper font-sans dark-section">
      <div className="container-fluid studio-about-container container-xl">
        {/* 'align-items-stretch' makes both columns the exact same height */}
        <div className="row column-container align-items-stretch">
          
          {/* Left Side: Image Column */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 studio-about-image-col">
            <img 
              src={studioImage} 
              alt="Architect working in studio" 
              className="studio-about-img shadow-sm" 
            />
          </div>

          {/* Right Side: Content Column */}
          <div className="col-12 col-md-6 studio-about-content-col">
            
            {/* Banner Block */}
            <div className="studio-about-header-block mb-4">
              <div className="studio-about-number plus-font stit">01</div>
              <div className="studio-about-title plus-font tit">About Our Studio</div>
            </div>

            {/* Main Paragraph */}
            <p className="studio-about-main-text plus-font des">
              Sandnest Consortium is a progressive architecture and design
              practice established in 2019 by Chief Architect Ar. Jaikrishna in
              Coimbatore. Specializing in sustainable green buildings, vernacular
              architecture, interior execution, and landscape design, our team
              bridges nature-inspired concepts with structural precision. Driven by
              research and context responsive design, we transform ambitious
              client visions into timeless, eco friendly built environments across
              India. By treating every project as a signature endeavor, we ensure
              that every space is thoughtfully sculpted to deliver enduring value
              and aesthetic distinction.
            </p>

            <div className="studio-about-divider"></div>

            {/* Mission Section */}
            <div className="studio-about-sub-section">
              <div className="studio-about-badge plus-font stit">
                <span className="studio-about-dot"></span> MISSION
              </div>
              <p className="studio-about-sub-text mb-0 plus-font des">
                To design and execute innovative, context responsive, and
                sustainable spaces that elevate everyday living while respecting
                nature, culture, and client dreams.
              </p>
            </div>

            <div className="studio-about-divider"></div>

            {/* Vision Section */}
            <div className="studio-about-sub-section">
              <div className="studio-about-badge plus-font stit">
                <span className="studio-about-dot"></span> VISION
              </div>
              {/* mb-0 ensures the bottom aligns perfectly without extra space */}
              <p className="studio-about-sub-text mb-0 plus-font des">
                To establish a global legacy in green and vernacular architecture
                championing research driven design and sculpting over 1,000
                sustainable farmhouses and landmarks across the globe.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioAbout;