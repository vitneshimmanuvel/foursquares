import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './MaterialChanger.css';

// Import real window images for each color
import windowWhite from '../assets/images/window_color_white.png';
import windowCream from '../assets/images/window_color_cream.png';
import windowGrey from '../assets/images/window_color_grey.png';
import windowWood from '../assets/images/window_color_wood.png';
import windowBlack from '../assets/images/window_color_black.png';
import windowGreen from '../assets/images/window_color_green.png';

const MaterialChanger = () => {
  const [activeCollection, setActiveCollection] = useState('solid');
  const [selectedFrame, setSelectedFrame] = useState('white');

  // Catalog Collections mapped to available images
  const collections = {
    natural: {
      title: 'Natural Collection',
      tagline: 'Experience Nature Indoors',
      description: 'Bringing warmth and authenticity to your home. Heritage-inspired designs with timeless, earthy vibes and 15-year warranty.',
      colors: [
        { id: 'wood', name: 'Rustic Charm', color: '#8B4513', image: windowWood },
      ]
    },
    premium: {
      title: 'Premium Collection',
      tagline: 'Elevate Your Space',
      description: 'Sophisticated high-performance finishes with soft metallic shimmer. Ideal for luxury and coastal projects.',
      colors: [
        { id: 'cream', name: 'Dew Finish', color: '#f5f5dc', image: windowCream },
        { id: 'green', name: 'Hazel Glow', color: '#228B22', image: windowGreen },
      ]
    },
    solid: {
      title: 'Solid Bold Collection',
      tagline: 'Discover Timeless Elegance',
      description: 'Enduring style and protection. Perfect for modern designs where durability and aesthetics go hand-in-hand.',
      colors: [
        { id: 'white', name: 'Frost White', color: '#ffffff', image: windowWhite },
        { id: 'black', name: 'Noir Black', color: '#1a1a1a', image: windowBlack },
        { id: 'grey', name: 'Urban Mist', color: '#6b7280', image: windowGrey },
      ]
    }
  };

  const getSelectedColor = () => {
    return collections[activeCollection].colors.find(c => c.id === selectedFrame) || collections[activeCollection].colors[0];
  };

  const handleCollectionChange = (key) => {
    setActiveCollection(key);
    setSelectedFrame(collections[key].colors[0].id);
  };

  return (
    <section className="material-changer section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Customize</span>
          <h2>Design Your <span className="text-gradient">Perfect Window</span></h2>
          <p>Choose your preferred frame color and see how it looks in a real room setting</p>
        </motion.div>

        <div className="changer-layout">
          {/* Real Window Image Preview */}
          <motion.div
            className="preview-area glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="preview-header">
              <span className="preview-label">Live Preview</span>
              <span className="preview-color-name">{getSelectedColor()?.name}</span>
            </div>

            <div className="preview-image-container">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedFrame}
                  src={getSelectedColor()?.image}
                  alt={`Window with ${getSelectedColor()?.name} frame`}
                  className="preview-image"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>

            <div className="preview-info">
              <div className="info-item">
                <FaCheck className="info-icon" />
                <span>Premium UPVC Frame</span>
              </div>
              <div className="info-item">
                <FaCheck className="info-icon" />
                <span>Energy Efficient</span>
              </div>
              <div className="info-item">
                <FaCheck className="info-icon" />
                <span>10 Year Warranty</span>
              </div>
            </div>
          </motion.div>

          {/* Color Selection Panel */}
          <motion.div
            className="options-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Collection Tabs */}
            <div className="collection-selection glass-card">
              <div className="collection-tabs">
                {Object.entries(collections).map(([key, collection]) => (
                  <button
                    key={key}
                    className={`collection-tab ${activeCollection === key ? 'active' : ''}`}
                    onClick={() => handleCollectionChange(key)}
                  >
                    {collection.title}
                  </button>
                ))}
              </div>
              <div className="collection-desc-box">
                <p className="collection-tagline">{collections[activeCollection].tagline}</p>
                <p className="collection-desc">{collections[activeCollection].description}</p>
              </div>
            </div>

            {/* Frame Color Selection */}
            <div className="option-group glass-card">
              <h4>Select {collections[activeCollection].title} Shade</h4>

              <div className="color-grid">
                {collections[activeCollection].colors.map((color) => (
                  <motion.button
                    key={color.id}
                    className={`color-option ${selectedFrame === color.id ? 'active' : ''}`}
                    onClick={() => setSelectedFrame(color.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className="color-swatch"
                      style={{
                        backgroundColor: color.color,
                        border: color.id === 'white' || color.id === 'cream' ? '2px solid rgba(0,0,0,0.15)' : 'none'
                      }}
                    >
                      {selectedFrame === color.id && (
                        <motion.span
                          className="check-icon"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          <FaCheck />
                        </motion.span>
                      )}
                    </div>
                    <span className="color-name">{color.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quick Preview Thumbnails */}
            <div className="option-group glass-card thumbnail-section">
              <h4>Gallery Preview</h4>
              <div className="thumbnail-grid">
                {collections[activeCollection].colors.map((color) => (
                  <motion.button
                    key={color.id}
                    className={`thumbnail-item ${selectedFrame === color.id ? 'active' : ''}`}
                    onClick={() => setSelectedFrame(color.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={color.image}
                      alt={color.name}
                      className="thumbnail-image"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="options-cta">
              <Link to="/contact" className="btn btn-primary">
                Get Quote for This Color
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaterialChanger;
