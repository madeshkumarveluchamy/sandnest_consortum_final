import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ConsultationForm.css';
import contactpage from '../../assets/contactpage.png'; 

const ConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [submitStatus, setSubmitStatus] = useState(null); 

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.serviceType) {
      // Branded feel-kaaga ithaiyum popup-a mathalam, or alert use pannalam
      alert("Please select a Service Type.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwb8aFMmC2NkgDgIL3gZPxOyneTi2Lsi4QvNp1qFdukEakvdOBZ3FKy4DxGeJHW9CLX/exec';

    const data = new FormData();
    data.append('name', formData.name);
    data.append('location', formData.location);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('message', formData.message);
    data.append('serviceType', formData.serviceType);

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: data,
        mode: 'no-cors' 
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        location: '',
        phone: '',
        email: '',
        message: '',
        serviceType: '',
        agreed: false
      });

      // 4 seconds kazhithu popup alert thanaageye maraiya
      setTimeout(() => {
        setSubmitStatus(null);
      }, 4000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');

      setTimeout(() => {
        setSubmitStatus(null);
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="consultation-wrapper position-relative d-flex align-items-center justify-content-center p-0 dark-section"
      style={{
        backgroundImage: `url(${contactpage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="bg-overlay position-absolute w-100 h-100"></div>

      {/* ========================================== */}
      {/* CUSTOM BRANDED POPUP ALERT OVERLAY         */}
      {/* ========================================== */}
      {submitStatus === 'success' && (
        <div className="custom-alert-overlay">
          <div className="custom-alert-box">
            <div className="custom-alert-icon">✓</div>
            <h4 className="custom-alert-title">Success</h4>
            <p className="custom-alert-text">Your details have been saved successfully. We will connect with you soon!</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="custom-alert-overlay">
          <div className="custom-alert-box">
            <div className="custom-alert-icon" style={{ background: '#dc3545' }}>!</div>
            <h4 className="custom-alert-title">Error</h4>
            <p className="custom-alert-text">Oops! Something went wrong. Please try again later.</p>
          </div>
        </div>
      )}
      {/* ========================================== */}

      <div className="container-fluid content-container position-relative z-1">
        <div className="row g-0 gx-lg-1 contact-columns">
          
          <div className="col-lg-5 d-flex flex-column justify-content-center p-4 p-md-0 mb-5 mb-lg-0 mt-5 mt-md-0">
            <div className='d-flex justify-content-center'>
              <div className="form-badge border border-dark text-dark fw-bold px-3 py-1 mb-3 d-inline-flex align-items-center gap-2">
                <span className="theme-dot"></span> 
                <span className="badge-text plus-font sdes">FORM</span>
              </div>
            </div>
            <h1 className="main-heading text-white text-uppercase m-0 lh-1 plus-font text-center">
              SCHEDULE A<br />
              EXPERTISE<br />
              CONSULTATION
            </h1>
          </div>

          <div className="col-lg-6 ms-auto">
            <div className="glass-form-container p-4 p-md-5 p-xxl-5 d-flex flex-column justify-content-center h-100">
              
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-1 ">
                
               {/* Itha unga form kulla replace pannunga */}
{['Name', 'Location', 'Phone', 'Email', 'Message'].map((field) => (
  <div className="position-relative mb-3 mt-2" key={field}>
    <input
      type={field === 'Email' ? 'email' : 'text'}
      name={field.toLowerCase()}
      id={field.toLowerCase()} /* Label link aaga ID mukkiyam */
      placeholder=" " /* CSS trick-kaga empty space kandippa thevai */
      value={formData[field.toLowerCase()]}
      onChange={handleChange}
      className="custom-input w-100 fw-bold pb-2 des"
      required={field !== 'Message'}
    />
    <label htmlFor={field.toLowerCase()} className="floating-label">
      {field.toUpperCase()}
    </label>
  </div>
))}

                <div className="mt-3">
                  <p className="service-title fw-bold mb-2 plus-font des">SERVICE TYPE</p>
                  <div className="d-flex flex-wrap gap-2">
                    {['Architecture', 'Interior Design', 'Renovation'].map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, serviceType: service }))}
                        className={`sdes service-btn ${formData.serviceType === service ? 'active' : ''}`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="d-flex align-items-center gap-2 mt-3 cursor-pointer terms-label">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="custom-circular-checkbox"
                    required
                  />
                  <span className="fw-bold text-dark text-sm plus-font sdes">
                    I agree to the processing of my personal data.
                  </span>
                </label>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="submit-btn text-white fw-bold py-3 px-4 mt-2 text-uppercase plus-font sdes"
                >
                  {isSubmitting ? 'Saving...' : 'Submit Project Details'}
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