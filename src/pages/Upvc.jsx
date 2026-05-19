import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight, FaSun, FaVolumeOff, FaLeaf, FaShieldAlt, FaWind, FaTools } from 'react-icons/fa';
import './ProductPage.css';

import upvcWindow from '../assets/images/upvc_window.png';
import windowWhite from '../assets/images/window_color_white.png';
import slidingWindow from '../assets/images/sliding_window.png';
import { WindowGrid } from '../components/AnimatedWindows';

const Upvc = () => {
  const products = [
    {
      title: 'UPVC Casement Windows',
      subtitle: 'Classic & Elegant',
      image: upvcWindow,
      description: 'Premium UPVC casement windows with German engineering. Multi-chamber profiles for superior thermal insulation that reduce cooling costs by up to 40%.',
      features: ['Applicable for hall and bed rooms facing busy and noisy streets', 'Significant for thermal and acoustic performance', 'Supports large sized fixed glass enabling better view and light', 'Stronger system developed against wind load', 'Multiple finishes: white, cream, wood-grain, grey'],
      dimensions: true // flag to render table
    },
    {
      title: 'UPVC Tilt & Turn Windows',
      subtitle: 'Versatile Design',
      image: windowWhite,
      description: 'Dual-function windows that tilt for ventilation or turn for easy cleaning. Perfect for high-rise apartments with advanced safety features.',
      features: ['Dual-function tilt and turn mechanism', 'Multi-point locking system', 'Reinforced with galvanized steel', 'Premium weather sealing', 'Child safety restrictor', 'Available in multiple finishes'],

    },
    {
      title: 'UPVC Sliding Windows',
      subtitle: 'Space Saving',
      image: slidingWindow,
      description: 'Smooth gliding UPVC sliding windows perfect for balconies and compact spaces. Designed to maximize ventilation without compromising floor space.',
      features: ['Smooth roller mechanism', 'Multi-track options (2, 3, 4 track)', 'Interlocking design for security', 'Premium brush seals', 'Anti-lift blocks', 'Optional mosquito mesh'],

    },
  ];

  const benefits = [
    { icon: <FaSun />, title: 'UV Resistant', desc: 'Advanced UV stabilizers prevent yellowing' },
    { icon: <FaVolumeOff />, title: 'Sound Insulation', desc: 'Reduces noise by up to 40 decibels' },
    { icon: <FaLeaf />, title: 'Eco Friendly', desc: '100% lead-free, recyclable profiles' },
    { icon: <FaShieldAlt />, title: '10 Year Warranty', desc: 'Complete peace of mind guaranteed' },
    { icon: <FaWind />, title: 'Weather Sealed', desc: 'Keeps out rain, dust & wind' },
    { icon: <FaTools />, title: 'Low Maintenance', desc: 'Simple wipe-down cleaning' },
  ];

  return (
    <main className="product-page">
      <section className="product-hero" style={{ backgroundImage: `url(${upvcWindow})` }}>
        <div className="product-hero-overlay"></div>
        <div className="container product-hero-content">
          <motion.span className="section-badge" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>UPVC</motion.span>
          <motion.h1 initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Premium UPVC <span className="text-gradient">Windows</span>
          </motion.h1>
          <motion.p initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Energy-efficient, low-maintenance windows with German engineering and multi-chamber profiles.
          </motion.p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="product-section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Benefits</span>
            <h2>Why Choose <span className="text-gradient">UPVC Windows</span>?</h2>
          </div>
          <div className="benefits-grid-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="benefit-card-item"
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
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

      {/* Products */}
      {products.map((product, index) => (
        <section key={index} className={`product-section ${index % 2 === 0 ? 'section-warm' : 'section-linen'}`}>
          <div className="container">
            <div className={`product-intro-grid ${index % 2 !== 0 ? 'reverse' : ''}`}>
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    className="product-intro-image"
                    initial={{ x: -80 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <img src={product.image} alt={product.title} />
                  </motion.div>
                  <motion.div
                    className="product-intro-content"
                    initial={{ x: 80 }}
                    whileInView={{ x: 0 }}
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

                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className="product-intro-content"
                    initial={{ x: -80 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <span className="section-badge">{product.subtitle}</span>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <ul className="feature-list">
                      {product.features.map((f, i) => (
                        <li key={i}><FaCheck className="check-icon" /> {f}</li>
                      ))}
                    </ul>

                  </motion.div>
                  <motion.div
                    className="product-intro-image"
                    initial={{ x: 80 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <img src={product.image} alt={product.title} />
                  </motion.div>
                </>
              )}
            </div>

            {/* Link to dedicated page for Casement Windows */}
            {product.title === 'UPVC Casement Windows' && (
              <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <Link to="/products/upvc/casement" className="btn btn-primary" style={{ padding: '15px 35px' }}>
                  Explore 26 Casement Designs & Technical Drawings
                  <FaArrowRight style={{ marginLeft: '10px' }} />
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="product-section section-white">
        <div className="container">
          <div className="cta-box">
            <h3>Interested in UPVC Windows?</h3>
            <p>Get a free site visit and customized quotation</p>
            <Link to="/contact" className="btn btn-primary">Get Free Quote <FaArrowRight /></Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Upvc;
