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
      title: 'Aluminium Sliding Windows',
      subtitle: 'Modern & Sleek',
      image: aluminiumWindow,
      description: 'Ultra-slim aluminium profiles with smooth gliding mechanism. Maximum glass area for unobstructed views. Advanced thermal break technology for energy efficiency.',
      features: ['Ultra-slim 35mm profile design', 'Advanced polyamide thermal break', 'Premium powder-coated finishes (200+ colors)', 'Multi-point locking security system', 'Large panel configurations up to 4 meters', 'Concealed drainage system'],
      price: 'Starting ₹1,200/sq.ft',
    },
    {
      title: 'Patio Sliding Doors',
      subtitle: 'Indoor-Outdoor Living',
      image: slidingWindow,
      description: 'Large panel sliding doors connecting your living space to the garden or balcony. Whisper-quiet operation with heavy-duty rollers.',
      features: ['Heavy-duty stainless steel roller bearings', 'Interlocking anti-lift security mechanism', 'Wide panel configurations up to 3 meters', 'Integrated child safety locks', 'Optional mosquito mesh integration', 'Smooth powder-coated aluminum track'],
      price: 'Starting ₹1,050/sq.ft',
    },
    {
      title: 'Bi-Fold Doors',
      subtitle: 'Open Living',
      image: windowWood,
      description: 'Folding door systems that stack neatly to one side, creating wide open spaces connecting indoors and outdoors. Up to 90% opening.',
      features: ['Multi-panel folding mechanism', 'Top-hung or bottom rolling options', 'Flush threshold for seamless transition', 'Premium weather sealing', 'Multiple opening configurations', 'Available in 200+ colors'],
      price: 'Starting ₹1,500/sq.ft',
    },
    {
      title: 'Aluminium Casement Windows',
      subtitle: 'Maximum Ventilation',
      image: windowGrey,
      description: 'Classic outward-opening casement windows with thermal break technology. Perfect combination of ventilation, security, and modern aesthetics.',
      features: ['Outward opening for maximum ventilation', 'Friction stay hinges', 'Multi-point espagnolette locking', 'Thermal break profiles', 'Optional fly screen', 'Drainage provisions'],
      price: 'Starting ₹900/sq.ft',
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
    <main className="product-page">
      <section className="product-hero" style={{ backgroundImage: `url(${aluminiumWindow})` }}>
        <div className="product-hero-overlay"></div>
        <div className="container product-hero-content">
          <motion.span className="section-badge" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>Aluminium</motion.span>
          <motion.h1 initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Aluminium <span className="text-gradient">Windows & Doors</span>
          </motion.h1>
          <motion.p initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Ultra-slim profiles with maximum glass area, advanced thermal break technology, and 200+ powder-coated finishes.
          </motion.p>
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

      {/* Products */}
      {products.map((product, index) => (
        <section key={index} className={`product-section ${index % 2 === 0 ? 'section-warm' : 'section-linen'}`}>
          <div className="container">
            <div className={`product-intro-grid ${index % 2 !== 0 ? 'reverse' : ''}`}>
              {index % 2 === 0 ? (
                <>
                  <motion.div className="product-intro-image" initial={{ x: -80 }} whileInView={{ x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}>
                    <img src={product.image} alt={product.title} />
                  </motion.div>
                  <motion.div className="product-intro-content" initial={{ x: 80 }} whileInView={{ x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}>
                    <span className="section-badge">{product.subtitle}</span>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <ul className="feature-list">
                      {product.features.map((f, i) => (<li key={i}><FaCheck className="check-icon" /> {f}</li>))}
                    </ul>
                    <span className="price-tag">{product.price}</span>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div className="product-intro-content" initial={{ x: -80 }} whileInView={{ x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}>
                    <span className="section-badge">{product.subtitle}</span>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <ul className="feature-list">
                      {product.features.map((f, i) => (<li key={i}><FaCheck className="check-icon" /> {f}</li>))}
                    </ul>
                    <span className="price-tag">{product.price}</span>
                  </motion.div>
                  <motion.div className="product-intro-image" initial={{ x: 80 }} whileInView={{ x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}>
                    <img src={product.image} alt={product.title} />
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

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
