import React, { useState } from 'react';
import './css/ExperienceSection.css';

// உங்களின் Image Imports
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
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: 2,
    title: 'Suriya Villa',
    location: 'Coimbatore',
    img: suriyaImg,
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    id: 3,
    title: 'Vallgets Residence',
    location: 'Coimbatore',
    img: vallgetsImg,
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
  {
    id: 4,
    title: 'Green Apple Residence',
    location: 'Coimbatore',
    img: greenAppleImg,
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  },
];

const ExperienceSection = () => {
  const [edrSelectedVideo, setEdrSelectedVideo] = useState(null);

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
      <header className="edr-header container">
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

      {/* Video Modal Open ஆகியிருக்கும் போது ஸ்க்ரோல் நிற்பதற்கு 'paused' class வேலை செய்யும் */}
      <div className={`edr-marquee-container ${edrSelectedVideo ? 'paused' : ''}`}>
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
              muted={false} /* வீடியோவுக்கு sound வேண்டுமென்றால் false வைக்கவும் */
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