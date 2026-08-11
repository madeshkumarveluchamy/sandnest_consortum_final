import React, { useEffect, useRef } from 'react';
import './css/CareSpaces.css'; 

// =========================================================================
// Assets Imports (உங்க src/assets/ folder குள்ள இந்த files-அ போட்டுக்கோங்க)
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
    // 1. Continuous Reveal Animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          } else {
            entry.target.classList.remove('reveal-active');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
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
          
          if (rect.top <= windowHeight && rect.bottom >= 0) {
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
            const clampedProgress = Math.min(Math.max(progress, 0), 1);
            
            const yPos = (clampedProgress - 0.5) * 40; 
            img.style.transform = `translateY(${yPos}%) scale(1.2)`;
          }
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      revealRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const servicesData = [
    {
      id: 1,
      title: 'Structural Design',
      desc: 'Complete home interiors that reflect your style functional, beautiful, and deeply personal.',
      statValue: '100 +',
      statLabel: 'Transformed Spaces',
      image: imgStructural,
      isReversed: false,
    },
    {
      id: 2,
      title: 'Architectural Design',
      desc: 'Complete home interiors that reflect your style functional, beautiful, and deeply personal.',
      statValue: '120 +',
      statLabel: 'Transformed Spaces',
      image: imgArchitectural,
      isReversed: true,
    },
    {
      id: 3,
      title: 'Interior Design',
      desc: 'Complete home interiors that reflect your style functional, beautiful, and deeply personal.',
      statValue: '150 +',
      statLabel: 'Transformed Spaces',
      image: imgInterior,
      isReversed: false,
    },
    {
      id: 4,
      title: 'Landscape Design',
      desc: 'Complete home interiors that reflect your style functional, beautiful, and deeply personal.',
      statValue: '120 +',
      statLabel: 'Transformed Spaces',
      image: imgLandscape,
      isReversed: true,
    },
    {
      id: 5,
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
            <span className="cs-subtitle-text stit">OUR SERVICES</span>
            <span className="cs-slash-text">///</span>
          </div>
          
          <div className="cs-header-center">
            <h2 className="cs-main-heading tit">
              Personalized Care<br />
              Inspired Spaces
            </h2>
          </div>
          
          <div className="cs-header-right">
            <p className="cs-header-desc des">
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
              <div className={`cs-content-row ${service.isReversed ? 'cs-row-reverse' : ''}`}>
                <div className="cs-text-block">
                  <h3 className="cs-card-title stit">{service.title}</h3>
                  <p className="cs-card-desc des">{service.desc}</p>
                  
                  <div className="cs-stat-container">
                    <h4 className="cs-stat-value tit">{service.statValue}</h4>
                    <span className="cs-stat-label sdes">{service.statLabel}</span>
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