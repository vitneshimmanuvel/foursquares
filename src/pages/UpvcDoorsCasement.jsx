import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { DoorGrid } from '../components/AnimatedDoors';
import './UpvcCasement.css'; // Reuses existing table & layout styling
import ProductCTA from '../components/ProductCTA';

import upvcDoorHero from '../assets/images/upvc_door_hero.png';
import upvcDoorCasement from '../assets/images/upvc_door_casement.png';

const UpvcDoorsCasement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [drawingsError, setDrawingsError] = React.useState(true);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <main className="casement-detail-page">
      {/* Hero Section */}
      <section className="casement-hero" style={{ backgroundImage: `url(${upvcDoorHero})` }}>
        <div className="casement-hero-overlay"></div>
        <div className="container casement-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            INVENTA CASEMENT UPVC DOORS
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
            Inventa Casement uPVC Doors provide inside and outside opening configurations based on space availability. Engineered to provide exceptional insulation against drafts, wind, and noise, our casement doors feature heavy-duty 3D hinges, high-security multi-point locking systems, and premium double gasket sealing. It is a spectacular choice for main balcony entrances, villa backyards, and high-frequency passage doors.
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
                src={upvcDoorCasement} 
                alt="Inventa Casement uPVC Door" 
                style={{ 
                  maxWidth: '85%', 
                  height: 'auto', 
                  borderRadius: '16px',
                  boxShadow: '0 20px 50px rgba(13, 110, 170, 0.15)',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedImage({
                  img: upvcDoorCasement,
                  title: 'Inventa Casement uPVC Door',
                  desc: 'Premium uPVC door system with heavy-duty 3D hinges, twin gasket seals, and multi-point locks.'
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
                <li>Heavy-duty 3D corner-welded hinges adjust vertically and horizontally for seamless action.</li>
                <li>Full double-seal perimeter gasket ensures maximum wind, water, and acoustic insulation.</li>
                <li>Accommodates single, double, and triple-glazing options for up to 32mm glass packages.</li>
                <li>Highly reinforced sash chambers with heavy-gauge galvanized steel to prevent warping.</li>
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
                src="/upvc_door_profile.png" 
                alt="uPVC Door Profile Cross-Section" 
                style={{ 
                  maxWidth: '280px', 
                  height: 'auto', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  border: '1px solid #e3eff5'
                }}
                onClick={() => setSelectedImage({
                  img: '/upvc_door_profile.png',
                  title: 'uPVC Door Profile Cross-Section',
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
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Designed with maximum space for reinforcement supporting large sized windows/doors.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Can be used in hall and bedroom allowing space saving and 66% opening.</li>
              </ul>

              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Advantages</h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Aesthetics are judiciously designed to ensure strength and shine over double bevel.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Designed with minimum air leakage to prevent dust, noise and thermal leakage.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Allows more light and better view with minimum vertical separator.</li>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Strength of window/door is enhanced with wind resistance booster bars for extra large sizes.</li>
              </ul>

              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Disadvantages</h2>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px', fontSize: '0.95rem', color: '#444' }}>Higher initial investment cost compared to cheap low-grade wood or local steel profiles (offset by 30+ year lifespan and zero maintenance costs).</li>
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
                  <td className="row-label">Door Frame Size</td>
                  <td>900</td>
                  <td>1800</td>
                  <td>2400</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <td className="row-label">Single Sash Size</td>
                  <td>450</td>
                  <td>900</td>
                  <td>950</td>
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
            <h2>CASEMENT UPVC DOORS DESIGNS</h2>
            <div className="diamond-divider dark">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>
            <p style={{ textAlign: 'center', color: '#666', marginTop: '10px', marginBottom: '50px' }}>Hover over the doors to experience how they open and swing.</p>
          </div>
          
          <div className="designs-grid-wrapper">
             <DoorGrid category="casement" />
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
              Detailed architectural drawings of our Casement uPVC Door profiles.
            </p>
          </div>
          
          <div className="drawings-display-container" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
            <div className="drawings-grid-fallback" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '40px', justifyItems: 'center' }}>
              {[
                { name: "Heavy Frame Profile", d: "M10,10 L10,90 L90,90 L90,70 L50,70 L50,10 Z" },
                { name: "Sash T-Profile", d: "M15,15 L85,15 L85,35 L65,35 L65,85 L45,85 L45,35 L15,35 Z" },
                { name: "Sash Z-Profile", d: "M10,15 L65,15 L65,55 L85,55 L85,85 L45,85 L45,55 L10,55 Z" },
                { name: "Double Bead", d: "M20,30 L80,30 Q60,80 20,80 Z" },
                { name: "Threshold Low-Step", d: "M10,80 L90,80 L90,90 L10,90 Z" },
                { name: "Threshold Rebated", d: "M10,50 L50,50 L50,95 L90,95 L90,10 L10,10 Z" }
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '120px', height: '120px', border: '1px solid #eee', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: '4px' }}>
                    <svg viewBox="0 0 100 100" width="70%" height="70%" xmlns="http://www.w3.org/2000/svg">
                      <path d={item.d} fill="none" stroke="#2c3e50" strokeWidth="2.5" />
                      <path d={item.d} fill="none" stroke="#3498db" strokeWidth="1.2" strokeDasharray="3 3" transform="scale(0.8) translate(12, 12)" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center', fontWeight: '600', textTransform: 'uppercase' }}>{item.name}</span>
                </div>
              ))}
            </div>
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
              <h3 style={{ margin: 0, color: '#333' }}>{selectedImage.title}</h3>
              <p style={{ color: '#666', marginTop: '10px' }}>{selectedImage.desc}</p>
            </div>
          </motion.div>
        </div>
      )}
      <ProductCTA 
        title="Interested in Premium uPVC Casement Doors?" 
        subtitle="Schedule a free site survey, choose your hinge/handle styles, and get a custom layout price estimate" 
        btnText="Get Free Quote"
      />
    </main>
  );
};

export default UpvcDoorsCasement;
