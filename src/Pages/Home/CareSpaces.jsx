import React, { useEffect, useRef } from 'react';
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
  const revealRefs = useRef([]);
  const imageRefs = useRef([]);

  const addToRevealRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    // 1. Continuous Reveal Animation (Scroll panna panna thirumba animate aagum)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          } else {
            // Viewport-a vittu veliya pogumbothu class-a remove panrom
            // Appothaan thirumba scroll pannumbothu pudhusa animate aagum
            entry.target.classList.remove('reveal-active');
          }
        });
      },
      {
        threshold: 0.15, // 15% therinthaal podhum
        rootMargin: "0px 0px -50px 0px" // Kela konjam munnaadiye trigger aaga
      }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // 2. Continuous Parallax Scroll Effect for Images
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        imageRefs.current.forEach((img) => {
          if (!img) return;
          const container = img.parentElement;
          const rect = container.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Image screen-la irukumbothu mattum mathippu calculate aagum
          if (rect.top <= windowHeight && rect.bottom >= 0) {
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
            const clampedProgress = Math.min(Math.max(progress, 0), 1);
            
            // Movement intensity (40 value-a maathuna speed athigamaagum)
            const yPos = (clampedProgress - 0.5) * 40; 
            
            img.style.transform = `translateY(${yPos}%) scale(1.2)`;
          }
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      // Clean up
      revealRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const servicesData = [
    {
      id: 1,
      num: '(1)',
      title: 'Structural Design',
      desc: 'Complete home interiors that reflect your style functional, beautiful, and deeply personal.',
      statValue: '100 +',
      statLabel: 'Transformed Spaces',
      image: imgStructural,
      isReversed: false,
    },
    {
      id: 2,
      num: '(2)',
      title: 'Architectural Design',
      desc: 'Complete home interiors that reflect your style functional, beautiful, and deeply personal.',
      statValue: '120 +',
      statLabel: 'Transformed Spaces',
      image: imgArchitectural,
      isReversed: true,
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

        <div className="cs-timeline-wrapper">
          {servicesData.map((service, index) => (
            <div 
              className="cs-timeline-item" 
              key={service.id} 
              ref={addToRevealRefs} 
            >
              <div className="cs-number-column">
                <span className="cs-number-text">{service.num}</span>
                {index !== servicesData.length - 1 && (
                  <div className="cs-vertical-line"></div>
                )}
              </div>

              <div className={`cs-content-row ${service.isReversed ? 'cs-row-reverse' : ''}`}>
                <div className="cs-text-block">
                  <h3 className="cs-card-title">{service.title}</h3>
                  <p className="cs-card-desc">{service.desc}</p>
                  <div className="cs-stat-container">
                    <h4 className="cs-stat-value">{service.statValue}</h4>
                    <span className="cs-stat-label">{service.statLabel}</span>
                  </div>
                </div>

                <div className="cs-image-block">
                  <div className="cs-image-reveal-wrapper">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="cs-service-img" 
                      ref={(el) => (imageRefs.current[index] = el)}
                    />
                  </div>
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