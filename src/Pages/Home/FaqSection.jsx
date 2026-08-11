import React, { useState } from 'react';
import './css/UniqueFaqSection.css'; // Unga css path ah update pannikonga

const UniqueFaqSection = ({ title, subtitle, faqsData, customClass = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`unique-faq-wrapper font-sans ${customClass}`}>
      <div className="container-fluid unique-faq-container">
        
        {/* Header Section (Dynamic ah mathiyachu) */}
        <div className="unique-faq-header">
          {title && (
            <h1 className="unique-faq-title plus-font">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="unique-faq-sub plus-font des">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ List Accordion */}
        <div className="unique-faq-list">
          {faqsData && faqsData.map((item, index) => {
            const isActive = activeIndex === index;
            const numberString = (index + 1).toString().padStart(2, '0');

            return (
              <div 
                key={index} 
                className={`unique-faq-item ${isActive ? 'active' : ''}`}
              >
                {/* Left Number Tab */}
                <div className="unique-faq-number-box">
                  {numberString}
                </div>

                {/* Right Content Area */}
                <div className="unique-faq-content">
                  <div 
                    className="unique-faq-question-row" 
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="unique-faq-question plus-font des">{item.question}</h3>
                    
                    {/* Icons */}
                    <div className="unique-faq-icon">
                      {isActive ? (
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4" cy="12" r="2" fill="#1a1a1a"/>
                          <circle cx="12" cy="12" r="2" fill="#a86832"/>
                          <circle cx="20" cy="12" r="2" fill="#1a1a1a"/>
                        </svg>
                      ) : (
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="4" r="2" fill="#1a1a1a"/>
                          <circle cx="12" cy="20" r="2" fill="#1a1a1a"/>
                          <circle cx="4" cy="12" r="2" fill="#1a1a1a"/>
                          <circle cx="20" cy="12" r="2" fill="#1a1a1a"/>
                          <circle cx="12" cy="12" r="2" fill="#a86832"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  {/* Expandable Answer Section */}
                  <div className="unique-faq-answer-wrapper">
                    <div className="unique-faq-answer">
                      <div className="unique-faq-answer-inner plus-font sdes">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UniqueFaqSection;