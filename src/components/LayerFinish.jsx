import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheck, FaShieldAlt } from 'react-icons/fa';
import CounterAnimation from './CounterAnimation';
import './LayerFinish.css';

/**
 * LayerFinish Component
 * Shows the 3 steps to a flawless finish with scroll animation
 * Based on brochure: Surface → Chromated/Non-Chromated → Powder Coating
 */
const LayerFinish = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const layers = [
    {
      id: 1,
      name: 'Surface',
      tagline: 'Base Material',
      description: 'High-quality aluminium or steel substrate prepared for coating',
      color: '#E8E4DF',
      gradient: 'linear-gradient(135deg, #E8E4DF 0%, #D0CCC4 100%)',
      features: ['Raw Material', 'Quality Checked', 'Prepared Surface']
    },
    {
      id: 2,
      name: 'Chromated / Non-Chromated',
      tagline: 'Pre-Treatment Layer',
      description: 'Chemical treatment for enhanced adhesion and corrosion resistance',
      color: '#A8D5BA',
      gradient: 'linear-gradient(135deg, #A8D5BA 0%, #7CC89C 100%)',
      features: ['Corrosion Protection', 'Enhanced Adhesion', 'Eco-Friendly Options']
    },
    {
      id: 3,
      name: 'Powder Coating',
      tagline: 'Final Finish Layer',
      description: 'Durable powder coating with vibrant colors and lasting protection',
      color: '#8B7355',
      gradient: 'linear-gradient(135deg, #8B7355 0%, #6B5A45 100%)',
      features: ['200+ Colors', '25 Year Warranty', 'Superior Finish']
    }
  ];

  const warranties = [
    { years: 15, display: '10-15', title: 'Standard Coating', description: 'Reliable, cost-effective coating for moderate weather conditions', color: '#0d6eaa' },
    { years: 25, display: '25', title: 'Anodized Premium', description: 'A resilient coating designed for superior color and gloss retention', color: '#16a085' },
    { years: 30, display: '30', title: 'Durasol Premium', description: 'Superior durability with vibrant, long-lasting color', color: '#e74c3c' },
  ];

  return (
    <section className="layer-finish section" ref={containerRef}>
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ y: 40 }}
          animate={isInView ? { y: 0 } : { y: 40 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <span className="section-badge">Technology</span>
          <h2>Master the Art: <span className="text-gradient">3 Steps to a Flawless Finish</span></h2>
          <p>Our advanced coating process ensures durability that lasts for decades</p>
        </motion.div>

        {/* 3D Layer Stack */}
        <div className="layer-stack">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              className={`layer-card layer-${index + 1}`}
              initial={{ y: 60 + index * 30, scale: 0.95 }}
              animate={isInView ? { y: 0, scale: 1 } : { y: 60 + index * 30, scale: 0.95 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.2 + index * 0.15,
                ease: [0.65, 0, 0.35, 1]
              }}
            >
              <div className="layer-visual">
                <div 
                  className="layer-swatch" 
                  style={{ background: layer.gradient }}
                >
                  <span className="layer-number">{layer.id}</span>
                </div>
                {index < layers.length - 1 && (
                  <div className="layer-connector"></div>
                )}
              </div>
              <div className="layer-content">
                <span className="layer-step">Step {layer.id}</span>
                <h3>{layer.name}</h3>
                <p className="layer-tagline">{layer.tagline}</p>
                <p className="layer-desc">{layer.description}</p>
                <div className="layer-features">
                  {layer.features.map((feature, idx) => (
                    <span key={idx} className="layer-feature">
                      <FaCheck /> {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warranty Options */}
        <motion.div 
          className="warranty-section"
          initial={{ y: 50 }}
          animate={isInView ? { y: 0 } : { y: 50 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          <h3><FaShieldAlt className="warranty-icon" /> Choose the Surface Finish & <span className="text-gradient">Warranty</span> That Suits Your Needs</h3>
          <div className="warranty-cards">
            {warranties.map((warranty, index) => (
              <motion.div
                key={index}
                className="warranty-card"
                initial={{ y: 40, scale: 0.9 }}
                animate={isInView ? { y: 0, scale: 1 } : { y: 40, scale: 0.9 }}
                transition={{ delay: 0.9 + index * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{ '--warranty-color': warranty.color }}
              >
                <div className="warranty-circle-wrapper">
                  <svg className="warranty-circle-svg" viewBox="0 0 120 120">
                    {/* Background circle */}
                    <circle 
                      cx="60" 
                      cy="60" 
                      r="54" 
                      fill="none" 
                      stroke="rgba(255,255,255,0.15)" 
                      strokeWidth="3"
                    />
                    {/* Animated border circle */}
                    <motion.circle 
                      cx="60" 
                      cy="60" 
                      r="54" 
                      fill="none" 
                      stroke={warranty.color}
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: 339 }}
                      animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 339 }}
                      transition={{ 
                        duration: 1.8, 
                        delay: 1 + index * 0.25,
                        ease: [0.65, 0, 0.35, 1]
                      }}
                      style={{ 
                        strokeDasharray: 339,
                        transform: 'rotate(-90deg)',
                        transformOrigin: '60px 60px'
                      }}
                    />
                  </svg>
                  <div className="warranty-circle-content">
                    <span className="warranty-years">
                      {warranty.display === '10-15' ? (
                        warranty.display
                      ) : (
                        <CounterAnimation 
                          target={warranty.years} 
                          duration={2}
                          suffix=""
                        />
                      )}
                    </span>
                    <span className="warranty-unit">Years</span>
                  </div>
                </div>
                <h4>{warranty.title}</h4>
                <p>{warranty.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LayerFinish;
