import React from 'react';
import './css/Home.css';

// Single luxury villa background image asset
import heroBgImage from '../../assets/luxury_villa_color.png';

const Home = () => {
  return (
    <section className="home-hero-section">
      {/* Base Layer: Full Color Background */}
      <div 
        className="hero-bg hero-bg-color" 
        style={{ backgroundImage: `url(${heroBgImage})` }} 
      />

      {/* Top Layer: Left 50% Grayscale (Black & White) Background */}
      <div 
        className="hero-bg hero-bg-grayscale" 
        style={{ backgroundImage: `url(${heroBgImage})` }} 
      />

      {/* Subtle Gradient Overlay for enhanced text readability */}
      <div className="hero-overlay" />

      {/* Hero Content Area */}
      <div className="hero-content-container">
        <div className="hero-text-wrapper">
          <h1 className="hero-title">
            Forming Spaces,<br />
            Defining Lifestyles
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;