import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import './ProductPage.css';
import ProductCTA from '../components/ProductCTA';

import interiorLiving from '../assets/images/interior_living.png';
import kitchenShowcase from '../assets/images/kitchen_showcase.png';
import kitchenGalley from '../assets/images/kitchen_galley.png';
import kitchenIsland from '../assets/images/kitchen_island.png';
import kitchenLShaped from '../assets/images/kitchen_l_shaped.png';
import kitchenPeninsular from '../assets/images/kitchen_peninsular.png';
import kitchenStraight from '../assets/images/kitchen_straight.png';
import kitchenUShaped from '../assets/images/kitchen_u_shaped.png';
import bedroomShowcase from '../assets/images/bedroom_showcase.png';
import bedFabric from '../assets/images/bed_fabric_headboard.png';
import bedHydraulic from '../assets/images/bed_hydraulic.png';
import bedPlatform from '../assets/images/bed_platform.png';
import bedStorage from '../assets/images/bed_storage.png';
import livingRoomShowcase from '../assets/images/living_room_showcase.png';

const Interiors = () => {
  const kitchenLayouts = [
    { name: 'L-Shaped', image: kitchenLShaped },
    { name: 'U-Shaped', image: kitchenUShaped },
    { name: 'Straight', image: kitchenStraight },
    { name: 'Island', image: kitchenIsland },
    { name: 'Galley', image: kitchenGalley },
    { name: 'Peninsular', image: kitchenPeninsular },
  ];

  const bedTypes = [
    { name: 'Fabric Headboard', image: bedFabric },
    { name: 'Hydraulic Lift', image: bedHydraulic },
    { name: 'Platform Bed', image: bedPlatform },
    { name: 'Storage Bed', image: bedStorage },
  ];

  const features = [
    'Premium Italian & German hardware',
    'Soft-close mechanisms on all doors & drawers',
    'Moisture & termite resistant materials',
    'Custom color & texture combinations',
    '10-year manufacturing warranty',
    'Free 3D design consultation',
  ];

  return (
    <main className="product-page">
      {/* Hero */}
      <section className="product-hero" style={{ backgroundImage: `url(${interiorLiving})` }}>
        <div className="product-hero-overlay"></div>
        <div className="container product-hero-content">
          <motion.span className="section-badge" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>Interiors</motion.span>
          <motion.h1 initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Complete Interior <span className="text-gradient">Solutions</span>
          </motion.h1>
          <motion.p initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Transform your living spaces with our complete range of modular kitchens, bedroom furniture, and living room solutions.
          </motion.p>
        </div>
      </section>

      {/* Modular Kitchen */}
      <section className="product-section section-warm">
        <div className="container">
          <div className="product-intro-grid">
            <motion.div
              className="product-intro-image"
              initial={{ x: -80 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            >
              <img src={kitchenShowcase} alt="Modular Kitchen" />
            </motion.div>
            <motion.div
              className="product-intro-content"
              initial={{ x: 80 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
            >
              <span className="section-badge">Kitchen</span>
              <h2>Modular <span className="text-gradient">Kitchen</span></h2>
              <p>Custom-designed modular kitchens with premium finishes, soft-close hardware, and maximized storage. Available in multiple layouts to fit any space.</p>
              <ul className="feature-list">
                {features.slice(0, 4).map((f, i) => (
                  <li key={i}><FaCheck className="check-icon" /> {f}</li>
                ))}
              </ul>

            </motion.div>
          </div>

          <div className="variants-section">
            <h3>Kitchen <span className="text-gradient">Layouts</span></h3>
            <div className="variants-grid">
              {kitchenLayouts.map((item, i) => (
                <motion.div
                  key={i}
                  className="variant-card"
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bedroom */}
      <section className="product-section section-white">
        <div className="container">
          <div className="product-intro-grid reverse">
            <motion.div
              className="product-intro-content"
              initial={{ x: -80 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            >
              <span className="section-badge">Bedroom</span>
              <h2>Bedroom <span className="text-gradient">Furniture</span></h2>
              <p>Elegant bedroom solutions including storage beds, hydraulic beds, platform beds, and fabric headboard beds. Designed for comfort with premium materials.</p>
              <ul className="feature-list">
                <li><FaCheck className="check-icon" /> Premium fabric & leatherette options</li>
                <li><FaCheck className="check-icon" /> Hydraulic storage mechanisms</li>
                <li><FaCheck className="check-icon" /> Custom sizes available</li>
                <li><FaCheck className="check-icon" /> 8-year warranty on hardware</li>
              </ul>

            </motion.div>
            <motion.div
              className="product-intro-image"
              initial={{ x: 80 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
            >
              <img src={bedroomShowcase} alt="Bedroom" />
            </motion.div>
          </div>

          <div className="variants-section">
            <h3>Bed <span className="text-gradient">Types</span></h3>
            <div className="variants-grid">
              {bedTypes.map((item, i) => (
                <motion.div
                  key={i}
                  className="variant-card"
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Living Room */}
      <section className="product-section section-linen">
        <div className="container">
          <div className="product-intro-grid">
            <motion.div
              className="product-intro-image"
              initial={{ x: -80 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            >
              <img src={livingRoomShowcase} alt="Living Room" />
            </motion.div>
            <motion.div
              className="product-intro-content"
              initial={{ x: 80 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
            >
              <span className="section-badge">Living Room</span>
              <h2>Living Room <span className="text-gradient">Interiors</span></h2>
              <p>End-to-end living room interior design with TV units, display cabinets, bookshelves, and accent walls. Transform your living space into a premium showcase.</p>
              <ul className="feature-list">
                <li><FaCheck className="check-icon" /> Custom TV unit designs</li>
                <li><FaCheck className="check-icon" /> Premium display shelving</li>
                <li><FaCheck className="check-icon" /> Accent wall paneling</li>
                <li><FaCheck className="check-icon" /> Space optimization</li>
              </ul>

            </motion.div>
          </div>
        </div>
      </section>

      {/* All Features */}
      <section className="product-section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Why Choose Us</span>
            <h2>The Four Square <span className="text-gradient">Advantage</span></h2>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <FaCheck className="check-icon" />
                <span>{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ProductCTA 
        title="Ready to design your dream interior?" 
        subtitle="Schedule a meeting with our elite designers and get a personalized project estimation" 
        btnText="Book Free Consultation"
      />
    </main>
  );
};

export default Interiors;
