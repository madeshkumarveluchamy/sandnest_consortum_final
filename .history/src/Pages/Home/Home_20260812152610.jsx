import React, { useState, useEffect } from 'react';
import './css/Home.css';

// ✅ 4 Background Images — Add your images in assets folder with these names
import heroBg1 from '../../assets/luxury_villa_1.png';
import heroBg2 from '../../assets/luxury_villa_2.png';
import heroBg3 from '../../assets/luxury_villa_3.png';
import heroBg4 from '../../assets/luxury_villa_4.png';

const bgImages = [heroBg1, heroBg2, heroBg3, heroBg4];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start transition
      setTransitioning(true);

      // After fade-out completes, update current
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bgImages.length);
        setNextIndex((prev) => (prev + 1) % bgImages.length);
        setTransitioning(false);
      }, 1200); // matches CSS transition duration

    }, 5000); // slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-hero-section dark-section">

      {/* ── Slide Layers ── */}
      {bgImages.map((img, i) => (
        <React.Fragment key={i}>
          {/* Full Color Layer */}
          <div
            className={`hero-bg hero-bg-color hero-slide ${i === currentIndex ? 'slide-active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
          {/* Grayscale Left-Half Layer */}
          <div
            className={`hero-bg hero-bg-grayscale hero-slide ${i === currentIndex ? 'slide-active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        </React.Fragment>
      ))}

      {/* Slide Indicator Dots */}
      <div className="hero-dots">
        {bgImages.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => {
              if (!transitioning) {
                setCurrentIndex(i);
                setNextIndex((i + 1) % bgImages.length);
              }
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Progress Bar */}
      <div className="hero-progress-bar">
        <div
          key={currentIndex}
          className="hero-progress-fill"
        />
      </div>

      {/* Hero Content */}
      <div className="hero-content-container">
        <div className="hero-text-wrapper">
          <h1 className="hero-title tit">
            Forming Spaces,<br />
            Defining Lifestyles
          </h1>
        </div>
      </div>

    </section>
  );
};

export default Home;