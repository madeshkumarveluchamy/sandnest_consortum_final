import React, { useState, useEffect } from 'react';
import './css/ArchitectureServices.css'; // Unga CSS file path-a correct-ah check pannikonga

// =========================================================================
// Assets Imports (Unga src/assets/ folder kulla indha files-a potukonga)
// =========================================================================
import servicesBg from '../../assets/services-bg.png'; 
import iconConstruction from '../../assets/construction-icon.png'; 
import iconArchitecture from '../../assets/architecture-icon.png'; 
import iconCoordination from '../../assets/coordination-icon.png'; 
import iconLandscape from '../../assets/landscape-icon.png';       

const servicesData = [
  {
    id: '01',
    title: 'Construction and Management',
    desc: 'We oversee every construction stage carefully, coordinating teams and ensuring smooth on-site execution from start to finish.',
    icon: iconConstruction
  },
  {
    id: '02',
    title: 'Architectural Planning & Design',
    desc: 'We develop clear design strategies, refine concepts, and create detailed plans that guide each project with precision.',
    icon: iconCoordination
  },
  {
    id: '03',
    title: 'Project Coordination & Delivery',
    desc: 'We manage schedules, resources, and communication, keeping the entire project aligned and progressing efficiently.',
    icon: iconArchitecture
  },
  {
    id: '04',
    title: 'Exterior & Landscape Design',
    desc: 'We shape outdoor spaces with intention, blending functionality, natural elements, and visual harmony into every environment.',
    icon: iconLandscape
  }
];

const ArchitectureServices = () => {
  // Animation State: to track which card is currently animating
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // 3000ms (3 seconds) ku oru thadava adutha card ku move aagum
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }, 3000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="arch-services-wrapper dark-section"
      style={{ backgroundImage: `url(${servicesBg})` }}
    >
      <div className="arch-services-container">
        
        <div className="arch-services-header">
          {/* Main Title: .tit class added here */}
          <h2 className="arch-services-main-title tit">
            <span className="arch-text-white">ARCHITECTURE &</span><br />
            <span className="arch-text-gold">DESIGN SERVICES</span>
          </h2>
        </div>

        <div className="arch-services-grid">
          {servicesData.map((service, index) => {
            // Check active and past status for animation
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;

            return (
              <div key={service.id} className={`arch-services-card ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}>
                <div className="arch-services-number-container">
                  <span className="arch-services-number sdes">{service.id}.</span>
                  {/* Animated Progress Line Fill */}
                  <div className="arch-progress-fill"></div>
                </div>
                
                <div className="arch-services-icon">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="arch-service-img-icon"
                  />
                </div>
                
                {/* Card Title Highlights only when active */}
                <h3 className={`arch-services-card-title stit ${isActive ? 'arch-highlight-title' : ''}`}>
                  {service.title}
                </h3>
                
                <p className="arch-services-card-desc des">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="arch-services-action-container">
          <button className="arch-services-btn">
            {/* Button Text: .des class added here */}
            <span className="arch-services-btn-text des">Start Your Journey</span>
            
            <div className="arch-services-btn-capsule">
              <span className="arch-services-btn-dot"></span>
              <div className="arch-services-btn-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureServices;