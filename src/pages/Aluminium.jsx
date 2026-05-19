import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight, FaWind, FaSun, FaTools, FaShieldAlt, FaCogs, FaDollarSign, FaPaintBrush, FaGlobe, FaAward } from 'react-icons/fa';
import LayerFinishScroll from '../components/LayerFinishScroll';
import './ProductPage.css';

import aluminiumWindow from '../assets/images/aluminium_window.png';
import slidingWindow from '../assets/images/sliding_window.png';
import windowGrey from '../assets/images/window_color_grey.png';
import windowWood from '../assets/images/window_color_wood.png';
import windowBlack from '../assets/images/window_color_black.png';
import windowWhite from '../assets/images/window_color_white.png';
import interiorLiving from '../assets/images/interior_living.png';
import heroBackground from '../assets/images/hero_background.png';

import woodRusticCharm from '../assets/images/wood_rustic_charm.png';
import woodMysticDark from '../assets/images/wood_mystic_dark.png';
import woodCitrine from '../assets/images/wood_citrine.jpg';
import woodDuke from '../assets/images/wood_duke.png';
import woodRoyalChestnut from '../assets/images/wood_royal_chestnut.png';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const Aluminium = () => {
  const [activeCollection, setActiveCollection] = useState('natural');

  const products = [
    {
      title: 'Sliding Windows & Doors',
      subtitle: 'Graf 26, Graf 32 & Graf 45 series',
      image: slidingWindow,
      description: 'Graf 26, Graf 32 & Graf 45 series for apartments, villas, and premium residences — from slim-profile everyday sliders to large-format sliding doors with corner-slide and concealed-track options.',
      features: ['Up to 4200mm height', 'Concealed tracks', 'Corner sliders'],
    },
    {
      title: 'Casement Windows & Doors',
      subtitle: 'Livio Minimal & Robus 40 series',
      image: windowGrey,
      description: 'Livio Minimal & Robus 40 series for clean sightlines and strong sealing performance — ideal for openable windows and doors with premium hardware, concealed closers, and bay-window options.',
      features: ['Minimal sightlines', 'Up to 2.7m doors', 'Bay windows'],
    },
    {
      title: 'Fold & Slide Systems',
      subtitle: 'Seamless indoor-outdoor living',
      image: windowWood,
      description: 'High-performance folding systems that can open up entire walls. Smooth top or bottom rolling mechanisms for effortless operation and maximum space utilization.',
      features: ['Up to 90% clear opening', 'Heavy-duty rollers', 'Weather sealed'],
    },
    {
      title: 'Facade & Skylight Systems',
      subtitle: 'Architectural Glazing',
      image: aluminiumWindow,
      description: 'Premium curtain wall and skylight systems for modern architectural designs. Engineered for maximum structural integrity and energy efficiency.',
      features: ['Structural glazing', 'Thermal break options', 'Custom configurations'],
    },
  ];

  const benefits = [
    { icon: <FaWind />, title: 'High Strength', desc: '3x stronger than UPVC profiles' },
    { icon: <FaSun />, title: 'Corrosion Resistant', desc: 'Perfect for coastal areas' },
    { icon: <FaTools />, title: 'Low Maintenance', desc: 'Simple wipe-down cleaning' },
    { icon: <FaShieldAlt />, title: '15+ Year Warranty', desc: 'Extended protection guaranteed' },
    { icon: <FaPaintBrush />, title: '200+ Colors', desc: 'Premium powder coat finishes' },
    { icon: <FaCogs />, title: 'Slim Profiles', desc: 'Maximum glass, minimal frame' },
  ];

  const coatingBenefits = [
    { icon: <FaShieldAlt />, title: 'Quality Assurance', description: 'Industry-leading testing protocols' },
    { icon: <FaCogs />, title: 'Rapid Production', description: 'Fast curing & quick turnaround' },
    { icon: <FaDollarSign />, title: 'Cost-Effective', description: 'Minimal waste, lower costs' },
    { icon: <FaPaintBrush />, title: 'Superior Aesthetics', description: 'Vibrant, lasting finish' },
    { icon: <FaGlobe />, title: 'Eco-Friendly', description: 'Zero VOCs, sustainable choice' },
    { icon: <FaAward />, title: 'Enhanced Durability', description: 'Corrosion & abrasion resistant' },
  ];

  const warrantyOptions = [
    { years: '10-15', title: 'Standard Coating', description: 'Reliable, cost-effective coating for moderate weather conditions.', highlights: ['Weather Resistant', 'Economical Choice', 'Standard Protection'] },
    { years: '25', title: 'Anodized Premium', description: 'Resilient coating for superior color and gloss retention.', highlights: ['Color Retention', 'Gloss Retention', 'Extended Life'] },
    { years: '30', title: 'Durasol Premium', description: 'Superior durability with vibrant, long-lasting color.', highlights: ['Superior Durability', 'Vibrant Colors', 'Maximum Protection'] },
  ];

  const collections = {
    natural: {
      title: 'Natural Collection',
      tagline: 'Experience Nature Indoors',
      description: 'Heritage-inspired designs with timeless, earthy vibes. 15-year warranty with nature\'s textures and tones.',
      image: interiorLiving,
      colors: [
        { id: 'rustic-charm', name: 'Rustic Charm', color: '#B8A082', image: woodRusticCharm },
        { id: 'mystic-dark', name: 'Mystic Dark', color: '#5C4033', image: woodMysticDark },
        { id: 'citrine', name: 'Citrine', color: '#C19A6B', image: woodCitrine },
        { id: 'duke', name: 'Duke', color: '#8B4513', image: woodDuke },
        { id: 'royal-chestnut', name: 'Royal Chestnut', color: '#6B3A2A', image: woodRoyalChestnut },
      ]
    },
    premium: {
      title: 'Premium Collection',
      tagline: 'Elevate Your Space',
      description: 'Sophisticated high-performance finishes with soft metallic shimmer.',
      image: heroBackground,
      colors: [
        { id: 'hazel', name: 'Hazel', color: '#6B7B5E' },
        { id: 'caramel', name: 'Caramel', color: '#C68E5E' },
        { id: 'cedar', name: 'Cedar', color: '#7F6347' },
        { id: 'dew', name: 'Dew', color: '#E8E4DF' },
        { id: 'urban-dusk', name: 'Urban Dusk', color: '#5C6B5E' },
      ]
    },
    solid: {
      title: 'Solid Bold Collection',
      tagline: 'Discover Timeless Elegance',
      description: 'Solid colors for modern and minimalistic designs.',
      image: windowBlack,
      colors: [
        { id: 'urban-mist', name: 'Urban Mist', color: '#B8B8B8' },
        { id: 'mocha', name: 'Mocha', color: '#7B5B4C' },
        { id: 'frost', name: 'Frost', color: '#F5F5F5' },
        { id: 'noir', name: 'Noir', color: '#2C2C2C' },
        { id: 'slate', name: 'Slate', color: '#4A5568' },
      ]
    }
  };

  return (
    <main className="product-page aluminium-page">
      <section className="product-hero full-screen-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)` }}>
        <div className="product-hero-overlay dark-overlay"></div>
        <div className="container product-hero-content left-align">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Premium Aluminium Windows & Doors for Modern India
          </motion.h1>
          <motion.p className="hero-subtext" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Precision-engineered aluminium window & door systems built with 6063-T6 aluminium alloy — sliding, casement & fold-slide configurations backed by a 25-year surface protection warranty.
          </motion.p>
        </div>
      </section>

      <section className="upgrade-bar-section">
        <div className="container">
          <div className="upgrade-content">
            <div className="upgrade-text">
              <h2>Upgrade to Premium Aluminium Windows & Doors</h2>
              <p>Share your requirement for aluminium windows, doors or facades to get pricing + a personalized consultation. Pan-India delivery available.</p>
            </div>
            <div className="upgrade-actions">
              <Link to="/contact" className="btn btn-light"><FaCheck style={{marginRight: '8px'}} /> Get Your Quote</Link>
              <Link to="/contact" className="btn btn-outline-light">Book Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="product-section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Advantages</span>
            <h2>Why Choose <span className="text-gradient">Aluminium</span>?</h2>
          </div>
          <div className="benefits-grid-6">
            {benefits.map((b, i) => (
              <motion.div key={i} className="benefit-card-item" initial={{ y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -8 }}>
                <div className="benefit-icon-box">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grids */}
      <section className="product-section section-linen">
        <div className="container">
          <div className="section-header text-center" style={{marginBottom: '50px'}}>
            <span className="section-badge">Product Range</span>
            <h2 style={{fontSize: '2.5rem', marginBottom: '15px'}}>Sliding, Casement, Fold & Slide, Facade & Skylight Systems</h2>
            <p style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#555'}}>
              Choose the right system based on your space, view, ventilation needs, and design intent — for windows, doors, and facade applications.
            </p>
          </div>

          <div className="alu-products-grid">
            {products.map((product, index) => (
              <motion.div 
                key={index} 
                className="alu-product-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="alu-product-img">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="alu-product-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className="alu-features-badges">
                    {product.features.map((f, i) => (
                      <span key={i} className="alu-badge"><FaCheck className="check-icon" /> {f}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LayerFinishScroll - Scroll Pinned Animation */}
      <LayerFinishScroll />

      {/* Color Collections */}
      <section className="product-section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Premium Finishes</span>
            <h2>Endless Choices, <span className="text-gradient">Timeless Shades</span></h2>
            <p>Surface finishes are more than aesthetic — they're a commitment to durability and lasting beauty.</p>
          </div>

          <div className="collection-tabs">
            {Object.entries(collections).map(([key, col]) => (
              <button key={key} className={`tab-btn ${activeCollection === key ? 'active' : ''}`} onClick={() => setActiveCollection(key)}>{col.title}</button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeCollection} className="showcase-display" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="showcase-image">
                <img src={collections[activeCollection].image} alt={collections[activeCollection].title} />
                <div className="image-overlay-label"><h3>{collections[activeCollection].tagline}</h3></div>
              </div>
              <div className="showcase-content-area">
                <h3>{collections[activeCollection].title}</h3>
                <p>{collections[activeCollection].description}</p>
                <div className="swatches-row">
                  {collections[activeCollection].colors.map((color, i) => (
                    <motion.div key={color.id} className="swatch-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.15, y: -5 }}>
                      <div className="swatch-circle" style={{ backgroundColor: color.color }}>
                        {color.image && <img src={color.image} alt={color.name} />}
                      </div>
                      <span>{color.name}</span>
                    </motion.div>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-primary">Request Color Sample <FaArrowRight /></Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Warranty */}
      <section className="product-section section-linen">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Protection</span>
            <h2>Surface Finish <span className="text-gradient">Warranty Options</span></h2>
          </div>
          <div className="warranty-grid-3">
            {warrantyOptions.map((w, i) => (
              <motion.div key={i} className={`warranty-card-item ${i === 2 ? 'featured' : ''}`} initial={{ y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} whileHover={{ y: -10 }}>
                {i === 2 && <span className="featured-label">Recommended</span>}
                <div className="warranty-years-display"><span className="wy-num">{w.years}</span><span className="wy-label">Years</span></div>
                <h4>{w.title}</h4>
                <p>{w.description}</p>
                <ul className="warranty-hl">{w.highlights.map((h, j) => (<li key={j}><FaCheck className="check-icon" /> {h}</li>))}</ul>
                <Link to="/contact" className="btn btn-outline">Get Quote</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Powder Coating Benefits */}
      <section className="product-section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Technology</span>
            <h2>Powder Coating <span className="text-gradient">Excellence</span></h2>
          </div>
          <div className="benefits-grid-6">
            {coatingBenefits.map((b, i) => (
              <motion.div key={i} className="benefit-card-item" initial={{ y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }}>
                <div className="benefit-icon-box">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="cta-box">
            <h3>Ready for premium aluminium windows?</h3>
            <Link to="/contact" className="btn btn-primary">Book Free Consultation <FaArrowRight /></Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Aluminium;
