import React, { useState, useRef, useEffect } from 'react';
import './css/ExperienceSection.css';

import kvnImg from '../../assets/kvn-residence.png';
import suriyaImg from '../../assets/suriya-villa.png';
import vallgetsImg from '../../assets/vallgets-residence.png';
import greenAppleImg from '../../assets/green-apple-residence.png';
import studioIcon from '../../assets/studio-icon.png';

// புதிதாக மாற்றப்பட்ட Working Video Links
const projects = [
  { 
    id: 1, 
    title: 'KVN Residence', 
    location: 'Bangalore', 
    img: kvnImg, 
    video: 'https://www.w3schools.com/html/mov_bbb.mp4' 
  },
  { 
    id: 2, 
    title: 'Suriya Villa', 
    location: 'Coimbatore', 
    img: suriyaImg, 
    video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' 
  },
  { 
    id: 3, 
    title: 'Vallgets Residence', 
    location: 'Coimbatore', 
    img: vallgetsImg, 
    video: 'https://media.w3.org/2010/05/bunny/trailer.mp4' 
  },
  { 
    id: 4, 
    title: 'Green Apple Residence', 
    location: 'Coimbatore', 
    img: greenAppleImg, 
    video: 'https://media.w3.org/2010/05/video/movie_300.mp4' 
  },
];

const ExperienceSection = () => {
  const [edrSelectedVideo, setEdrSelectedVideo] = useState(null);

  const sliderRef = useRef(null);
  const groupRef = useRef(null); 
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const [dragged, setDragged] = useState(false); 
  const [isDraggingState, setIsDraggingState] = useState(false); 

  // --- INFINITE LOOP LOGIC ---
  const checkAndResetScroll = () => {
    const slider = sliderRef.current;
    const group = groupRef.current;
    if (!slider || !group) return;

    const groupWidth = group.offsetWidth;

    // இடதுபுறம் (Left) எல்லை மீறினால் - கடைசி செட்டிற்கு மாற்றுவது
    if (slider.scrollLeft <= 0) {
      slider.scrollLeft += groupWidth;
      if (isDragging.current) scrollLeftPos.current += groupWidth;
    } 
    // வலதுபுறம் (Right) எல்லை மீறினால் - முதல் செட்டிற்கு மாற்றுவது
    else if (slider.scrollLeft >= groupWidth * 2) {
      slider.scrollLeft -= groupWidth;
      if (isDragging.current) scrollLeftPos.current -= groupWidth;
    }
  };

  // Initial Scroll Setup: பேஜ் லோட் ஆனதும் நடுப்பகுதியில் (2nd set) தொடங்க வேண்டும்
  useEffect(() => {
    if (sliderRef.current && groupRef.current) {
      sliderRef.current.scrollLeft = groupRef.current.offsetWidth;
    }
  }, []);

  // JavaScript Auto-Scroll Logic
  useEffect(() => {
    let animationId;

    const autoScroll = () => {
      const slider = sliderRef.current;
      if (!isDragging.current && !isHovered.current && slider && !edrSelectedVideo) {
        slider.scrollLeft += 1; 
        checkAndResetScroll(); 
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [edrSelectedVideo]); 

  // Mouse Events for Dragging
  const handleMouseDown = (e) => {
    isDragging.current = true;
    setIsDraggingState(true);
    setDragged(false);
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftPos.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsDraggingState(false);
    isHovered.current = false;
  };

  const handleMouseEnter = () => {
    isHovered.current = true; 
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsDraggingState(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 1.5; 

    // மாற்றம் 1: மவுஸ் 5 pixel-க்கு மேல் நகர்ந்தால் மட்டுமே Drag என எடுத்துக்கொள்ளும்
    if (Math.abs(walk) > 5) {
      setDragged(true); 
    }

    slider.scrollLeft = scrollLeftPos.current - walk;
    checkAndResetScroll(); 
  };

  const handleVideoClick = (e, p) => {
    // மாற்றம் 2: கிளிக் ஈவென்ட் Drag-ஐ பாதிக்காமல் இருக்க stopPropagation சேர்க்கப்பட்டுள்ளது
    e.preventDefault();
    e.stopPropagation(); 

    if (dragged) {
      return;
    }
    setEdrSelectedVideo(p);
  };

  const renderCard = (p, uniqueKeySuffix = '') => (
    <div key={`${p.id}${uniqueKeySuffix}`} className="edr-project-card" style={{ backgroundImage: `url(${p.img})` }}>
      <div className="edr-video-overlay">
        <button
          className="edr-play-button"
          aria-label={`Play ${p.title} video`}
          onClick={(e) => handleVideoClick(e, p)}
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
            Design Lived,<br /> Spaces Perfected
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

      {/* Auto-Scroll & Draggable Container */}
      <div 
        className={`edr-marquee-container ${isDraggingState ? 'dragging' : ''}`}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={checkAndResetScroll}
      >
        <div className="edr-marquee-group" ref={groupRef}>
          {projects.map((p) => renderCard(p, '-1'))}
        </div>

        <div className="edr-marquee-group" aria-hidden="true">
          {projects.map((p) => renderCard(p, '-2'))}
        </div>

        <div className="edr-marquee-group" aria-hidden="true">
          {projects.map((p) => renderCard(p, '-3'))}
        </div>
      </div>

      {/* Video Modal */}
      {edrSelectedVideo && (
        <div className="edr-video-modal" onClick={() => setEdrSelectedVideo(null)}>
          <div className="edr-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="edr-video-close" onClick={() => setEdrSelectedVideo(null)}>×</button>
            {/* மாற்றம் 3: muted என்ற வார்த்தை சேர்க்கப்பட்டுள்ளது (Browser தானாக play செய்ய அனுமதிக்கும்) */}
            <video className="edr-modal-video" src={edrSelectedVideo.video} controls autoPlay loop playsInline muted />
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