import React, { useState } from 'react';
import './css/FaqsSection.css';
import studioIcon from '../../assets/studio-icon.png'; 

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqData = [
    {
      question: "What services does Calibre offer?",
      answer: "We provide full-service interior design, home styling, space planning, and renovation support for residential and select commercial projects."
    },
    {
      question: "How does a typical project start?",
      answer: "A typical project starts with an initial consultation where we discuss your needs, budget, and timeline to create a customized design plan."
    },
    {
      question: "Do you handle renovations as well as design?",
      answer: "Yes, we work closely with trusted contractors to manage and execute full-scale renovations alongside our interior design services."
    },
    {
      question: "Can you work with an existing space or furniture?",
      answer: "Absolutely. We can incorporate your cherished pieces into the new design to create a space that feels both refreshed and personal to you."
    },
    {
      question: "What is the typical project timeline?",
      answer: "Timelines vary based on the scope of the project, but typically range from a few weeks for styling to several months for full renovations."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-container">
      <div className="faq-grid">
        
        {/* Left Column */}
        <div className="faq-left-col">
          <div className="faq-subtitle-wrapper">
            <img src={studioIcon} alt="Studio Icon" className="studio-icon" />
            <span className="faq-subtitle">CLIENT RESOURCES</span>
            <span className="faq-slashes">///</span>
          </div>
          
          <h2 className="faq-title">Got Questions?</h2>
          
          <p className="faq-description">
            We've answered some of the most<br />
            common questions about our services.
          </p>
          
          {/* Button Layout */}
          <div className="overlay-btn-content">
            <button className="arch-services-btn">
              <span>Start Your Journey</span>
              <div className="arch-services-btn-capsule">
                <span className="arch-services-btn-dot"></span>
                <div className="arch-services-btn-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Column (Accordion) */}
        <div className="faq-right-col">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question-row" 
                onClick={() => toggleFaq(index)}
              >
                <h3 className="faq-question">{item.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? '–' : '+'}
                </span>
              </div>
              
              <div className="faq-answer-wrapper">
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;