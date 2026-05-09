import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import upvcWindow from '../assets/images/upvc_window.png';
import aluminiumWindow from '../assets/images/aluminium_window.png';
import slidingWindow from '../assets/images/sliding_window.png';
import bedroomShowcase from '../assets/images/bedroom_showcase.png';
import kitchenShowcase from '../assets/images/kitchen_showcase.png';
import livingRoomShowcase from '../assets/images/living_room_showcase.png';
import kitchenGalley from '../assets/images/kitchen_galley.png';
import kitchenIsland from '../assets/images/kitchen_island.png';
import bedFabric from '../assets/images/bed_fabric_headboard.png';
import windowWood from '../assets/images/window_color_wood.png';
import windowGrey from '../assets/images/window_color_grey.png';
import './ImageMarquee.css';

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const startTime = Date.now();
    const startValue = 0;
    const endValue = target;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <span ref={counterRef} className="stat-number">
      {count}{suffix}
    </span>
  );
};

const ImageMarquee = () => {
  const marqueeItems = [
    { image: upvcWindow, title: 'UPVC Windows', tag: 'Premium' },
    { image: aluminiumWindow, title: 'Aluminium Frames', tag: 'Modern' },
    { image: slidingWindow, title: 'Sliding Doors', tag: 'Elegant' },
    { image: bedroomShowcase, title: 'Bedroom Design', tag: 'Luxury' },
    { image: kitchenShowcase, title: 'Kitchen Interiors', tag: 'Contemporary' },
    { image: livingRoomShowcase, title: 'Living Spaces', tag: 'Sophisticated' },
    { image: bedFabric, title: 'Comfort Suite', tag: 'Custom' },
    { image: kitchenGalley, title: 'Modular Kitchen', tag: 'Efficient' },
    { image: windowWood, title: 'Wood Finish', tag: 'Natural' },
    { image: kitchenIsland, title: 'Island Hub', tag: 'Modern' },
    { image: windowGrey, title: 'Architectural Grey', tag: 'Sleek' },
  ];

  // Duplicate for seamless loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  const stats = [
    { target: 500, suffix: '+', label: 'Projects Completed' },
    { target: 10, suffix: '+', label: 'Years Experience' },
    { target: 100, suffix: '%', label: 'Client Satisfaction' },
    { target: 50, suffix: '+', label: 'Expert Craftsmen' },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index % marqueeItems.length);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % marqueeItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + marqueeItems.length) % marqueeItems.length);
  };

  return (
    <section className="marquee-section">
      <div className="marquee-header">
        <span className="marquee-badge">Our Work</span>
        <h3>Transforming Spaces with <span className="highlight">Premium Design</span></h3>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {duplicatedItems.map((item, index) => (
            <motion.div
              key={index}
              className="marquee-item"
              whileHover={{ scale: 1.05 }}
              onClick={() => openLightbox(index)}
            >
              <div className="marquee-image-wrapper">
                <img src={item.image} alt={item.title} />
                <div className="marquee-overlay">
                  <span className="marquee-tag">{item.tag}</span>
                </div>
              </div>
              <div className="marquee-info">
                <h4>{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="marquee-stats">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2500} />
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="marquee-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="marquee-lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <button className="marquee-lightbox-prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="marquee-lightbox-next" onClick={nextImage}>
              <FaChevronRight />
            </button>
            <motion.div
              className="marquee-lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={marqueeItems[selectedImageIndex].image}
                alt={marqueeItems[selectedImageIndex].title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageMarquee;
