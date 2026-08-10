import React, { useState } from 'react';
import './css/FaqSection.css'; // Make sure the path matches

const faqsData = [
  {
    question: 'What services does Sandnest Consortium provide?',
    answer: 'Specialized in eco friendly green buildings and vernacular architecture, creating nature inspired spaces that harmonize with local climate, culture, and context.' 
  },
  {
    question: 'What is your architectural style and design philosophy?',
    answer: 'Our philosophy revolves around sustainability, contextual relevance, and seamlessly integrating built environments with the natural landscape.'
  },
  {
    question: 'Do you specialize in custom farmhouse design?',
    answer: 'Yes, we have deep expertise in crafting bespoke farmhouses that reflect vernacular traditions while offering modern comfort and eco-friendly features.' 
  },
  {
    question: 'Where are your projects located, and do you work outside Tamil Nadu?',
    answer: 'While our primary base is in Coimbatore, we undertake prestigious projects across India, ensuring our signature quality and contextual design approach.' 
  },
  {
    question: 'How do we start a project or schedule an initial consultation?',
    answer: 'You can start by contacting us through our website or phone. We will arrange an initial consultation to understand your vision, requirements, and site details.' 
  },
];

const FaqsSection = () => {
  // 0 means the first question is open by default.
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="story-faq-wrapper font-sans">
      <div className="container-fluid story-faq-container">
        
        {/* Header Section */}
        <div className="story-faq-header">
          <h1 className="story-faq-title plus-font">
            Designing Together <br />
            Common Queries
          </h1>
          <p className="story-faq-sub plus-font des">
            Find clear answers to common inquiries regarding our design process, <br className="d-none d-md-block" />
            project management, and commitment to sustainable architecture.
          </p>
        </div>

        {/* FAQ List Accordion */}
        <div className="story-faq-list">
          {faqsData.map((item, index) => {
            const isActive = activeIndex === index;
            // Pad the index with a leading zero (e.g., '01', '02')
            const numberString = (index + 1).toString().padStart(2, '0');

            return (
              <div 
                key={index} 
                className={`story-faq-item ${isActive ? 'active' : ''}`}
              >
                {/* Left Number Tab */}
                <div className="story-faq-number-box">
                  {numberString}
                </div>

                {/* Right Content Area */}
                <div className="story-faq-content">
                  <div 
                    className="story-faq-question-row" 
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="story-faq-question plus-font des">{item.question}</h3>
                    
                    {/* Custom SVG Icons based on active state */}
                    <div className="story-faq-icon">
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Top Dot: Moves to center and fades out when active */}
                        <circle 
                          cx="12" 
                          cy={isActive ? "12" : "4"} 
                          r="2" 
                          fill="#1a1a1a" 
                          opacity={isActive ? 0 : 1}
                          style={{ transition: "all 0.3s ease-in-out" }}
                        />
                        
                        {/* Bottom Dot: Moves to center and fades out when active */}
                        <circle 
                          cx="12" 
                          cy={isActive ? "12" : "20"} 
                          r="2" 
                          fill="#1a1a1a" 
                          opacity={isActive ? 0 : 1}
                          style={{ transition: "all 0.3s ease-in-out" }}
                        />

                        {/* Fixed Left, Right, and Center Dots */}
                        <circle cx="4" cy="12" r="2" fill="#1a1a1a" />
                        <circle cx="20" cy="12" r="2" fill="#1a1a1a" />
                        <circle cx="12" cy="12" r="2" fill="#a86832" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Expandable Answer Section using Grid transition */}
                  <div className="story-faq-answer-wrapper">
                    <div className="story-faq-answer">
                      <div className="story-faq-answer-inner plus-font sdes">
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

export default FaqsSection;