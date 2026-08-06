import React from 'react';
import './css/CareSpaces.css'; 

// =========================================================================
// Assets Imports (Unga src/assets/ folder kulla indha files-a potukonga)
// =========================================================================
import tagIcon from '../../assets/studio-icon.png'; 
import imgStructural from '../../assets/structural.png';
import imgArchitectural from '../../assets/architectural.png';
import imgInterior from '../../assets/interior.png';
import imgLandscape from '../../assets/landscape.png';
import imgSustainable from '../../assets/sustainable.png';

const CareSpaces = () => {
  // Services Data Array
  const servicesData = [
    {
      id: 1,
      num: '(1)',
      title: 'Structural Design',
      desc: 'Complete home interiors that reflect your style functional, beautiful, and deeply personal.',
      statValue: '100 +',
      statLabel: 'Transformed Spaces',
      image: imgStructural,
      isReversed: false, // Text Left, Image Right
    },
    {
      id: 2,
      num: '(2)',
      title: 'Architectural Design',
      desc: 'Complete home interiors that reflect your style functional, beautiful, and deeply personal.',
      statValue: '120 +',
      statLabel: 'Transformed Spaces',
      image: imgArchitectural,
      isReversed: true, // Image Left, Text Right
    },
    {
      id: 3,
      num: '(3)',
      title: 'Interior Design',
      desc: 'Complete home interiors that reflect your style functional, beautiful, and deeply personal.',
      statValue: '150 +',
      statLabel: 'Transformed Spaces',
      image: imgInterior,
      isReversed: false,
    },
    {
      id: 4,
      num: '(4)',
      title: 'Landscape Design',
      desc: 'Complete home interiors that reflect your style functional, beautiful, and deeply personal.',
      statValue: '120 +',
      statLabel: 'Transformed Spaces',
      image: imgLandscape,
      isReversed: true,
    },
    {
      id: 5,
      num: '(5)',
      title: 'Sustainable Green Buildings',
      desc: 'Complete home interiors that reflect your style functional, beautiful, and deeply personal.',
      statValue: '70 +',
      statLabel: 'Transformed Spaces',
      image: imgSustainable,
      isReversed: false,
    }
  ];

  return (
    <section className="cs-wrapper">
      <div className="cs-container">
        
        {/* Top Header */}
        <div className="cs-header-row">
          <div className="cs-header-left">
            <img src={tagIcon} alt="tag" className="cs-tag-icon" />
            <span className="cs-subtitle-text">OUR SERVICES</span>
            <span className="cs-slash-text">///</span>
          </div>
          
          <div className="cs-header-center">
            <h2 className="cs-main-heading">
              Personalized Care<br />
              Inspired Spaces
            </h2>
          </div>
          
          <div className="cs-header-right">
            <p className="cs-header-desc">
              Creative solutions tailored for every style and every space.
            </p>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="cs-timeline-wrapper">
          {servicesData.map((service, index) => (
            <div className="cs-timeline-item" key={service.id}>
              
              {/* Vertical Number & Line */}
              <div className="cs-number-column">
                <span className="cs-number-text">{service.num}</span>
                {/* Last item-ku line venam, so condition check pandrom */}
                {index !== servicesData.length  && <div className="cs-vertical-line"></div>}
              </div>

              {/* Text & Image Row (Alternating Flex) */}
              <div className={`cs-content-row ${service.isReversed ? 'cs-row-reverse' : ''}`}>
                
                {/* Text Block */}
                <div className="cs-text-block">
                  <h3 className="cs-card-title">{service.title}</h3>
                  <p className="cs-card-desc">{service.desc}</p>
                  <div className="cs-stat-container">
                    <h4 className="cs-stat-value">{service.statValue}</h4>
                    <span className="cs-stat-label">{service.statLabel}</span>
                  </div>
                </div>

                {/* Image Block */}
                <div className="cs-image-block">
                  <img src={service.image} alt={service.title} className="cs-service-img" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareSpaces;