import React, { useState, useEffect, useRef } from 'react';
import './css/StructureDesign.css';
import { Link, useNavigate } from 'react-router-dom'; // 1. Imported useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';

// Make sure to adjust this import path to match your project's folder structure
import Icon from '../../../src/assets/icon-design.png';
import Icon1 from '../../../src/assets/project1.webp';
import Icon2 from '../../../src/assets/project2.webp';
import Icon3 from '../../../src/assets/project3.webp';
import Icon4 from '../../../src/assets/project4.webp';

const ArchitecturalDesign = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const observer = useRef(null); 
  const navigate = useNavigate(); // 2. Initialize useNavigate

  // --- Scroll & Reveal Effect Logic ---
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Changed to a generic 'animate-in' class since we are animating multiple things now
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.15, 
      rootMargin: "0px 0px -50px 0px" 
    });

    // Observe the cards for the zoom effect
    const wrappers = document.querySelectorAll('.work-card-wrapper');
    wrappers.forEach((wrapper) => observer.current.observe(wrapper));

    // Observe the header for the text slide-up reveal
    const header = document.querySelector('.structural-header');
    if (header) observer.current.observe(header);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  // 3. Updated click handler to accept the path
  const handleCtaClick = (e, path) => {
    e.preventDefault();
    if (isAnimating) return; 
    
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      navigate(path); // Navigate to the path after animation completes
    }, 600);
  };

  const projectsData = [
    {
      id: 1,
      title: "Wannsee Residence",
      description: "A 420 m² family residence on a lakeside site at Wannsee, Berlin, completed in 2024",
      location: "WANNSEE, BERLIN",
      year: "2024",
      alignRight: false,
      imageUrl: Icon1,
      path: "/projectdetail" // 4. Added Temporary path
    },
    {
      id: 2,
      title: "Hexagon Office",
      description: "A 4,800 m² headquarters building for an independent media company in Berlin Mitte, completed in 2023",
      location: "MITTE, BERLIN",
      year: "2023",
      alignRight: true,
      imageUrl: Icon2,
      path: "/projectdetail" // 4. Added Temporary path
    },
    {
      id: 3,
      title: "Ridgeway Cultural Pavilion",
      description: "A 420 m² family residence on a lakeside site at Wannsee, Berlin, completed in 2024",
      location: "Coimbatore, TN",
      year: "Commercial",
      alignRight: false,
      imageUrl: Icon3,
      path: "/projectdetail" // 4. Added Temporary path
    },
    {
      id: 4,
      title: "Seaside Cliff Residence",
      description: "A 4,800 m² headquarters building for an independent media company in Berlin Mitte, completed in 2023",
      location: "Coimbatore, TN",
      year: "Residential",
      alignRight: true,
      imageUrl: Icon4,
      path: "/projectdetail" // 4. Added Temporary path
    },
  ];

  return (
    <section className="featured-section">
      <div className="structural-header">
        {/* We wrap the text in a mask div to hide it before the animation triggers */}
        <div className="header-word-mask">
          <h1 className="header-left plus-font">ARCHITECTURAL</h1>
        </div>
        <div className="header-word-mask">
          <h1 className="header-right plus-font">DESIGN</h1>
        </div>
      </div>

      <div className="works-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="work-card-wrapper">
            <div className="work-card">
              
              <div 
                className="work-img-bg" 
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              ></div>
              
              <div className={`overlay ${project.alignRight ? 'align-right' : 'align-left'}`}>
                <div className="project-info">
                  <div className="title-row-icon">
                    <img src={Icon} alt="Project Icon" className="project-icon d-none" /> 
                    <h3 className="project-title tit">{project.title.replace(' +', '')}</h3>
                  </div>
                  
                </div>

                <div className="projects-last-row">

                <div className="tags">
                    <span className="tag plus-font">{project.year}</span>
                    <span className="tag plus-font">{project.location.split(',')[0]}</span>
                </div>
                
                {/* 5. Passing the specific project's path to the click handler */}
                <button 
                  className={`journey-btn ${isAnimating ? 'is-animating' : ''}`}
                  onClick={(e) => handleCtaClick(e, project.path)}
                >
                  <span className="btn-text plus-font">Start Your Journey</span>
                  <div className="btn-toggle-capsule ">
                    <span className="toggle-dot"></span>
                    <div className="toggle-arrow-circle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        ))}
      </div>
    </section>
  );
};

export default ArchitecturalDesign;