import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { WindowGrid } from '../components/AnimatedWindows';
import './UpvcCasement.css';
import ProductCTA from '../components/ProductCTA';

import upvcWindowBg from '../assets/images/upvc_window.png';
import casementWindowImg from '../assets/images/window_color_white.png'; // Fallback image for now

const UpvcCasement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [drawingsError, setDrawingsError] = React.useState(false);
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
            INVENTA CASEMENT UPVC WINDOWS
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
            Inventa Casement uPVC Windows are designed for more strength and better performance with twin gasket sealing. The gasket sealing coupled with multi-point lock ensures tight closure with no gaps for proper sealing, thermal and acoustic performance. Thicker Mullion profiles with reinforcements ensure sturdiness against heavy wind load. Our mullions, transoms with external strengthening bars ensures we can design large size windows with required wind load resistance.
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
                src={casementWindowImg} 
                alt="Inventa Casement uPVC Window" 
                style={{ 
                  maxWidth: '85%', 
                  height: 'auto', 
                  borderRadius: '16px',
                  boxShadow: '0 20px 50px rgba(13, 110, 170, 0.15)',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedImage({
                  img: casementWindowImg,
                  title: 'Inventa Casement uPVC Window',
                  desc: 'Premium uPVC window system with double weather gasket seals and multi-point locks.'
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
                <li>Specially designed multi-point locking system for robust home security.</li>
                <li>Fusion-welded corners and double weather seals ensure draft-free performance.</li>
                <li>Multi-chambered profile with thermal insulation reduces AC utility bills by 40%.</li>
                <li>High-acoustic design provides a soundproof barrier reducing outdoor noise up to 40dB.</li>
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
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Hall, bedrooms, and kitchen spaces facing busy, high-noise streets.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Large size combinations enabling better ventilation, maximum light, and grand panoramic views.</li>
              </ul>

              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Advantages</h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Extremely robust frame structure resistant to heavy wind loads and storms.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>High weatherproofing stops rainwater seepages, dust penetration, and draft leakages.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>100% lead-free, UV-resistant compound that retains shape and high-gloss shine for 30+ years.</li>
              </ul>

              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Disadvantages</h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Slightly higher initial investment cost than basic single-glazed aluminum profiles (fully offset by lifetime energy efficiency and zero paint/maintenance costs).</li>
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
                  <td>1350</td>
                  <td>900</td>
                  <td>4100</td>
                  <td>2400</td>
                </tr>
                <tr>
                  <td className="row-label">Sash size</td>
                  <td>450</td>
                  <td>450</td>
                  <td>850</td>
                  <td>1800</td>
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
            <h2>CASEMENT UPVC WINDOWS DESIGNS</h2>
            <div className="diamond-divider dark">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>
            <p style={{ textAlign: 'center', color: '#666', marginTop: '10px', marginBottom: '50px' }}>Hover over the windows to experience how they open and close.</p>
          </div>
          
          <div className="designs-grid-wrapper">
             <WindowGrid />
          </div>
        </div>
      </section>
      {/* Profile Drawings Section */}
      <section className="casement-profile-drawings" style={{ padding: '80px 0', backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <div className="section-title-center">
            <h2>TECHNICAL PROFILE SELECTION</h2>
            <div className="diamond-divider dark">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>
            <p style={{ textAlign: 'center', color: '#666', marginTop: '10px', marginBottom: '50px', fontSize: '1.1rem' }}>
              Detailed architectural drawings of our Casement uPVC Window profile series.
            </p>
          </div>
          
          <div className="drawings-display-container" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
            {!drawingsError ? (
              <img 
                src="/casement_profile_drawings.png" 
                alt="Casement Profile Technical Catalog"
                style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto', filter: 'brightness(1.02)' }}
                onError={() => setDrawingsError(true)}
              />
            ) : (
              <div className="drawings-grid-fallback" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '40px', justifyItems: 'center' }}>
                {[
                  { name: "Frame Profile", d: "M20,20 L20,80 L80,80 L80,60 L40,60 L40,20 Z" },
                  { name: "Mullion Profile", d: "M20,20 L80,20 L80,40 L60,40 L60,80 L40,80 L40,40 L20,40 Z" },
                  { name: "Sash Profile", d: "M20,20 L60,20 L60,50 L80,50 L80,80 L40,80 L40,50 L20,50 Z" },
                  { name: "Glazing Bead Single", d: "M30,30 L70,30 Q50,70 30,70 Z" },
                  { name: "Glazing Bead Double", d: "M20,30 L80,30 Q60,80 20,80 Z" },
                  { name: "T-Mullion", d: "M10,20 L90,20 L90,40 L60,40 L60,90 L40,90 L40,40 L10,40 Z" },
                  { name: "Z-Mullion", d: "M10,20 L60,20 L60,60 L90,60 L90,80 L40,80 L40,40 L10,40 Z" }
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '120px', height: '120px', border: '1px solid #eee', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: '4px' }}>
                      <svg viewBox="0 0 100 100" width="70%" height="70%" xmlns="http://www.w3.org/2000/svg">
                        <path d={item.d} fill="none" stroke="#555" strokeWidth="2" />
                        <path d={item.d} fill="none" stroke="#e74c3c" strokeWidth="1" strokeDasharray="3 3" transform="scale(0.8) translate(12, 12)" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center', fontWeight: '500', textTransform: 'uppercase' }}>{item.name}</span>
                  </div>
                ))}
              </div>
            )}
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
              Detailed breakdown of individual profiles and their technical characteristics.
            </p>
          </div>

          <div className="profile-components-grid gallery-mode">
            {[
              { img: '/tech_1.png', title: 'Technical Profile 1' },
              { img: '/tech_2.png', title: 'Technical Profile 2' },
              { img: '/tech_3.png', title: 'Technical Profile 3' },
              { img: '/tech_4.png', title: 'Technical Profile 4' },
              { img: '/tech_5.png', title: 'Technical Profile 5' },
              { img: '/tech_6.png', title: 'Technical Profile 6' },
              { img: '/tech_7.png', title: 'Technical Profile 7' },
              { img: '/tech_8.png', title: 'Technical Profile 8' }
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
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Profile'; }}
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
        title="Interested in UPVC Casement Windows?" 
        subtitle="Request detailed drawings, custom size parameters, and a free commercial quotation" 
        btnText="Get Free Quote"
      />
    </main>
  );
};

export default UpvcCasement;
