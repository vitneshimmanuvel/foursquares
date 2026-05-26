import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { WindowGrid } from '../components/AnimatedWindows';
import './UpvcCasement.css';
import ProductCTA from '../components/ProductCTA';

import upvcWindowBg from '../assets/images/upvc_window.png';
import windowWhite from '../assets/images/window_color_white.png';

const UpvcTiltTurn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = React.useState(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <main className="casement-detail-page">
      {/* Hero Section */}
      <section className="casement-hero" style={{ backgroundImage: `url(${upvcWindowBg})` }}>
        <div className="casement-hero-overlay"></div>
        <div className="container casement-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            INVENTA TILT & TURN UPVC WINDOWS
          </motion.h1>
          <div className="diamond-divider">
            <div className="line"></div>
            <div className="diamond"></div>
            <div className="line"></div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="casement-intro-text">
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Inventa Tilt & Turn uPVC Windows bring a dual-functioning mechanism that tilts inwards at the top for ventilation or opens inwards from the hinges at the side. Tilt & turn windows provide superior weatherproofing, excellent security features, and effortless maintenance. Ideal for locations requiring versatile air circulation without compromising safety.
          </motion.p>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="casement-overview" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="section-title-center">
            <h2>PRODUCT SPECIFICATIONS & FEATURES</h2>
            <div className="diamond-divider dark">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>
          </div>

          <div className="overview-grid-simple">
            <motion.div 
              className="overview-image-container"
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <img 
                src={windowWhite} 
                alt="Inventa Tilt & Turn uPVC Window" 
                style={{ 
                  maxWidth: '85%', 
                  height: 'auto', 
                  borderRadius: '16px',
                  boxShadow: '0 20px 50px rgba(13, 110, 170, 0.15)',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedImage({
                  img: windowWhite,
                  title: 'Inventa Tilt & Turn uPVC Window',
                  desc: 'Premium dual-functioning uPVC window system featuring both top tilting and side opening.'
                })}
              />
            </motion.div>
            
            <motion.div 
              className="overview-advantages"
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <h2>Key Features</h2>
              <ul>
                <li>Dual-action handle: turn to swing window fully inwards, tilt to vent at the top.</li>
                <li>Provides highly secure, continuous fresh-air ventilation in "tilt" mode without risk of intrusion.</li>
                <li>Multi-point locking gear around the entire sash perimeter ensures supreme airtightness.</li>
                <li>Heavy-duty corner hinges support heavy double/triple acoustic glazing packages.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Profile Section */}
      <section className="casement-overview" style={{ backgroundColor: '#fafcfd', paddingTop: '60px', paddingBottom: '60px', borderTop: '1px solid #eef5f7', borderBottom: '1px solid #eef5f7' }}>
        <div className="container">
          <div className="section-title-center" style={{ marginBottom: '40px' }}>
            <h2>TECHNICAL PROFILE OVERVIEW</h2>
            <div className="diamond-divider dark">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>
          </div>

          <div className="overview-grid-simple">
            <motion.div 
              className="overview-image-container"
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
            >
              <img 
                src="/casement_profile.png" 
                alt="uPVC Window Profile Cross-Section" 
                style={{ 
                  maxWidth: '280px', 
                  height: 'auto', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  border: '1px solid #e3eff5'
                }}
                onClick={() => setSelectedImage({
                  img: '/casement_profile.png',
                  title: 'uPVC Window Profile Cross-Section',
                  desc: 'High-end 3D cross-section showing the advanced multi-chamber design and double-glazing assembly.'
                })}
              />
            </motion.div>
            
            <motion.div 
              className="overview-advantages"
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Application</h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>High-rise luxury residential apartments requiring safe, easy cleaning from the inside.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Commercial and educational buildings demanding superior sound suppression and climate control.</li>
              </ul>

              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Advantages</h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Maximum ease of maintenance since the outer glass can be entirely cleaned from within the room.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Unmatched airtightness and rain-tightness among all operable window styles.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Highly secure locking points that exceed international anti-burglary standards.</li>
              </ul>

              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Disadvantages</h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Slightly more complex mechanical hardware operations requiring clear instructions for first-time users.</li>
              </ul>
            </motion.div>
          </div>

          {/* Dimensions Table */}
          <motion.div 
            className="dimensions-table-wrapper"
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <table className="prominance-table">
              <thead>
                <tr>
                  <th rowSpan="2" className="corner-label"></th>
                  <th colSpan="2" className="header-main">Minimum</th>
                  <th colSpan="2" className="header-main">Maximum</th>
                </tr>
                <tr className="header-sub">
                  <th>Width</th>
                  <th>Height</th>
                  <th>Width</th>
                  <th>Height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-label">Window Size</td>
                  <td>600</td>
                  <td>600</td>
                  <td>1500</td>
                  <td>2400</td>
                </tr>
                <tr>
                  <td className="row-label">Sash size</td>
                  <td>600</td>
                  <td>600</td>
                  <td>1500</td>
                  <td>2400</td>
                </tr>
              </tbody>
            </table>
            <p className="table-disclaimer">All dimensions are in mm</p>
          </motion.div>

        </div>
      </section>

      {/* Designs Section */}
      <section className="casement-designs" style={{ backgroundColor: '#f9fcfd', padding: '80px 0' }}>
        <div className="container">
          <div className="section-title-center">
            <h2>TILT & TURN UPVC WINDOWS DESIGNS</h2>
            <div className="diamond-divider dark">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>
            <p style={{ textAlign: 'center', color: '#666', marginTop: '10px', marginBottom: '50px' }}>Hover over the windows to experience how they tilt inwards.</p>
          </div>
          
          <div className="designs-grid-wrapper">
             <WindowGrid category="tilt-turn" />
          </div>
        </div>
      </section>

      {/* Core Profile Breakdown Section */}
      <section className="profile-breakdown-section section-linen" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-title-center">
            <h2>CORE PROFILE BREAKDOWN</h2>
            <div className="diamond-divider dark">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>
            <p style={{ textAlign: 'center', color: '#666', marginTop: '10px', marginBottom: '50px', fontSize: '1.1rem' }}>
              Detailed breakdown of individual tilt & turn profiles and hardware.
            </p>
          </div>

          <div className="profile-components-grid gallery-mode">
            {[
              { img: '/tech_1.png', title: 'Frame Profile' },
              { img: '/tech_2.png', title: 'Sash Profile' },
              { img: '/tech_3.png', title: 'Hardware Mechanism' },
              { img: '/tech_4.png', title: 'Glazing Bead' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="profile-component-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  background: '#fff',
                  padding: '15px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  border: '1px solid #f0f0f0',
                  textAlign: 'center',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '220px'
                }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="profile-component-img-container" style={{ 
                  height: '180px', 
                  width: '100%',
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  background: '#fcfcfc',
                  borderRadius: '12px',
                  padding: '10px',
                  border: '1px solid #f8f8f8'
                }}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ 
                      maxHeight: '100%', 
                      maxWidth: '100%', 
                      objectFit: 'contain',
                      filter: 'brightness(1.05) contrast(1.05)' 
                    }}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=' + item.title.replace(/ /g, '+'); }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeModal}>
          <motion.div 
            className="lightbox-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeModal}>&times;</button>
            <div className="lightbox-image-container" style={{ background: '#fff', padding: '20px' }}>
              <img src={selectedImage.img} alt={selectedImage.title} style={{ maxHeight: '80vh' }} />
            </div>
            <div className="lightbox-info" style={{ textAlign: 'center', padding: '20px' }}>
              <h3 style={{ margin: 0, color: '#333' }}>Technical Profile Detail</h3>
            </div>
          </motion.div>
        </div>
      )}
      <ProductCTA 
        title="Interested in UPVC Tilt & Turn Windows?" 
        subtitle="Consult with our design experts for high-rise safety configurations and wind pressure ratings" 
        btnText="Get Free Quote"
      />
    </main>
  );
};

export default UpvcTiltTurn;
