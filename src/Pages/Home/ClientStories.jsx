import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';

// Swiper CSS imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// Custom CSS
import './css/ClientStories.css';

// Your assets
import slide1 from '../../assets/voice1.png';
import slide2 from '../../assets/voice2.png';
import slide3 from '../../assets/voice3.png';
import vasuAvatar from '../../assets/vasu-icon.png';
import studioIcon from '../../assets/studio-icon.png';

export default function ClientStories() {
  
  const baseSlides = [
    {
      id: 2,
      image: slide2,
      title: 'Azure Hallway',
      year: '2026',
      tags: ['Oceanic', 'Natural Light'],
      hasReview: true,
      review: {
        headline: 'Quiet Architectural Confidence',
        content: "The interior feels calm and perfectly balanced. Nothing is excessive, nothing is missing. It's a space that reveals its quality over time.",
        authorName: 'Vasu',
        authorRole: 'Development Manager — Covai Groups',
        authorAvatar: vasuAvatar,
      },
    },
    {
      id: 1,
      image: slide1,
      title: 'Tranquility',
      year: '2025',
      tags: ['Minimalism', 'Natural'],
      hasReview: true,
      review: {
        headline: 'Natural Minimalism Personified',
        content: "Tranquility perfectly captures the essence of modern living. Minimalist design and native elements blend seamlessly to provide true peace of mind. A wonderful experience.",
        authorName: 'Vasu',
        authorRole: 'Development Manager — Covai Groups',
        authorAvatar: vasuAvatar,
      },
    },
    {
      id: 3,
      image: slide3,
      title: 'Coastal Serenity',
      year: '2024',
      tags: ['Coastal', 'Modern'],
      hasReview: true,
      review: {
        headline: 'Light and Coastal Modern Living',
        content: "Light and space are the ultimate luxuries here. A modern take on coastal living that prioritizes natural light and connection to nature. Absolutely divine.",
        authorName: 'Vasu',
        authorRole: 'Development Manager — Covai Groups',
        authorAvatar: vasuAvatar,
      },
    },
  ];

  const slides = [...baseSlides, ...baseSlides.map(slide => ({ ...slide, id: slide.id + '_dup' }))];

  return (
    <section className="voc-section">
      <header className="voc-header">
        
        {/* Left Column */}
        <div className="voc-header-left">
          <div className="voc-badge">
            <img src={studioIcon} alt="Studio Icon" className="voc-left-icon" />
            <span className="voc-badge-text">CLIENT STORIES</span>
            <span className="voc-badge-slashes">///</span>
          </div>
        </div>

        {/* Center Column */}
        <div className="voc-header-center">
          <h2 className="voc-title">Voices of Our Clients</h2>
        </div>

        {/* Right Column */}
        <div className="voc-header-right">
          <div className="voc-right-wrapper">
            <p className="voc-subtitle">
              A visual library of interiors brought to life from blueprint to beauty.
            </p>
            <div className="voc-nav-buttons">
              <button className="voc-arrow-btn voc-prev">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button className="voc-arrow-btn voc-next">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

     <div className="voc-slider-container">
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          speed={1000}
          loop={true} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, 
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={{
            prevEl: '.voc-prev',
            nextEl: '.voc-next',
          }}
          className="voc-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="voc-slide">
              {({ isActive }) => (
                <div className={`voc-card ${isActive ? 'is-active' : ''}`}>
                  <div className="voc-image-wrapper">
                    <img src={slide.image || "https://via.placeholder.com/800x500"} alt={slide.title} className="voc-main-img" />
                    
                    {slide.hasReview && (
                      <div className="voc-glass-overlay">
                        <h3 className="voc-glass-title">{slide.review.headline}</h3>
                        <p className="voc-glass-text">{slide.review.content}</p>
                        <div className="voc-author-block">
                          <img 
                            src={slide.review.authorAvatar || "https://via.placeholder.com/40"} 
                            alt={slide.review.authorName} 
                            className="voc-avatar" 
                          />
                          <div className="voc-author-info">
                            <span className="voc-author-name">{slide.review.authorName}</span>
                            <span className="voc-author-role">{slide.review.authorRole}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="voc-card-meta">
                    <div className="voc-meta-left">
                      <h4 className="voc-item-title">{slide.title}</h4>
                      <span className="voc-item-year">{slide.year}</span>
                    </div>
                    <div className="voc-meta-right">
                      {slide.tags.map((tag, index) => (
                       <span key={`${slide.id}-${index}`} className="voc-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}