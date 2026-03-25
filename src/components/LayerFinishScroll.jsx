import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './LayerFinishScroll.css';

// Import layer texture images
import layerSurface from '../assets/images/layer_surface.jpg';
import layerChromatise from '../assets/images/layer_chromatise.jpg';
import layerPowder from '../assets/images/layer_powder.jpg';

/**
 * LayerFinishScroll Component
 * A scroll-pinned 3-layer finish visualization with texture images
 */
const LayerFinishScroll = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.35) {
      setActiveSection(0);
    } else {
      setActiveSection(1);
    }
  });

  // Transform values for each layer card
  const layer1Y = useTransform(scrollYProgress, [0, 0.25], [120, 0]);
  const layer1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  const layer2Y = useTransform(scrollYProgress, [0.15, 0.45], [100, 0]);
  const layer2Opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  
  const layer3Y = useTransform(scrollYProgress, [0.3, 0.6], [80, 0]);
  const layer3Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const layers = [
    { 
      name: 'Surface', 
      image: layerSurface,
      description: 'Aluminium base material'
    },
    { 
      name: 'Chromatise / Non-Chrome', 
      image: layerChromatise,
      description: 'Chemical treatment layer'
    },
    { 
      name: 'Powder Coating', 
      image: layerPowder,
      description: 'Final protective finish'
    }
  ];

  const warranties = [
    { 
      years: '10-15', 
      title: 'Standard Coating',
      description: 'Reliable, cost-effective coating for moderate weather conditions.',
      color: '#0d6eaa'
    },
    { 
      years: '25', 
      title: 'Anodized Premium',
      description: 'A resilient coating designed for superior color and gloss retention.',
      color: '#16a085'
    },
    { 
      years: '30', 
      title: 'Durasol Premium',
      description: 'Provides superior durability with vibrant, long-lasting color.',
      color: '#e74c3c'
    }
  ];

  return (
    <section className="layer-scroll-section" ref={containerRef}>
      <div className="layer-scroll-sticky">
        <div className="layer-scroll-container">
          {/* Left Side - Text Content */}
          <div className="layer-scroll-left">
            <div className={`layer-intro ${activeSection === 0 ? 'active' : ''}`}>
              <div className="colorful-dots-icon"></div>
              <h2 className="layer-title">
                Endless Choices,<br />
                Timeless Shades for<br />
                <span className="text-gradient">Every Style.</span>
              </h2>
              <p className="layer-description">
                In today's architecture, surface finishes are more than aesthetic – 
                they're a commitment to durability and lasting beauty. Our aluminium 
                products combine sophisticated design with resilient powder coatings.
              </p>
              <p className="layer-description">
                From the strength of Solid textures to the elegance of Premium finishes 
                and the warmth of Natural hues, our shade collection meets the highest 
                quality standards, with warranties up to 30 years.
              </p>
            </div>

            <div className={`layer-warranty ${activeSection === 1 ? 'active' : ''}`}>
              <h3 className="warranty-title">
                Choose the Surface Finish<br />
                Warranty that suits your needs.
              </h3>
              
              <div className="warranty-list">
                {warranties.map((warranty, index) => (
                  <div 
                    key={index}
                    className="warranty-row"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div 
                      className="warranty-circle-badge"
                      style={{ borderColor: warranty.color }}
                    >
                      <span className="warranty-number">{warranty.years}</span>
                      <span className="warranty-label">years</span>
                    </div>
                    <div className="warranty-info">
                      <strong>{warranty.title}</strong>
                      <p>{warranty.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stacked Layers with Images */}
          <div className="layer-scroll-right">
            <h3 className="layer-stack-title">
              Master the Art:<br />
              <span className="text-gradient">3 Steps to a Flawless Finish</span>
            </h3>
            
            <div className="layer-stack-visual">
              {/* Layer 1 - Surface (top-left, back) */}
              <motion.div 
                className={`layer-card-stack layer-1 ${hoveredCard === 1 ? 'hovered' : ''}`}
                style={{ y: layer1Y, opacity: layer1Opacity }}
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src={layers[0].image} alt={layers[0].name} className="layer-image" />
                <div className="layer-sparkle"></div>
                <div className="layer-text-reveal">
                  <span className="layer-name">{layers[0].name}</span>
                </div>
              </motion.div>

              {/* Layer 2 - Chromatise (middle) - shifts left on hover */}
              <motion.div 
                className={`layer-card-stack layer-2 ${hoveredCard === 2 ? 'hovered' : ''}`}
                style={{ y: layer2Y, opacity: layer2Opacity }}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ 
                  x: -25, 
                  scale: 1.02,
                  rotate: -2,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
              >
                <img src={layers[1].image} alt={layers[1].name} className="layer-image" />
                <div className="layer-sparkle"></div>
                <div className="layer-text-reveal">
                  <span className="layer-name">Chromatise/<br />Non-Chrome</span>
                </div>
              </motion.div>

              {/* Layer 3 - Powder Coating (top) */}
              <motion.div 
                className={`layer-card-stack layer-3 ${hoveredCard === 3 ? 'hovered' : ''}`}
                style={{ y: layer3Y, opacity: layer3Opacity }}
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src={layers[2].image} alt={layers[2].name} className="layer-image" />
                <div className="layer-sparkle"></div>
                <div className="layer-text-reveal">
                  <span className="layer-name">{layers[2].name}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayerFinishScroll;
