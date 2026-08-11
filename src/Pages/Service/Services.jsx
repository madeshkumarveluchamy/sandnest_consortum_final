import React, { useState, useEffect, useRef } from 'react';
import './css/Services.css';

import heroImg from '../../assets/services-hero.png';
import service1Img from '../../assets/service-1.png';
import service3Img from '../../assets/service-2.png';
import service2Img from '../../assets/service-3.png';
import service4Img from '../../assets/service-4.png';
import FaqsSection from '../Story/FaqSection';

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Animation-க்காக புதிதாக சேர்த்த State & Ref
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Scroll செய்யும் போது அந்த Section தெரிந்தால் Animation-ஐ Trigger செய்ய
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          // ஒரு முறை அனிமேஷன் நடந்தால் போதும் என்பதால் unobserve செய்கிறோம்
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.5 } // 20% Section கண்ணுக்கு தெரிந்தவுடனே Trigger ஆகும்
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const parallaxItems = document.querySelectorAll('.ds-item');

    let ticking = false;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight;

      parallaxItems.forEach((item) => {
        const img = item.querySelector('.ds-item-img');
        const imageWrap = item.querySelector('.ds-item-right');
        if (!img || !imageWrap) return;

        const rect = item.getBoundingClientRect();

        const start = viewportHeight;
        const end = -rect.height;
        const progress = 1 - (rect.top - end) / (start - end);
        const clampedProgress = Math.max(0, Math.min(1, progress));

        const moveRange = 28;
        const translateY = (clampedProgress - 0.5) * moveRange;

        img.style.transform = `translateY(${translateY}%) scale(1.08)`;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateParallax);
    updateParallax();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateParallax);
    };
  }, []);

  const services = [
    {
      id: "01",
      title: "STRUCTURAL DESIGN",
      disciplineValue: "Structural Design",
      img: service1Img,
      delivered: "150 +"
    },
    {
      id: "02",
      title: "ARCHITECTURAL DESIGN",
      disciplineValue: "Architectural Design",
      img: service2Img,
      delivered: "100 +"
    },
    {
      id: "03",
      title: "INTERIOR DESIGN",
      disciplineValue: "Interior Design",
      img: service3Img,
      delivered: "120 +"
    },
    {
      id: "04",
      title: "LANDSCAPE DESIGN",
      disciplineValue: "Landscape Design",
      img: service4Img,
      delivered: "110 +"
    }
  ];

  return (
    <div className="services-page-container">
      <main className="services-main-content">
        <section className="services-hero-section pt-5">
          <div className="services-hero-image-wrapper">
            <img src={heroImg} alt="Our Architectural & Design Services" className="hero-img dark-section" />
            <div className="hero-overlay"></div>
            <h1 className="service-hero-title">Our Architectural &<br />Design Services</h1>
          </div>
        </section>

        <section className="how-we-work-section container">
          <div className="hww-left">
            <h2 className="hww-title">
              HOW WE <span className="highlight-brown plus-font">WORKS</span>
            </h2>
            <p className="hww-desc">
              From first launches to lasting collaborations, we’re trusted to deliver on time and at quality.
            </p>
          </div>

          <div className="hww-right">
            <div className="hww-stage-item">
              <div className="stage-badge-col">
                <span className="stage-badge sdes"><span className="dot"></span>Stage One</span>
              </div>
              <div className="stage-number-col">01</div>
              <div className="stage-details-col">
                <h3>CONSULTATION & SITE ANALYSIS</h3>
                <p>In-depth discussion of client requirements, budget mapping, physical site inspection, soil analysis, and checking local municipal building regulations.</p>
              </div>
            </div>

            <div className="hww-stage-item">
              <div className="stage-badge-col">
                <span className="stage-badge plus-font"><span className="dot"></span>Stage Two</span>
              </div>
              <div className="stage-number-col plus-font pt-md-3 tit">02</div>
              <div className="stage-details-col">
                <h3 className='plus-font fw-medium pt-md-4 stit'>DESIGN DEVELOPMENT</h3>
                <p  className='plus-font des'>Selecting exact materials, finalized interior layouts, planning window/door placements, and initial coordination for electrical, plumbing, and HVAC systems.</p>
              </div>
            </div>

            <div className="hww-stage-item">
              <div className="stage-badge-col">
                <span className="stage-badge plus-font"><span className="dot"></span>Stage Three</span>
              </div>
              <div className="stage-number-col plus-font pt-md-3 tit">03</div>
              <div className="stage-details-col">
                <h3 className='plus-font fw-medium pt-md-4 stit'>STRUCTURAL DESIGN & ENGINEERING</h3>
                <p className='plus-font des'>In-depth discussion of client requirements, budget mapping, physical site inspection, soil analysis, and checking local municipal building regulations.</p>
              </div>
            </div>

            <div className="hww-stage-item">
              <div className="stage-badge-col">
                <span className="stage-badge plus-font"><span className="dot"></span>Stage Four</span>
              </div>
              <div className="stage-number-col plus-font pt-md-3 tit">04</div>
              <div className="stage-details-col">
                <h3 className='plus-font fw-medium pt-md-4 stit'>WORKING DRAWINGS & APPROVALS</h3>
                <p className='plus-font des'>In-depth discussion of client requirements, budget mapping, physical site inspection, soil analysis, and checking local municipal building regulations.</p>
              </div>
            </div>

            <div className="hww-stage-item">
              <div className="stage-badge-col">
                <span className="stage-badge plus-font"><span className="dot"></span>Stage Five</span>
              </div>
              <div className="stage-number-col plus-font pt-md-3 tit">05</div>
              <div className="stage-details-col">
                <h3 className='plus-font fw-medium pt-md-4 stit'>CONSTRUCTION SUPERVISION & HANDOVER</h3>
                <p className='plus-font des'>In-depth discussion of client requirements, budget mapping, physical site inspection, soil analysis, and checking local municipal building regulations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="detailed-services-section container">
          {/* Scroll செய்யும் போது isHeaderVisible 'true' ஆக மாறும், அப்போது 'in-view' class add ஆகும் */}
          <div className={`ds-header ${isHeaderVisible ? 'in-view' : ''}`} ref={headerRef}>
            <div className="ds-title-wrapper ds-title-1">
              <h2 className="plus-font">OUR</h2>
            </div>
            
            <div className="ds-title-wrapper ds-title-2">
              <h2 className="plus-font">ARCHITECTURAL</h2>
            </div>
            
            <div className="ds-title-wrapper ds-title-3">
              <h2 className="plus-font">DESIGN SERVICES</h2>
            </div>
          </div>

          <div className="ds-list">
            {services.map((service) => (
              <div className="ds-item" key={service.id}>
                <div className="ds-item-left">
                  <div className="ds-badge plus-font sdes">
                    <span className="dot"></span> {service.id}
                  </div>

                  <h3 className="ds-item-title plus-font stit">{service.title}</h3>

                  <p className="ds-item-desc plus-font des">
                    We deliver rigorous, climate responsive structural planning aligned with modern safety standards. Our engineering ensures structural longevity while preserving the aesthetic and spatial fluidity of your design.
                  </p>

                  <div className="ds-tags-row">
                    <div className="ds-tag-item">
                      <div className="ds-tag-pill plus-font des">
                        <span className="dot"></span> DISCIPLINE
                      </div>
                      <div className="ds-tag-value plus-font sdes">{service.disciplineValue}</div>
                    </div>

                    <div className="ds-tag-item">
                      <div className="ds-tag-pill plus-font des">
                        <span className="dot"></span> PROJECTS DELIVERED
                      </div>
                      <div className="ds-tag-value value-large plus-font tit">{service.delivered}</div>
                    </div>
                  </div>
                </div>

                <div className="ds-item-right">
                  <img src={service.img} alt={service.title} className="ds-item-img" />
                </div>
              </div>
            ))}
          </div>
        </section>
         <FaqsSection />
      </main>
    </div>
  );
};

export default Services;