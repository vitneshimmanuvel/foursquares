import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { WindowGrid } from '../components/AnimatedWindows';
import LayerFinishScroll from '../components/LayerFinishScroll';
import './UpvcCasement.css'; // Reuses existing table & layout styles
import ProductCTA from '../components/ProductCTA';

import windowGrey from '../assets/images/window_color_grey.png';

const AluminiumCasement = () => {
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
            CASEMENT ALUMINIUM SYSTEMS
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
            Our Casement Aluminium Systems merge high structural integrity with elegant, ultra-slim outlines. Outfitted with hidden corner-hinges, premium friction stays, and advanced multi-point security gaskets, these openable windows and doors offer flawless watertightness and wind load deflection. Perfect for master bedrooms, luxury villas, and modular high-rise structural setups requiring maximum sealing and ventilation.
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
                src={windowGrey} 
                alt="Aluminium Casement System Profile" 
                style={{ 
                  maxWidth: '85%', 
                  height: 'auto', 
                  borderRadius: '16px',
                  boxShadow: '0 20px 50px rgba(13, 110, 170, 0.15)',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedImage({
                  img: windowGrey,
                  title: 'Aluminium Casement System View',
                  desc: 'High-performance anodized casement window showcasing concealed hinges and high-integrity sealing.'
                })}
              />
            </motion.div>
            
            <motion.div 
              className="overview-advantages"
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Livio Series</h2>
              <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '15px' }}>Our signature ultra-minimalist openable window system. Delivers flush glass sashes and hidden frame sightlines for clean lines and a contemporary aesthetic feel.</p>

              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Robus 40 Series</h2>
              <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '15px' }}>Heavy-duty robust openable doors and windows. Features premium thermal break chambers and reinforced thick profile walls capable of handling large 2.7m openable doors.</p>

              <h2 style={{ fontSize: '1.6rem', color: '#111', marginBottom: '10px' }}>Robus 30 Series</h2>
              <p style={{ color: '#555', fontSize: '0.95rem' }}>Traditional high-sealing casement profile. Standard classic design optimized for maximum sound insulation and superior watertight sealing on high-altitude facades.</p>
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
                  <td>600</td>
                  <td>600</td>
                  <td>2400</td>
                  <td>2700</td>
                </tr>
                <tr>
                  <td className="row-label">Sash Size (mm)</td>
                  <td>450</td>
                  <td>450</td>
                  <td>900</td>
                  <td>2700</td>
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
            <h2>ALUMINIUM CASEMENT DESIGNS</h2>
            <div className="diamond-divider dark">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>
            <p style={{ textAlign: 'center', color: '#666', marginTop: '10px', marginBottom: '50px' }}>Hover over the windows to experience how they open and swing with premium brushed-aluminium casings.</p>
          </div>
          
          <div className="designs-grid-wrapper">
             <WindowGrid category="casement" frameMaterial="aluminium" />
          </div>
        </div>
      </section>

      {/* Scroll-pinned Finish Animation Section */}
      <LayerFinishScroll />

      <ProductCTA 
        title="Interested in Premium Aluminium Casement Systems?" 
        subtitle="Get a free site visit, thermal performance consultation, and personalized quote catalog." 
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

export default AluminiumCasement;
