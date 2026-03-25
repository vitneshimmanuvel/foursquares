import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaShieldAlt, FaSun, FaWind, FaVolumeOff } from 'react-icons/fa';
import upvcWindow from '../assets/images/upvc_window.png';
import aluminiumWindow from '../assets/images/aluminium_window.png';
import slidingWindow from '../assets/images/sliding_window.png';
import './WindowSelector.css';

const WindowSelector = () => {
  const [selectedWindow, setSelectedWindow] = useState(null);

  const windowTypes = [
    {
      id: 'upvc',
      name: 'UPVC Windows',
      image: upvcWindow,
      tagline: 'Energy Efficient & Low Maintenance',
      description: 'Experience the ultimate in home comfort with our premium UPVC windows. Engineered with advanced multi-chamber technology, these windows provide exceptional thermal insulation—keeping your rooms cool in summer and warm in winter while reducing AC bills by up to 40%. The lead-free, eco-friendly UPVC material never warps, fades, or requires painting, giving you decades of worry-free performance.',
      features: [
        { icon: <FaSun />, text: 'UV Resistant' },
        { icon: <FaWind />, text: 'Weather Sealed' },
        { icon: <FaVolumeOff />, text: 'Sound Proof' },
        { icon: <FaShieldAlt />, text: '10 Year Warranty' },
      ],
      specs: ['Multi-chamber profile for superior insulation', 'Double/Triple glazing options', 'Internal steel reinforcement', 'Premium German hardware'],
    },
    {
      id: 'aluminium',
      name: 'Aluminium Windows',
      image: aluminiumWindow,
      tagline: 'Sleek, Modern & Durable',
      description: 'Make a bold architectural statement with our contemporary aluminium windows. Featuring ultra-slim profiles that maximize glass area, these windows flood your space with natural light while offering stunning panoramic views. The powder-coated finish resists corrosion and maintains its elegant appearance for 25+ years, making them perfect for high-rise apartments and modern commercial spaces.',
      features: [
        { icon: <FaSun />, text: 'Corrosion Resistant' },
        { icon: <FaWind />, text: 'High Strength' },
        { icon: <FaVolumeOff />, text: 'Thermal Break' },
        { icon: <FaShieldAlt />, text: '15 Year Warranty' },
      ],
      specs: ['Ultra-slim 35mm profile design', 'Advanced thermal break technology', 'Custom powder-coated finishes', 'Multi-point security locking'],
    },
    {
      id: 'sliding',
      name: 'Sliding Windows',
      image: slidingWindow,
      tagline: 'Space Saving Solutions',
      description: 'Transform your living space with our elegant sliding windows that combine functionality with sophisticated design. Perfect for balconies, patios, and compact spaces where traditional swing windows aren\'t practical. The smooth-glide roller system ensures effortless operation for years, while the interlocking mechanism provides superior security and weather protection.',
      features: [
        { icon: <FaSun />, text: 'Space Efficient' },
        { icon: <FaWind />, text: 'Easy Operation' },
        { icon: <FaVolumeOff />, text: 'Smooth Glide' },
        { icon: <FaShieldAlt />, text: '12 Year Warranty' },
      ],
      specs: ['Heavy-duty stainless steel rollers', 'Interlocking security mechanism', 'Large panel configurations up to 3m', 'Built-in child safety locks'],
    },
  ];

  const handleSelect = (window) => {
    setSelectedWindow(selectedWindow?.id === window.id ? null : window);
  };

  return (
    <section className="window-selector section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Our Products</span>
          <h2>Choose Your Perfect <span className="text-gradient">Window Type</span></h2>
          <p>Discover our range of premium windows designed for Indian homes</p>
        </motion.div>

        <div className="window-grid">
          {windowTypes.map((window, index) => (
            <motion.div
              key={window.id}
              className={`window-card glass-card ${selectedWindow?.id === window.id ? 'active' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleSelect(window)}
            >
              <div className="window-card-image">
                <img src={window.image} alt={window.name} />
                <div className="window-card-overlay">
                  <span>Click to explore</span>
                </div>
              </div>
              
              <div className="window-card-content">
                <h3>{window.name}</h3>
                <p className="window-tagline">{window.tagline}</p>
                
                <AnimatePresence>
                  {selectedWindow?.id === window.id && (
                    <motion.div
                      className="window-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="window-description">{window.description}</p>
                      
                      <div className="window-features">
                        {window.features.map((feature, idx) => (
                          <div key={idx} className="feature-item">
                            <span className="feature-icon">{feature.icon}</span>
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <div className="window-specs">
                        <h4>Specifications</h4>
                        <ul>
                          {window.specs.map((spec, idx) => (
                            <li key={idx}>
                              <FaCheck className="spec-check" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WindowSelector;
