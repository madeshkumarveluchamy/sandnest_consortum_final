import React from 'react';
import './css/OurStoryPage.css'; // Updated CSS file name
import storyImage from '../../assets/storyimage.png'; // Import the image for better bundling

const OurStoryPage = () => {
  return (
    <div className="story-hero-wrapper font-sans d">
      <div className="story-hero-layout">
        
        {/* Main Hero Image Section */}
        <main className="position-relative overflow-hidden shadow-lg story-hero-image-box w-100">
          
          {/* Background Image */}
          <img 
            src={storyImage} 
            alt="Architectural Practice" 
            className="w-100 h-100 position-absolute top-0 start-0 dark-section"
            style={{ objectFit: 'cover', zIndex: 0 }}
          />
          
          {/* Dark Overlay for better text readability */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{ opacity: '0.25', zIndex: 1, pointerEvents: 'none' }}></div>

          {/* Centered Text */}
          <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center p-3 p-md-5 text-center" style={{ zIndex: 2 }}>
            <h1 className="text-white story-hero-main-text mb-0">
              About Our <br className="d-block" /> Architectural Practice
            </h1>
          </div>
          
        </main>

      </div>
    </div>
  );
};

export default OurStoryPage;