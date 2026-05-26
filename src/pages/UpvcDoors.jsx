import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight, FaSun, FaVolumeOff, FaLeaf, FaShieldAlt, FaWind, FaTools } from 'react-icons/fa';
import './ProductPage.css';
import ProductCTA from '../components/ProductCTA';

import upvcDoorHero from '../assets/images/upvc_door_hero.png';
import upvcDoorCasement from '../assets/images/upvc_door_casement.png';
import upvcDoorSliding from '../assets/images/upvc_door_sliding.png';
import upvcDoorSlideFold from '../assets/images/upvc_door_slide_fold.png';

const UpvcDoors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: 'UPVC Casement Doors',
      subtitle: 'Classic & Elegant',
      image: upvcDoorCasement,
      description: 'Premium UPVC casement doors with German engineering. Features twin-gasket double sealing and heavy-duty 3D hinges, perfect for balconies, patios, and luxury entryways.',
      features: [
        'Heavy-duty 3D hinges supporting weight up to 120kg per sash',
        'Twin gasket sealing coupled with multi-point locks for ultimate sound insulation',
        'Supports large glass panes for grand unobstructed outdoor views',
        'Reinforced with galvanized steel for top-tier home security',
        'Available in multiple premium wood grain and contemporary finishes'
      ],
      path: '/products/upvc-doors/casement'
    },
    {
      title: 'UPVC Sliding Doors',
      subtitle: 'Panoramic & Space Saving',
      image: upvcDoorSliding,
      description: 'Smooth gliding UPVC sliding doors designed to maximize your viewing area. Perfect for space-conscious rooms opening onto gardens or terraces.',
      features: [
        'High-quality tandem rollers for a silent, whisper-soft glide',
        'Multi-track and multi-panel options (2, 3, or 4 panels)',
        'Heavy interlocking system preventing dust and rain infiltration',
        'Provision for high-durability bug screen meshes',
        'Extremely wind-resistant profiles ideal for high-rise balconies'
      ],
      path: '/products/upvc-doors/sliding'
    },
    {
      title: 'UPVC Slide & Fold Doors',
      subtitle: 'Grand Architectural Fusion',
      image: upvcDoorSlideFold,
      description: 'Accordion-style folding doors that slide and fold completely to one side. Ideal for luxurious villas and penthouses to merge indoor living areas with patios.',
      features: [
        'Clears up to 95% of the opening width when fully folded',
        'Premium heavy-duty track guides ensuring smooth multi-panel folding',
        'High structural load resistance with internal steel reinforcement',
        'Virtually zero maintenance with robust weather seals',
        'Sophisticated luxury locking handles on intermediate sashes'
      ],
      path: '/products/upvc-doors/slide-fold'
    }
  ];

  const benefits = [
    { icon: <FaSun />, title: 'Thermal Comfort', desc: 'Reduce heat gain and lower your energy costs' },
    { icon: <FaVolumeOff />, title: 'Acoustic Barrier', desc: 'Block street noises by up to 40 decibels' },
    { icon: <FaLeaf />, title: 'Lead-Free Profiles', desc: '100% eco-friendly, fully recyclable materials' },
    { icon: <FaShieldAlt />, title: '10 Year Warranty', desc: 'Complete peace of mind on profiles and glass' },
    { icon: <FaWind />, title: 'High Wind Resistance', desc: 'Sturdy reinforcement against storms and monsoon rains' },
    { icon: <FaTools />, title: 'Zero Paint/Polishing', desc: 'Stain-resistant and extremely easy to wipe clean' }
  ];

  return (
    <main className="product-page">
      {/* Hero Section */}
      <section className="product-hero" style={{ backgroundImage: `url(${upvcDoorHero})` }}>
        <div className="product-hero-overlay"></div>
        <div className="container product-hero-content">
          <motion.span 
            className="section-badge" 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            UPVC DOORS
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Premium UPVC <span className="text-gradient">Doors</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            German-engineered, steel-reinforced uPVC doors that combine superior energy efficiency, robust security, and spectacular panoramic views.
          </motion.p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="product-section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Engineering Excellence</span>
            <h2>Why Choose <span className="text-gradient">uPVC Doors</span>?</h2>
          </div>
          <div className="benefits-grid-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="benefit-card-item"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="benefit-icon-box">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Sections */}
      {products.map((product, index) => (
        <section key={index} className={`product-section ${index % 2 === 0 ? 'section-warm' : 'section-linen'}`}>
          <div className="container">
            <div className={`product-intro-grid ${index % 2 !== 0 ? 'reverse' : ''}`}>
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    className="product-intro-image"
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <img src={product.image} alt={product.title} style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                  </motion.div>
                  <motion.div
                    className="product-intro-content"
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <span className="section-badge">{product.subtitle}</span>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    
                    <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px', color: '#333' }}>Advantages</h3>
                    <ul className="feature-list">
                      {product.features.map((f, i) => (
                        <li key={i}><FaCheck className="check-icon" /> {f}</li>
                      ))}
                    </ul>

                    <div style={{ marginTop: '30px' }}>
                      <Link to={product.path} className="btn btn-primary" style={{ padding: '12px 28px', display: 'inline-flex', alignItems: 'center' }}>
                        Explore Designs & Drawing details
                        <FaArrowRight style={{ marginLeft: '10px' }} />
                      </Link>
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className="product-intro-content"
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <span className="section-badge">{product.subtitle}</span>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px', color: '#333' }}>Advantages</h3>
                    <ul className="feature-list">
                      {product.features.map((f, i) => (
                        <li key={i}><FaCheck className="check-icon" /> {f}</li>
                      ))}
                    </ul>

                    <div style={{ marginTop: '30px' }}>
                      <Link to={product.path} className="btn btn-primary" style={{ padding: '12px 28px', display: 'inline-flex', alignItems: 'center' }}>
                        Explore Designs & Drawing details
                        <FaArrowRight style={{ marginLeft: '10px' }} />
                      </Link>
                    </div>
                  </motion.div>
                  <motion.div
                    className="product-intro-image"
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <img src={product.image} alt={product.title} style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Certifications Section */}
      <section className="product-section section-warm" style={{ padding: '80px 0', borderTop: '1px solid #eef5f7' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-badge" style={{ backgroundColor: '#eef5f7', color: '#007bff' }}>GLOBAL QUALITY STANDARDS</span>
            <h2>GERMAN, ITALIAN & EUROPEAN <span className="text-gradient">CERTIFICATIONS</span></h2>
            <p style={{ maxWidth: '800px', margin: '15px auto 0', color: '#666', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Our profiles are engineered to match the highest international quality benchmarks. Certified by premier European laboratories for formulation, mechanical tolerance, and severe tropical weather endurance.
            </p>
          </div>

          <div className="benefits-grid-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              {
                badge: '🇩🇪 GERMAN',
                lab: 'SKZ testing (Germany)',
                title: 'SKZ Certification',
                desc: 'Certified for premium formulation, heavy impact load, mechanical properties, and dimensional tolerances under severe stress.'
              },
              {
                badge: '🇩🇪 GERMAN',
                lab: 'ift Rosenheim (Germany)',
                title: 'ift Rosenheim Standard',
                desc: 'Validated for exceptional weatherability, air permeability (Class 4), watertightness (Class 9A), and wind load resistance (Class C5).'
              },
              {
                badge: '🇮🇹 ITALIAN',
                lab: 'IIP SRL (Italy)',
                title: 'IIP Quality Seal',
                desc: 'Accredited by the Italian Institute of Industrial Plastics for raw material consistency, lead-free compounding, and high mechanical elasticity.'
              },
              {
                badge: '🇪🇺 EUROPEAN',
                lab: 'CE Conformity',
                title: 'CE Certified Profiles',
                desc: 'Fully compliant with European Economic Area (EEA) safety, health, and environmental protection standards (EN 12608).'
              },
              {
                badge: '🏆 WEATHERPROOF',
                lab: 'Severe Tropical Testing',
                title: '25,000 Hours Xenon Arc',
                desc: 'Certified to withstand maximum UV radiation. Extruded with high titanium dioxide (TiO2) content to prevent yellowing or cracking.'
              },
              {
                badge: '🌍 MANAGEMENT',
                lab: 'ISO Global Standards',
                title: 'ISO 9001 & ISO 14001',
                desc: 'Certified Quality Management System (QMS) and Environmental Management System (EMS) ensuring sustainable, zero-waste manufacturing.'
              }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                className="benefit-card-item"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                style={{
                  background: '#fff',
                  padding: '30px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  border: '1px solid #f0f5f8',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ 
                  position: 'absolute', 
                  top: '15px', 
                  right: '15px', 
                  fontSize: '0.75rem', 
                  fontWeight: '700', 
                  color: '#007bff', 
                  backgroundColor: '#eef5f7', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  letterSpacing: '0.5px'
                }}>
                  {cert.badge}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#888', fontWeight: '600', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {cert.lab}
                </div>
                <h4 style={{ fontSize: '1.25rem', color: '#1a1a1a', fontWeight: '700', marginBottom: '12px' }}>
                  {cert.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.6', margin: 0 }}>
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductCTA 
        title="Interested in Premium uPVC Doors?" 
        subtitle="Request a free site assessment, glass consultation, and customized price catalog." 
        btnText="Get Free Quote"
      />
    </main>
  );
};

export default UpvcDoors;
