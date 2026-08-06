import React, { useState } from 'react';
import './css/ExperienceSection.css';

// Unga image imports
import kvnImg from '../../assets/kvn-residence.png';
import suriyaImg from '../../assets/suriya-villa.png';
import vallgetsImg from '../../assets/vallgets-residence.png';
import greenAppleImg from '../../assets/green-apple-residence.png';
import studioIcon from '../../assets/studio-icon.png';

const projects = [
  {
    id: 1,
    title: 'KVN Residence',
    location: 'Bangalore',
    img: kvnImg,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    title: 'Suriya Villa',
    location: 'Coimbatore',
    img: suriyaImg,
    video: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    title: 'Vallgets Residence',
    location: 'Coimbatore',
    img: vallgetsImg,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 4,
    title: 'Green Apple Residence',
    location: 'Coimbatore',
    img: greenAppleImg,
    video: 'https://www.w3schools.com/html/movie.mp4',
  },
];

const ExperienceSection = () => {
  const [edrSelectedVideo, setEdrSelectedVideo] = useState(null);

  return (
    <section className="edr-section">
      <header className="edr-header">
        
        {/* Left Column */}
        <div className="edr-header-left">
          <div className="edr-badge">
            <img src={studioIcon} alt="Studio Icon" className="edr-left-icon" />
            <span className="edr-badge-text">CONCEPT → REALITY</span>
            <span className="edr-badge-slashes">///</span>
          </div>
        </div>

        {/* Center Column - 2 lines Title */}
        <div className="edr-header-center">
          <h2 className="edr-title">
            Design Lived,<br />
            Spaces Perfected
          </h2>
        </div>

        {/* Right Column */}
        <div className="edr-header-right">
          <div className="edr-right-wrapper">
            <p className="edr-subtitle">
              A visual library of interiors brought to life from blueprint to beauty.
            </p>
          </div>
        </div>

      </header>

      {/* Grid containing tall cards */}
      <div className="edr-projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="edr-project-card" style={{ backgroundImage: `url(${p.img})` }}>
            
            <div className="edr-video-overlay">
              <button
                className="edr-play-button"
                aria-label={`Play ${p.title} video`}
                onClick={() => setEdrSelectedVideo(p)}
              >
                {/* SVG Play icon matches the design perfectly */}
                <svg className="edr-play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            <div className="edr-card-footer">
              <img src={p.img} alt={p.title} className="edr-footer-thumb" />
              <div className="edr-footer-text">
                <h4>{p.title}</h4>
                <p>{p.location}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {edrSelectedVideo && (
        <div className="edr-video-modal" onClick={() => setEdrSelectedVideo(null)}>
          <div className="edr-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="edr-video-close"
              onClick={() => setEdrSelectedVideo(null)}
              aria-label="Close video"
            >
              ×
            </button>

            <video
              className="edr-modal-video"
              src={edrSelectedVideo.video}
              controls
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="edr-modal-caption">
              <h3>{edrSelectedVideo.title}</h3>
              <p>{edrSelectedVideo.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;