import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ConsultationForm.css';
import contactpage from '../../assets/contactpage.png'; // Unga image path

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
    message: '',
    serviceType: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data to be sent to backend:", formData);
  };

  return (
    <div 
      className="consultation-wrapper position-relative d-flex align-items-center justify-content-center p-0 dark-section  "
      style={{
        backgroundImage: `url(${contactpage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay konjam light-ah maathiruken second image mari */}
      <div className="bg-overlay position-absolute w-100 h-100"></div>

      {/* Main Container */}
      <div className="container-fluid content-container position-relative z-1">
        <div className="row g-0 gx-lg-4 align-items-stretch h-100">
          
          {/* Left Section: Typography */}
          <div className="col-lg-5 d-flex flex-column justify-content-center p-4 p-md-0 mb-5 mb-lg-0 mt-5 mt-md-0">
            {/* Badge - Border add panni transparent aakiruken */}
            <div className='d-flex justify-content-center'><div className="form-badge border border-dark text-dark fw-bold px-3 py-1 mb-3 d-inline-flex align-items-center gap-2">
              <span className="theme-dot"></span> 
              <span className="badge-text plus-font sdes ">FORM</span>
            </div></div>
            {/* Heading - Font weight and spacing adjusted for 2nd image */}
            <h1 className="main-heading text-white text-uppercase m-0 lh-1 plus-font text-center ">
              SCHEDULE A<br />
              EXPERTISE<br />
              CONSULTATION
            </h1>
          </div>

          {/* Right Section: Glassmorphism Form */}
          <div className="col-lg-6 ms-auto">
            <div className="glass-form-container p-4 p-md-5 p-xxl-5 d-flex flex-column justify-content-center h-100">
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                
                {/* Input Fields */}
                {['Name', 'Location', 'Phone', 'Email', 'Message'].map((field) => (
                  <input
                    key={field}
                    type={field === 'Email' ? 'email' : 'text'}
                    name={field.toLowerCase()}
                    placeholder={field.toUpperCase()}
                    onChange={handleChange}
                    className="custom-input w-100 fw-bold pb-2 des"
                    required={field !== 'Message'}
                  />
                ))}

                {/* Service Type Selection */}
                <div className="mt-3">
                  <p className="service-title fw-bold mb-2 plus-font des">SERVICE TYPE</p>
                  <div className="d-flex flex-wrap gap-2">
                    {['Architecture', 'Interior Design', 'Renovation'].map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, serviceType: service }))}
                        className={`sdes service-btn ${
                          formData.serviceType === service ? 'active' : ''
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Terms Checkbox - Circular style */}
                <label className="d-flex align-items-center gap-2 mt-3 cursor-pointer terms-label">
                  <input
                    type="checkbox"
                    name="agreed"
                    onChange={handleChange}
                    className="custom-circular-checkbox"
                    required
                  />
                  <span className="fw-bold text-dark text-sm plus-font sdes">
                    I agree to the processing of my personal data.
                  </span>
                </label>

                {/* Submit Button */}
                <button type="submit" className="submit-btn text-white fw-bold py-3 px-4 mt-2 text-uppercase plus-font sdes">
                  Submit Project Details
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;