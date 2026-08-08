import React, { useState, useEffect } from 'react';
import './css/Services.css';


import heroImg from '../../assets/services-hero.png';
import service1Img from '../../assets/service-1.png';
import service3Img from '../../assets/service-2.png';
import service2Img from '../../assets/service-3.png';
import service4Img from '../../assets/service-4.png';
import FaqsSection from '../Story/FaqSection';

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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

  const faqData = [
    {
      id: 1,
      question: "What services does Sandnest Consortium provide?",
      answer: "Specialized in eco friendly green buildings and vernacular architecture, creating nature inspired spaces that harmonize with local climate, culture, and context."
    },
    {
      id: 2,
      question: "What is your architectural style and design philosophy?",
      answer: "Our design philosophy revolves around sustainable and minimalistic approaches, merging modern aesthetics with traditional functionality."
    },
    {
      id: 3,
      question: "Do you specialize in custom farmhouse design?",
      answer: "Yes, we specialize in creating bespoke farmhouse designs that seamlessly blend with natural surroundings."
    },
    {
      id: 4,
      question: "Where are your projects located, and do you work outside Tamil Nadu?",
      answer: "While we are based in Coimbatore, we undertake prestigious projects across South India and select international locations."
    },
    {
      id: 5,
      question: "How do we start a project or schedule an initial consultation?",
      answer: "You can reach out to us via our contact page, email, or phone to schedule your initial consultation with our lead architects."
    }
  ];

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
        <section className="services-hero-section">
          <div className="services-hero-image-wrapper">
            <img src={heroImg} alt="Our Architectural & Design Services" className="hero-img" />
            <div className="hero-overlay"></div>
            <h1 className="hero-title plu.plus-font">Our Architectural &<br />Design Services</h1>
          </div>
        </section>

        <section className="how-we-work-section">
          <div className="hww-left">
            <h2 className="hww-title">
              HOW WE <span className="highlight-brown">WORKS</span>
            </h2>
            <p className="hww-desc .plus-font">
              From first launches to lasting collaborations, we’re trusted to deliver on time and at quality.
            </p>
          </div>

          <div className="hww-right">
            <div className="hww-stage-item">
              <div className="stage-badge-col">
                <span className="stage-badge"><span className="dot"></span>Stage One</span>
              </div>
              <div className="stage-number-col">01</div>
              <div className="stage-details-col .plus-font">
                <h3>CONSULTATION & SITE ANALYSIS</h3>
                <p>In-depth discussion of client requirements, budget mapping, physical site inspection, soil analysis, and checking local municipal building regulations.</p>
              </div>
            </div>

            <div className="hww-stage-item">
              <div className="stage-badge-col">
                <span className="stage-badge"><span className="dot"></span>Stage Two</span>
              </div>
              <div className="stage-number-col">02</div>
              <div className="stage-details-col">
                <h3>DESIGN DEVELOPMENT</h3>
                <p>Selecting exact materials, finalized interior layouts, planning window/door placements, and initial coordination for electrical, plumbing, and HVAC systems.</p>
              </div>
            </div>

            <div className="hww-stage-item">
              <div className="stage-badge-col">
                <span className="stage-badge"><span className="dot"></span>Stage Three</span>
              </div>
              <div className="stage-number-col">03</div>
              <div className="stage-details-col">
                <h3>STRUCTURAL DESIGN & ENGINEERING</h3>
                <p>In-depth discussion of client requirements, budget mapping, physical site inspection, soil analysis, and checking local municipal building regulations.</p>
              </div>
            </div>

            <div className="hww-stage-item">
              <div className="stage-badge-col">
                <span className="stage-badge"><span className="dot"></span>Stage Four</span>
              </div>
              <div className="stage-number-col">04</div>
              <div className="stage-details-col">
                <h3>WORKING DRAWINGS & APPROVALS</h3>
                <p>In-depth discussion of client requirements, budget mapping, physical site inspection, soil analysis, and checking local municipal building regulations.</p>
              </div>
            </div>

            <div className="hww-stage-item">
              <div className="stage-badge-col">
                <span className="stage-badge"><span className="dot"></span>Stage Five</span>
              </div>
              <div className="stage-number-col">05</div>
              <div className="stage-details-col">
                <h3>CONSTRUCTION SUPERVISION & HANDOVER</h3>
                <p>In-depth discussion of client requirements, budget mapping, physical site inspection, soil analysis, and checking local municipal building regulations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="detailed-services-section">
          <div className="ds-header">
            <h2 className="ds-title-1">OUR</h2>
            <h2 className="ds-title-2">ARCHITECTURAL</h2>
            <h2 className="ds-title-3">DESIGN SERVICES</h2>
          </div>

          <div className="ds-list">
            {services.map((service) => (
              <div className="ds-item" key={service.id}>
                <div className="ds-item-left">
                  <div className="ds-badge">
                    <span className="dot"></span> {service.id}
                  </div>

                  <h3 className="ds-item-title">{service.title}</h3>

                  <p className="ds-item-desc">
                    We deliver rigorous, climate responsive structural planning aligned with modern safety standards. Our engineering ensures structural longevity while preserving the aesthetic and spatial fluidity of your design.
                  </p>

                  <div className="ds-tags-row">
                    <div className="ds-tag-item">
                      <div className="ds-tag-pill">
                        <span className="dot"></span> DISCIPLINE
                      </div>
                      <div className="ds-tag-value">{service.disciplineValue}</div>
                    </div>

                    <div className="ds-tag-item">
                      <div className="ds-tag-pill">
                        <span className="dot"></span> PROJECTS DELIVERED
                      </div>
                      <div className="ds-tag-value value-large">{service.delivered}</div>
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