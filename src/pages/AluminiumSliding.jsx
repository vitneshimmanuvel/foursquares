import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { WindowGrid } from '../components/AnimatedWindows';
import LayerFinishScroll from '../components/LayerFinishScroll';
import './UpvcCasement.css'; // Reuses existing table & layout styles
import ProductCTA from '../components/ProductCTA';

import slidingWindow from '../assets/images/sliding_window.png';

const AluminiumSliding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = React.useState(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <main className="casement-detail-page">
      {/* Hero Section */}
      <section className="casement-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)` }}>
        <div className="casement-hero-overlay"></div>
        <div className="container casement-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            SLIDING ALUMINIUM SYSTEMS
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
            Our Sliding Aluminium Systems feature advanced structural engineering and heavy-duty tracks designed for monumental wall spans, penthouse balconies, and panoramic oceanfront view fronts. Backed by high-load nylon/steel tandem rollers and co-extruded weather interlocks, these systems ensure a silent, whisper-soft glide. Available in slim-profile minimalist casings, standard everyday sliders, and high-format heavy-duty profiles.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="casement-overview">
        <div className="container">
          <div className="section-title-center">
            <h2>SERIES SELECTION</h2>
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
                alt="Aluminium Sliding System Profile" 
                style={{ 
                  maxWidth: '85%', 
                  height: 'auto', 
                  borderRadius: '16px',
                  boxShadow: '0 20px 50px rgba(13, 110, 170, 0.15)',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedImage({
                  img: slidingWindow,
                  title: 'Aluminium Sliding System View',
                  desc: 'Modern slimline sliding system designed with internal wind-resistance reinforcement and metallic finishes.'
                })}
              />
            </motion.div>
            
            <motion.div 
              className="overview-advantages"
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Graf 45 Series</h2>
              <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '15px' }}>Our premier extra-heavy-duty sliding door profile. Supports glass panels up to 300kg, engineered with extra-wide multi-point security locks and concealed drainage.</p>

              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Graf 32 Series</h2>
              <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '15px' }}>The standard, mid-range everyday slider. Provides a balanced, sleek metallic outline with high weather tightness, perfect for balconies and high-frequency rooms.</p>

              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Graf 26 Series</h2>
              <p style={{ color: '#555', fontSize: '0.95rem' }}>Ultra-slimline minimal sliding window profile. Designed to minimize vertical frame intersections for maximum glass area, sunlight, and uninterrupted visual panoramic vistas.</p>
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
                  <td className="row-label">System Size (mm)</td>
                  <td>1200</td>
                  <td>1200</td>
                  <td>6000</td>
                  <td>4200</td>
                </tr>
                <tr>
                  <td className="row-label">Sash Size (mm)</td>
                  <td>600</td>
                  <td>600</td>
                  <td>1800</td>
                  <td>4200</td>
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
            <h2>ALUMINIUM SLIDING DESIGNS</h2>
            <div className="diamond-divider dark">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>
            <p style={{ textAlign: 'center', color: '#666', marginTop: '10px', marginBottom: '50px' }}>Hover over the windows to experience smooth sliding mechanics with brushed-aluminium casings.</p>
          </div>
          
          <div className="designs-grid-wrapper">
             <WindowGrid category="sliding" frameMaterial="aluminium" />
          </div>
        </div>
      </section>

      {/* Scroll-pinned Finish Animation Section */}
      <LayerFinishScroll />

      <ProductCTA 
        title="Interested in Premium Aluminium Sliding Systems?" 
        subtitle="Get a free site visit, anodized color customization, and personalized quote catalog." 
        btnText="Get Free Quote"
      />

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
    </main>
  );
};

export default AluminiumSliding;
