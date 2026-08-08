import React from 'react';
import './css/ArchitectureServices.css'; // Unga CSS file path-a correct-ah check pannikonga

// =========================================================================
// Assets Imports (Unga src/assets/ folder kulla indha files-a potukonga)
// =========================================================================
import servicesBg from '../../assets/services-bg.png'; // Background screen
import iconConstruction from '../../assets/construction-icon.png'; // Icon 01
import iconArchitecture from '../../assets/architecture-icon.png'; // Icon 02
import iconCoordination from '../../assets/coordination-icon.png'; // Icon 03
import iconLandscape from '../../assets/landscape-icon.png';       // Icon 04

const servicesData = [
  {
    id: '01',
    title: 'Construction and Management',
    desc: 'We oversee every construction stage carefully, coordinating teams and ensuring smooth on-site execution from start to finish.',
    highlight: false,
    icon: iconConstruction
  },
  {
    id: '02',
    title: 'Architectural Planning & Design',
    desc: 'We develop clear design strategies, refine concepts, and create detailed plans that guide each project with precision.',
    highlight: true,
    icon: iconCoordination
  },
  {
    id: '03',
    title: 'Project Coordination & Delivery',
    desc: 'We manage schedules, resources, and communication, keeping the entire project aligned and progressing efficiently.',
    highlight: false,
    icon: iconArchitecture
  },
  {
    id: '04',
    title: 'Exterior & Landscape Design',
    desc: 'We shape outdoor spaces with intention, blending functionality, natural elements, and visual harmony into every environment.',
    highlight: false,
    icon: iconLandscape
  }
];

const ArchitectureServices = () => {
  return (
    <section 
      className="arch-services-wrapper dark-section"
      style={{ backgroundImage: `url(${servicesBg})` }}
    >
      <div className="arch-services-container">
        
        <div className="arch-services-header">
          <h2 className="arch-services-main-title">
            <span className="arch-text-white">ARCHITECTURE &</span><br />
            <span className="arch-text-gold">DESIGN SERVICES</span>
          </h2>
        </div>

        <div className="arch-services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="arch-services-card">
              <div className="arch-services-number-container">
                <span className="arch-services-number">{service.id}.</span>
              </div>
              <div className="arch-services-icon">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="arch-service-img-icon"
                />
              </div>
              <h3 className={`arch-services-card-title ${service.highlight ? 'arch-highlight-title' : ''}`}>
                {service.title}
              </h3>
              <p className="arch-services-card-desc">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="arch-services-action-container">
          <button className="arch-services-btn">
            <span className="arch-services-btn-text">Start Your Journey</span>
            
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