import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaShieldAlt, FaAward, FaEye, FaBullseye, FaPlay } from 'react-icons/fa';
import CounterAnimation, { TextReveal, SlideIn } from './CounterAnimation';
import heroBackground from '../assets/images/hero_background.png';
import './Hero.css';

const Hero = () => {
  const [activeZone, setActiveZone] = useState(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const features = [
    { icon: <FaCheck />, text: 'uPVC' },
    { icon: <FaShieldAlt />, text: 'Aluminium' },
    { icon: <FaCheck />, text: 'Interiors' },
  ];

  // Invisible hoverable zones over windows
  const windowZones = [
    {
      id: 1,
      left: '55%',
      top: '5%',
      width: '28%',
      height: '55%',
      type: 'UPVC Casement Windows',
      description: 'Energy efficient, low maintenance'
    },
    {
      id: 2,
      left: '83%',
      top: '15%',
      width: '15%',
      height: '45%',
      type: 'Sliding Windows',
      description: 'Space-saving smooth glide'
    },
    {
      id: 3,
      left: '0%',
      top: '10%',
      width: '18%',
      height: '50%',
      type: 'Bay Windows',
      description: 'Panoramic garden views'
    },
  ];

  const heroStats = [
    { value: 25, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Projects Completed' },
    { value: 15, suffix: '+', label: 'Cities Served' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="hero-overlay"></div>

      {/* Invisible Hoverable Window Zones */}
      <div className="window-zones">
        {windowZones.map((zone) => (
          <div
            key={zone.id}
            className="window-zone"
            style={{
              left: zone.left,
              top: zone.top,
              width: zone.width,
              height: zone.height
            }}
            onMouseEnter={() => setActiveZone(zone.id)}
            onMouseLeave={() => setActiveZone(null)}
          >
            <AnimatePresence>
              {activeZone === zone.id && (
                <motion.div
                  className="zone-label"
                  initial={{ y: 10, scale: 0.95 }}
                  animate={{ y: 0, scale: 1 }}
                  exit={{ y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.65, 0, 0.35, 1] }}
                >
                  <span className="label-type">{zone.type}</span>
                  <span className="label-desc">{zone.description}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          {/* Text Reveal Title */}
          <h1 className="hero-title">
            <span className="title-line">
              <TextReveal delay={0.2}>Transform Your Space with</TextReveal>
            </span>
            <span className="hero-highlight">
              <TextReveal delay={0.4}>Quality Windows</TextReveal>
            </span>
          </h1>
          <p className="hero-subtitle">Let's build something beautiful</p>

          {/* Feature Tags with Slide Animation */}
          <div className="hero-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="hero-feature-tag"
                initial={{ x: -30 }}
                animate={{ x: 0 }}
                transition={{
                  delay: 0.7 + index * 0.1,
                  duration: 0.5,
                  ease: [0.65, 0, 0.35, 1]
                }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <span className="feature-icon">{feature.icon}</span>
                {feature.text}
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <SlideIn direction="bottom" delay={0.9}>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Get Free Consultation
                <FaArrowRight />
              </Link>
              <Link to="/products" className="btn btn-outline hero-explore-btn">
                Explore Products
              </Link>
            </div>
          </SlideIn>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="hero-stats-bar"
          ref={statsRef}
          initial={{ y: 50 }}
          animate={statsInView ? { y: 0 } : { y: 50 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          {heroStats.map((stat, index) => (
            <div key={index} className="hero-stat">
              <span className="stat-value">
                <CounterAnimation
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                />
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
