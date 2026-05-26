import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { WindowGrid } from '../components/AnimatedWindows';
import './UpvcCasement.css';
import ProductCTA from '../components/ProductCTA';

import upvcWindowBg from '../assets/images/upvc_window.png';

const UpvcSliding = () => {
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
            INVENTA SLIDING UPVC WINDOWS
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
            Inventa Sliding uPVC Windows features two (or more) horizontal sashes fitted with rollers at the bottom for swift sideways movement on tracks. Easier and faster to operate, they are great for air circulation and panoramic views. A popular choice for contemporary styled homes, sliders bring finesse to the room while satisfying all its fenestration requirements.
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
                src={slidingWindow} 
                alt="Inventa Sliding uPVC Window" 
                style={{ 
                  maxWidth: '85%', 
                  height: 'auto', 
                  borderRadius: '16px',
                  boxShadow: '0 20px 50px rgba(13, 110, 170, 0.15)',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedImage({
                  img: slidingWindow,
                  title: 'Inventa Sliding uPVC Window',
                  desc: 'Premium modern sliding window system designed for smooth, silent operations.'
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
                <li>Precision bottom rollers ensure seamless, silent, and effortless sliding.</li>
                <li>Space-conscious design that operates parallel to walls without obstructing curtains.</li>
                <li>Special high-performance interlocking profiles eliminate drafts, dust, and insects.</li>
                <li>Multi-track sliding frame (2-track, 3-track, or 4-track) for custom width options.</li>
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
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Perfect for balconies, wide patios, and master bedrooms with restricted space.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Excellent for offices and high-traffic spaces where ease of operation is essential.</li>
              </ul>

              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Advantages</h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Heavy-gauge galvanized steel reinforcement keeps sashes perfectly aligned over time.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Minimal vertical frame lines provide an uncompromised view and premium modern aesthetic.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Anti-lift blocks and high-security multi-lock hooks prevent forced entry.</li>
              </ul>

              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Disadvantages</h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Provides around 50% to 66% ventilation opening depending on track configurations (compared to 100% full swinging casements).</li>
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
                  <td>900</td>
                  <td>450</td>
                  <td>2400</td>
                  <td>2400</td>
                </tr>
                <tr>
                  <td className="row-label">Sash size</td>
                  <td>450</td>
                  <td>450</td>
                  <td>1200</td>
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
            <h2>SLIDING UPVC WINDOWS DESIGNS</h2>
            <div className="diamond-divider dark">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>
            <p style={{ textAlign: 'center', color: '#666', marginTop: '10px', marginBottom: '50px' }}>Hover over the windows to experience how they slide open.</p>
          </div>
          
          <div className="designs-grid-wrapper">
             <WindowGrid category="sliding" />
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
              Detailed breakdown of individual sliding profiles and tracks.
            </p>
          </div>

          <div className="profile-components-grid gallery-mode">
            {[
              { img: '/tech_1.png', title: 'Outer Frame' },
              { img: '/tech_2.png', title: 'Sliding Sash' },
              { img: '/tech_3.png', title: 'Interlock Profile' },
              { img: '/tech_4.png', title: 'Track Rail' }
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
        title="Interested in UPVC Sliding Windows?" 
        subtitle="Schedule a physical site measurement and receive a detailed track-configuration quotation" 
        btnText="Get Free Quote"
      />
    </main>
  );
};

export default UpvcSliding;
