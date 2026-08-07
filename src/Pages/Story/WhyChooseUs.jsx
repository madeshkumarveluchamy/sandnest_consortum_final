import React from 'react';
import './css/WhyChooseUs.css';
import stairsImage from '../../assets/whychooseus.png';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "1. Sustainable & Vernacular Focus",
      desc: "Specialized in eco friendly green buildings and vernacular architecture, creating nature inspired spaces that harmonize with local climate, culture, and context."
    },
    {
      id: 2,
      title: "2. Award Winning Leadership",
      desc: "Specialized in eco friendly green buildings and vernacular architecture, creating nature inspired spaces that harmonize with local climate, culture, and context."
    },
    {
      id: 3,
      title: "3. End-to-End Multidisciplinary Design",
      desc: "Specialized in eco friendly green buildings and vernacular architecture, creating nature inspired spaces that harmonize with local climate, culture, and context."
    },
    {
      id: 4,
      title: "5. Signature Farmhouse & Sanctuary Specialization", 
      desc: "Specialized in eco friendly green buildings and vernacular architecture, creating nature inspired spaces that harmonize with local climate, culture, and context."
    }
  ];

  return (
    <section className="choose-us-wrapper font-sans">
      <div className="container-fluid choose-us-container container">
        
        {/* 'align-items-stretch' makes image exactly as tall as the content */}
        <div className="row align-items-stretch">
          
          {/* Left Side: Content Column */}
          <div className="col-12 col-md-6 choose-us-content-col mb-5 mb-md-0">
            
            <div className="choose-us-header-block mb-4">
              <div className="choose-us-number plus-font stit">02</div>
              <div className="choose-us-title plus-font tit">Why Choose Us</div>
            </div>

            <p className="choose-us-intro mb-4 plus-font des">
              From initial concept to turnkey execution, we combine sustainable
              vernacular architecture with technical precision to sculpt spaces that
              elevate everyday life.
            </p>

            <div className="choose-us-feature-list">
              {features.map((feature) => (
                <div key={feature.id} className="choose-us-feature-item">
                  <h4 className="choose-us-feature-title plus-font stit">{feature.title}</h4>
                  <p className="choose-us-feature-desc mb-0 plus-font des">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side: Image Column */}
          <div className="col-12 col-md-6 choose-us-image-col ">
            <img 
              src={stairsImage} 
              alt="Modern staircase interior" 
              className="choose-us-img shadow-sm" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;