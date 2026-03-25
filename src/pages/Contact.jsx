import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaCheck, FaUser, FaHome, FaWindowMaximize, FaComment } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    windowType: '',
    rooms: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter valid 10-digit phone';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: '', email: '', phone: '', propertyType: '', windowType: '', rooms: '', message: '' });
    }
  };

  const contactInfo = [
    { icon: <FaPhone />, title: 'Phone', value: '+91 98765 43210', link: 'tel:+919876543210', className: 'phone-icon' },
    { icon: <FaWhatsapp />, title: 'WhatsApp', value: '+91 98765 43210', link: 'https://wa.me/919876543210', className: 'whatsapp-icon' },
    { icon: <FaEnvelope />, title: 'Email', value: 'info@foursquare.com', link: 'mailto:info@foursquare.com', className: 'email-icon' },
    { icon: <FaClock />, title: 'Working Hours', value: 'Mon - Sat: 9 AM - 7 PM', link: null, className: 'clock-icon' },
  ];

  return (
    <main className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Get In Touch</span>
            <h1>Contact <span className="text-gradient">Us</span></h1>
            <p>Let's discuss your window requirements and get you a free quote</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-header">
                <h3>Request a Free Quote</h3>
                <p>Fill out the form and our team will contact you within 24 hours.</p>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="success-icon">
                    <FaCheck />
                  </div>
                  <h4>Thank You!</h4>
                  <p>Your request has been submitted successfully. We'll contact you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Personal Details */}
                  <div className="form-section">
                    <h4 className="form-section-title">
                      <FaUser />
                      Personal Details
                    </h4>
                    <div className="form-row">
                      <div className={`form-group ${errors.name ? 'error' : ''}`}>
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                      </div>
                      <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                        />
                        {errors.phone && <span className="error-text">{errors.phone}</span>}
                      </div>
                    </div>
                    <div className={`form-group ${errors.email ? 'error' : ''}`}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com (optional)"
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="form-section">
                    <h4 className="form-section-title">
                      <FaHome />
                      Property Details
                    </h4>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="propertyType">Property Type</label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                        >
                          <option value="">Select property type</option>
                          <option value="1bhk">1 BHK Apartment</option>
                          <option value="2bhk">2 BHK Apartment</option>
                          <option value="3bhk">3 BHK Apartment</option>
                          <option value="villa">Villa / Bungalow</option>
                          <option value="commercial">Commercial Space</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="rooms">Number of Windows</label>
                        <select
                          id="rooms"
                          name="rooms"
                          value={formData.rooms}
                          onChange={handleChange}
                        >
                          <option value="">Select approximate count</option>
                          <option value="1-5">1 - 5 Windows</option>
                          <option value="6-10">6 - 10 Windows</option>
                          <option value="11-20">11 - 20 Windows</option>
                          <option value="20+">More than 20</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Window Preference */}
                  <div className="form-section">
                    <h4 className="form-section-title">
                      <FaWindowMaximize />
                      Window Preference
                    </h4>
                    <div className="window-type-selector">
                      {['UPVC Windows', 'Aluminium Windows', 'Sliding Doors', 'Not Sure'].map((type) => (
                        <label
                          key={type}
                          className={`window-type-option ${formData.windowType === type ? 'selected' : ''}`}
                        >
                          <input
                            type="radio"
                            name="windowType"
                            value={type}
                            checked={formData.windowType === type}
                            onChange={handleChange}
                          />
                          <span className="option-label">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-section">
                    <h4 className="form-section-title">
                      <FaComment />
                      Additional Details
                    </h4>
                    <div className="form-group">
                      <label htmlFor="message">Message (Optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Tell us more about your requirements, preferred timeline, budget range, etc."
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Submit Request
                    <FaCheck />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              className="contact-sidebar"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="info-cards">
                {contactInfo.map((item, index) => (
                  <div key={index} className="info-card">
                    {item.link ? (
                      <a
                        href={item.link}
                        className="info-card-link"
                        aria-label={item.title === 'WhatsApp' ? 'WhatsApp' : undefined}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className={`info-icon ${item.className}`}>{item.icon}</div>
                        <div className="info-text">
                          <h4>{item.title}</h4>
                          <p>{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="info-card-content">
                        <div className={`info-icon ${item.className}`}>{item.icon}</div>
                        <div className="info-text">
                          <h4>{item.title}</h4>
                          <p>{item.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Location Card */}
              <div className="location-card">
                <div className="location-icon map-icon">
                  <FaMapMarkerAlt />
                </div>
                <h4>Visit Our Showroom</h4>
                <p>123 Design Street, Andheri West</p>
                <p>Mumbai, Maharashtra 400001</p>
                <a href="#" className="directions-link">Get Directions →</a>
              </div>

              {/* Quick Contact */}
              <div className="quick-contact">
                <p>Need immediate assistance?</p>
                <a href="tel:+919876543210" className="btn btn-primary">
                  <FaPhone />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
