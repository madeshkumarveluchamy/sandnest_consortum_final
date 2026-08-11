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
    // Google's Reliable Sample HD Video 1
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: 2,
    title: 'Suriya Villa',
    location: 'Coimbatore',
    img: suriyaImg,
    // Google's Reliable Sample HD Video 2
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    id: 3,
    title: 'Vallgets Residence',
    location: 'Coimbatore',
    img: vallgetsImg,
    // Google's Reliable Sample HD Video 3
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
  {
    id: 4,
    title: 'Green Apple Residence',
    location: 'Coimbatore',
    img: greenAppleImg,
    // Google's Reliable Sample HD Video 4
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  },
];

const ExperienceSection = () => {
  const [edrSelectedVideo, setEdrSelectedVideo] = useState(null);

  // Card render function
  const renderCard = (p, uniqueKeySuffix = '') => (
    <div key={`${p.id}${uniqueKeySuffix}`} className="edr-project-card" style={{ backgroundImage: `url(${p.img})` }}>
      <div className="edr-video-overlay">
        <button
          className="edr-play-button"
          aria-label={`Play ${p.title} video`}
          onClick={() => setEdrSelectedVideo(p)}
        >
          <svg className="edr-play-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      <div className="edr-card-footer">
        <img src={p.img} alt={p.title} className="edr-footer-thumb" />
        <div className="edr-footer-text">
          <h4 className="stit">{p.title}</h4>
          <p className="sdes">{p.location}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="edr-section">
      <header className="edr-header">
        <div className="edr-header-left">
          <div className="edr-badge">
            <img src={studioIcon} alt="Studio Icon" className="edr-left-icon" />
            <span className="edr-badge-text sdes">CONCEPT → REALITY</span>
            <span className="edr-badge-slashes">///</span>
          </div>
        </div>

        <div className="edr-header-center">
          <h2 className="edr-title tit">
            Design Lived,<br />
            Spaces Perfected
          </h2>
        </div>

        <div className="edr-header-right">
          <div className="edr-right-wrapper">
            <p className="edr-subtitle stit">
              A visual library of interiors brought to life from blueprint to beauty.
            </p>
          </div>
        </div>
      </header>

      <div className="edr-marquee-container">
        <div className="edr-marquee-group">
          {projects.map((p) => renderCard(p, '-1'))}
        </div>
        
        <div className="edr-marquee-group" aria-hidden="true">
          {projects.map((p) => renderCard(p, '-2'))}
        </div>
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

            {/* Video Player */}
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
              <h3 className="stit">{edrSelectedVideo.title}</h3>
              <p className="sdes">{edrSelectedVideo.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;