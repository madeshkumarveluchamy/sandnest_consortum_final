import React from 'react';
import './css/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper font-sans">
      <div className="contact-page-layout">
        
        {/* Main Contact Content */}
        <div className="row">
          
          {/* Left Column: Big Title & Subtitle */}
          <div className="col-12 col-lg-5 mb-5 mb-lg-0">
            <h1 className="contact-page-title plus-font">CONTACT</h1>
            <p className="contact-page-subtitle plus-font sdes">
              Have a project in mind? Connect with our design team today to turn your vision into a blueprint.
            </p>
          </div>

          {/* Right Column: Contact Details */}
          <div className="col-12 col-lg-7">
            
            {/* Email Section */}
            <div className="contact-page-info-row">
              <div className="contact-page-info-label plus-font stit">EMAIL</div>
              <div className="contact-page-info-content">
                <div className="contact-page-badge plus-font sdes">
                  <span className="contact-page-dot"></span> HELP DESK
                </div>
                <div className="contact-page-value plus-font fw-bold des">SANDNESTARCHITECTS@GMAIL.COM</div>
              </div>
            </div>

            {/* Phone Section */}
            <div className="contact-page-info-row">
              <div className="contact-page-info-label plus-font stit">PHONE</div>
              <div className="contact-page-info-content">
                <div className="contact-page-badge plus-font sdes">
                  <span className="contact-page-dot"></span> MON - SAT
                </div>
                <div className="contact-page-value plus-font fw-bold des">+91 804 809 66 89</div>
              </div>
            </div>

            {/* Address Section with LIVE MAP */}
            <div className="contact-page-info-row border-bottom-0 pb-0">
              <div className="contact-page-info-label plus-font stit">ADDRESS</div>
              <div className="contact-page-info-content">
                <div className="contact-page-badge plus-font sdes">
                  <span className="contact-page-dot"></span> LOCATION
                </div>
                <div className="contact-page-value addresss-text plus-font text-black fw-bold sdes">
                  NO.385/2, SANDNEST CONSORTIUM, <br />
                  ROAD INSIDE GV HAPPY NEST ARCH INSIDE DEAD <br />
                  END GATE, JOTHINAGAR, KALAMPALAYAM, <br />
                  COIMBATORE-641010, COIMBATORE
                </div>
                
                {/* LIVE GOOGLE MAPS IFRAME */}
                <iframe 
                  src="https://maps.google.com/maps?q=Kalampalayam,+Coimbatore,+Tamil+Nadu+641010&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  className="contact-page-map-iframe mt-4 shadow-sm"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sandnest Consortium Location"
                ></iframe>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;