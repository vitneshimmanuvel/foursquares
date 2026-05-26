import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { DoorGrid } from '../components/AnimatedDoors';
import './UpvcCasement.css'; // Reuses existing layout styling
import ProductCTA from '../components/ProductCTA';

import upvcDoorHero from '../assets/images/upvc_door_hero.png';
import upvcDoorSlideFold from '../assets/images/upvc_door_slide_fold.png';

const UpvcDoorsSlideFold = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            INVENTA SLIDE & FOLD UPVC DOORS
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
            Inventa Slide & Fold uPVC Doors (bi-fold doors) deliver unmatched architectural elegance, enabling you to fold and slide individual door panels completely to one side. When fully opened, the panels pack tightly against the wall, clearing up to 95% of the opening width. Perfect for poolsides, wide patio decks, and spacious terraces, our slide & fold doors effortlessly merge your indoor and outdoor living environments into one continuous luxury space.
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
                src={upvcDoorSlideFold} 
                alt="Inventa Slide & Fold uPVC Door" 
                style={{ 
                  maxWidth: '85%', 
                  height: 'auto', 
                  borderRadius: '16px',
                  boxShadow: '0 20px 50px rgba(13, 110, 170, 0.15)',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedImage({
                  img: upvcDoorSlideFold,
                  title: 'Inventa Slide & Fold uPVC Door',
                  desc: 'Premium accordion bi-folding door system showcasing heavy-duty folding roller hardware.'
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
                <li>Accordion folding design clears nearly the entire doorway width for unmatched spaciousness.</li>
                <li>Heavy-duty intermediate guides and top rollers ensure fluid, non-stick multi-panel folding.</li>
                <li>Rigid galvanized steel reinforcement bars ensure superb stability against strong winds.</li>
                <li>Excellent thermal insulation and air weatherproofing with heavy-duty EPDM dual gaskets.</li>
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
                  <td>1500</td>
                  <td>1800</td>
                  <td>6000</td>
                  <td>2700</td>
                </tr>
                <tr>
                  <td className="row-label">Single Sash Size</td>
                  <td>500</td>
                  <td>1500</td>
                  <td>850</td>
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
            <h2>SLIDE & FOLD UPVC DOORS DESIGNS</h2>
            <div className="diamond-divider dark">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>
            <p style={{ textAlign: 'center', color: '#666', marginTop: '10px', marginBottom: '50px' }}>Hover over the doors to experience how they slide, accordion fold, and open completely.</p>
          </div>
          
          <div className="designs-grid-wrapper">
             <DoorGrid category="slide-fold" />
          </div>
        </div>
      </section>

      {/* Profile Drawings Section */}
      <section className="casement-profile-drawings" style={{ padding: '80px 0', backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <div className="section-title-center">
            <h2>TECHNICAL HARDWARE DETAIL</h2>
            <div className="diamond-divider dark">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>
            <p style={{ textAlign: 'center', color: '#666', marginTop: '10px', marginBottom: '50px', fontSize: '1.1rem' }}>
              Detailed architectural drawings of our Slide & Fold uPVC Door hardware and tracks.
            </p>
          </div>
          
          <div className="drawings-display-container" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
            <div className="drawings-grid-fallback" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '40px', justifyItems: 'center' }}>
              {[
                { name: "Top Roller Track", d: "M20,10 H80 V40 H60 V80 H80 V90 H20 V80 H40 V40 H20 Z" },
                { name: "Bottom Guide Rail", d: "M10,80 H90 V95 H10 Z M50,15 L50,80" },
                { name: "Intermediate Sash Profile", d: "M20,15 H80 V85 H20 Z M40,15 L40,85 M60,15 L60,85" },
                { name: "Folding Hinge Set", d: "M40,20 Q60,10 80,20 V80 Q60,90 40,80 Z M15,50 H40" },
                { name: "Intermediate Handle", d: "M40,30 L60,30 L60,70 L40,70 Z M60,40 L85,40" }
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '120px', height: '120px', border: '1px solid #eee', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: '4px' }}>
                    <svg viewBox="0 0 100 100" width="70%" height="70%" xmlns="http://www.w3.org/2000/svg">
                      <path d={item.d} fill="none" stroke="#2c3e50" strokeWidth="2.5" />
                      <path d={item.d} fill="none" stroke="#27ae60" strokeWidth="1.2" strokeDasharray="3 3" transform="scale(0.8) translate(12, 12)" />
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
        title="Interested in Premium uPVC Slide & Fold Doors?" 
        subtitle="Schedule a free site assessment and select dynamic multi-panel accordion configurations" 
        btnText="Get Free Quote"
      />
    </main>
  );
};

export default UpvcDoorsSlideFold;
