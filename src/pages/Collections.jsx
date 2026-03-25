import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCheck, FaArrowRight, FaShieldAlt, FaSun, FaWind, FaVolumeOff,
  FaLeaf, FaTools, FaChevronDown, FaChevronLeft, FaCogs, FaDollarSign,
  FaPaintBrush, FaGlobe, FaAward, FaLayerGroup
} from 'react-icons/fa';

// Images
import upvcWindow from '../assets/images/upvc_window.png';
import aluminiumWindow from '../assets/images/aluminium_window.png';
import slidingWindow from '../assets/images/sliding_window.png';
import heroBackground from '../assets/images/hero_background.png';
import interiorLiving from '../assets/images/interior_living.png';
import windowWhite from '../assets/images/window_color_white.png';
import windowGrey from '../assets/images/window_color_grey.png';
import windowBlack from '../assets/images/window_color_black.png';
import windowWood from '../assets/images/window_color_wood.png';
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

// Wood textures
import woodRusticCharm from '../assets/images/wood_rustic_charm.png';
import woodMysticDark from '../assets/images/wood_mystic_dark.png';
import woodCitrine from '../assets/images/wood_citrine.jpg';
import woodDuke from '../assets/images/wood_duke.png';
import woodRoyalChestnut from '../assets/images/wood_royal_chestnut.png';

// Layer finish images
import layerSurface from '../assets/images/layer_surface.jpg';
import layerChromatise from '../assets/images/layer_chromatise.jpg';
import layerPowder from '../assets/images/layer_powder.jpg';

import './Collections.css';

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('interiors');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCollection, setActiveCollection] = useState('natural');
  const [expandedDropdown, setExpandedDropdown] = useState('interiors');

  // ===== INTERIORS DATA =====
  const interiorProducts = [
    {
      id: 'modular-kitchen',
      title: 'Modular Kitchen',
      subtitle: 'Contemporary Design',
      image: kitchenShowcase,
      description: 'Custom-designed modular kitchens with premium finishes, soft-close hardware, and maximized storage. Available in L-shaped, U-shaped, straight, island, galley, and peninsular layouts.',
      features: ['Soft-Close Hardware', 'Premium Finishes', 'Custom Designs'],
      price: 'Starting ₹1,50,000',
      variants: [
        { name: 'L-Shaped', image: kitchenLShaped },
        { name: 'U-Shaped', image: kitchenUShaped },
        { name: 'Straight', image: kitchenStraight },
        { name: 'Island', image: kitchenIsland },
        { name: 'Galley', image: kitchenGalley },
        { name: 'Peninsular', image: kitchenPeninsular },
      ],
    },
    {
      id: 'bedroom-furniture',
      title: 'Bedroom Furniture',
      subtitle: 'Luxury & Comfort',
      image: bedroomShowcase,
      description: 'Elegant bedroom solutions including storage beds, hydraulic beds, platform beds, and fabric headboard beds. Designed for comfort with premium materials.',
      features: ['Premium Materials', 'Storage Solutions', 'Custom Sizes'],
      price: 'Starting ₹75,000',
      variants: [
        { name: 'Fabric Headboard', image: bedFabric },
        { name: 'Hydraulic Lift', image: bedHydraulic },
        { name: 'Platform Bed', image: bedPlatform },
        { name: 'Storage Bed', image: bedStorage },
      ],
    },
    {
      id: 'living-room',
      title: 'Living Room Interiors',
      subtitle: 'Complete Solutions',
      image: livingRoomShowcase,
      description: 'End-to-end living room interior design with TV units, display cabinets, bookshelves, and accent walls. Transform your living space into a premium showcase.',
      features: ['TV Units', 'Display Cabinets', 'Accent Walls'],
      price: 'Starting ₹1,00,000',
    },
  ];

  // ===== UPVC DATA =====
  const upvcProducts = [
    {
      id: 'upvc-casement',
      title: 'UPVC Casement Windows',
      subtitle: 'Classic & Elegant',
      image: upvcWindow,
      description: 'Premium UPVC casement windows with German engineering. Multi-chamber profiles for superior thermal insulation that can reduce cooling costs by up to 40%. Fusion-welded corners ensure decades of trouble-free performance.',
      features: ['10 Year Warranty', 'Multi-chamber Profile', 'German Hardware'],
      price: 'Starting ₹850/sq.ft',
      benefits: [
        { icon: <FaSun />, title: 'UV Resistant', desc: 'Advanced UV stabilizers prevent yellowing' },
        { icon: <FaVolumeOff />, title: 'Sound Insulation', desc: 'Reduces noise by up to 40 decibels' },
        { icon: <FaLeaf />, title: 'Eco Friendly', desc: '100% lead-free, recyclable profiles' },
        { icon: <FaShieldAlt />, title: '10 Year Warranty', desc: 'Complete peace of mind' },
      ],
      detailFeatures: [
        'Multi-chamber profile for maximum insulation',
        'Double/Triple glazing with argon gas fill option',
        'Internal galvanized steel reinforcement',
        'Premium German Roto/Siegenia hardware',
        'Fusion-welded corners for superior strength',
        'Multiple finishes: white, cream, wood-grain, grey',
      ],
      applications: ['Bedrooms', 'Living Rooms', 'Kitchens', 'Bathrooms', 'Home Offices'],
    },
    {
      id: 'upvc-tilt-turn',
      title: 'UPVC Tilt & Turn Windows',
      subtitle: 'Versatile Design',
      image: windowWhite,
      description: 'Dual-function windows that tilt for ventilation or turn for easy cleaning. Perfect for high-rise apartments with advanced safety features.',
      features: ['Dual Opening', 'Easy Cleaning', 'Child Safe'],
      price: 'Starting ₹950/sq.ft',
      benefits: [
        { icon: <FaWind />, title: 'Ventilation Control', desc: 'Tilt mode for controlled airflow' },
        { icon: <FaTools />, title: 'Easy Cleaning', desc: 'Turn mode allows interior cleaning of exterior glass' },
        { icon: <FaShieldAlt />, title: 'Child Safety', desc: 'Built-in child safety locks' },
        { icon: <FaLeaf />, title: 'Energy Efficient', desc: 'Excellent thermal insulation' },
      ],
      detailFeatures: [
        'Dual-function tilt and turn mechanism',
        'Multi-point locking system',
        'Reinforced with galvanized steel',
        'Premium weather sealing',
        'Child safety restrictor',
        'Available in multiple finishes',
      ],
      applications: ['High-rise Apartments', 'Offices', 'Hospitals', 'Hotels'],
    },
  ];

  // ===== ALUMINIUM DATA =====
  const aluminiumProducts = [
    {
      id: 'alu-sliding',
      title: 'Aluminium Sliding Windows',
      subtitle: 'Modern & Sleek',
      image: aluminiumWindow,
      description: 'Ultra-slim aluminium profiles with smooth gliding mechanism. Maximum glass area for unobstructed views. Advanced thermal break technology for energy efficiency.',
      features: ['15 Year Warranty', 'Thermal Break', '200+ Colors'],
      price: 'Starting ₹1,200/sq.ft',
      benefits: [
        { icon: <FaWind />, title: 'High Strength', desc: '3x strength of UPVC' },
        { icon: <FaSun />, title: 'Corrosion Resistant', desc: 'Perfect for coastal areas' },
        { icon: <FaTools />, title: 'Low Maintenance', desc: 'Simple wipe-down cleaning' },
        { icon: <FaShieldAlt />, title: '15 Year Warranty', desc: 'Extended protection' },
      ],
      detailFeatures: [
        'Ultra-slim 35mm profile design',
        'Advanced polyamide thermal break',
        'Premium powder-coated finishes (200+ colors)',
        'Multi-point locking security system',
        'Large panel configurations up to 4 meters',
        'Concealed drainage system',
      ],
      applications: ['High-rise Buildings', 'Commercial Spaces', 'Modern Homes', 'Glass Facades'],
    },
    {
      id: 'alu-fixed',
      title: 'Aluminium Fixed Windows',
      subtitle: 'Maximum Light',
      image: windowGrey,
      description: 'Non-opening fixed windows for maximum natural light and uninterrupted views. Perfect for picture windows and large glass facades.',
      features: ['Zero Maintenance', 'Large Panels', 'Energy Efficient'],
      price: 'Starting ₹900/sq.ft',
    },
    {
      id: 'sliding-patio',
      title: 'Patio Sliding Doors',
      subtitle: 'Indoor-Outdoor Living',
      image: slidingWindow,
      description: 'Large panel sliding doors connecting your living space to the garden or balcony. Whisper-quiet operation with heavy-duty rollers.',
      features: ['12 Year Warranty', 'Heavy-duty Rollers', 'Weather Sealed'],
      price: 'Starting ₹1,050/sq.ft',
      benefits: [
        { icon: <FaWind />, title: 'Space Efficient', desc: 'No swing clearance needed' },
        { icon: <FaTools />, title: 'Easy Operation', desc: 'Precision rollers for feather-light movement' },
        { icon: <FaVolumeOff />, title: 'Weather Sealed', desc: 'Triple brush seals block dust and rain' },
        { icon: <FaShieldAlt />, title: '12 Year Warranty', desc: 'Reliable long-term protection' },
      ],
      detailFeatures: [
        'Heavy-duty stainless steel roller bearings',
        'Interlocking anti-lift security mechanism',
        'Wide panel configurations up to 3 meters',
        'Integrated child safety locks',
        'Optional mosquito mesh integration',
        'Smooth powder-coated aluminum track',
      ],
      applications: ['Balconies', 'Patios', 'Compact Spaces', 'Room Dividers'],
    },
    {
      id: 'sliding-bifold',
      title: 'Bi-Fold Doors',
      subtitle: 'Open Living',
      image: windowWood,
      description: 'Folding door systems that stack neatly to one side, creating wide open spaces connecting indoors and outdoors.',
      features: ['90% Opening', 'Multiple Panels', 'Security Locks'],
      price: 'Starting ₹1,500/sq.ft',
    },
  ];

  // ===== ALUMINIUM COLOR COLLECTIONS =====
  const collections = {
    natural: {
      title: 'Natural Collection',
      tagline: 'Experience Nature Indoors',
      description: 'Our Natural Collection brings warmth and authenticity. Heritage-inspired designs with timeless, earthy vibes. With a 15-year warranty, this collection matches nature\'s textures and tones while ensuring dependable quality.',
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
      description: 'Sophisticated high-performance finishes with soft metallic shimmer. Ideal for luxury and coastal projects, these shades bring both style and strength.',
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
      description: 'Solid colors providing enduring style and protection. Perfect for modern and minimalistic designs where durability and aesthetics go hand-in-hand.',
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

  // ===== POWDER COATING =====
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
    { years: '25', title: 'Anodized Premium', description: 'A resilient coating designed for superior color and gloss retention.', highlights: ['Color Retention', 'Gloss Retention', 'Extended Life'] },
    { years: '30', title: 'Durasol Premium', description: 'Provides superior durability with vibrant, long-lasting color.', highlights: ['Superior Durability', 'Vibrant Colors', 'Maximum Protection'] },
  ];

  const finishProcess = [
    { step: 1, title: 'Surface Preparation', description: 'Thorough cleaning and preparation of the aluminium surface', image: layerSurface },
    { step: 2, title: 'Chromating / Non-Chrome', description: 'Chemical treatment for enhanced adhesion and corrosion resistance', image: layerChromatise },
    { step: 3, title: 'Powder Coating', description: 'Premium powder application with precise curing for flawless finish', image: layerPowder },
  ];

  const categories = [
    { id: 'interiors', label: 'Interiors', icon: '🏠' },
    { id: 'upvc', label: 'UPVC Windows', icon: '🪟' },
    { id: 'aluminium', label: 'Aluminium', icon: '🔩' },
  ];

  const getProducts = () => {
    switch (activeCategory) {
      case 'interiors': return interiorProducts;
      case 'upvc': return upvcProducts;
      case 'aluminium': return aluminiumProducts;
      default: return [];
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  const toggleDropdown = (id) => {
    setExpandedDropdown(expandedDropdown === id ? null : id);
    setActiveCategory(id);
    setSelectedProduct(null);
  };

  return (
    <main className="collections-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          >
            <span className="section-badge">Explore</span>
            <h1>Our <span className="text-gradient">Products</span></h1>
            <p>Premium Windows, Doors & Interior Solutions</p>
          </motion.div>
        </div>
      </section>

      {/* Category Dropdowns */}
      <section className="product-categories section">
        <div className="container">
          <div className="category-dropdowns">
            {categories.map((cat) => (
              <div key={cat.id} className={`category-dropdown ${expandedDropdown === cat.id ? 'expanded' : ''}`}>
                <button
                  className={`dropdown-trigger ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => toggleDropdown(cat.id)}
                >
                  <span className="dropdown-icon">{cat.icon}</span>
                  <span className="dropdown-label">{cat.label}</span>
                  <FaChevronDown className={`dropdown-arrow ${expandedDropdown === cat.id ? 'rotated' : ''}`} />
                </button>

                <AnimatePresence>
                  {expandedDropdown === cat.id && (
                    <motion.div
                      className="dropdown-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <AnimatePresence mode="wait">
                        {!selectedProduct ? (
                          <motion.div
                            key="product-grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Products Grid */}
                            <div className="collections-grid">
                              {getProducts().map((product, index) => (
                                <motion.div
                                  key={product.id}
                                  className="collection-card glass-card"
                                  initial={{ y: 30 }}
                                  animate={{ y: 0 }}
                                  transition={{ duration: 0.4, delay: index * 0.1 }}
                                  whileHover={{ y: -10 }}
                                  onClick={() => product.benefits || product.variants ? handleProductClick(product) : null}
                                  style={{ cursor: product.benefits || product.variants ? 'pointer' : 'default' }}
                                >
                                  <div className="collection-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="collection-overlay">
                                      <span className="collection-category">{cat.label.toUpperCase()}</span>
                                    </div>
                                  </div>
                                  <div className="collection-content">
                                    <span className="collection-subtitle">{product.subtitle}</span>
                                    <h3>{product.title}</h3>
                                    <p className="collection-description">{product.description}</p>
                                    <div className="collection-features">
                                      {product.features.map((feature, idx) => (
                                        <div key={idx} className="feature-tag">
                                          <FaCheck className="feature-icon" />
                                          <span>{feature}</span>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="collection-footer">
                                      <span className="collection-price">{product.price}</span>
                                      <Link to="/contact" className="collection-cta" onClick={(e) => e.stopPropagation()}>
                                        Get Quote <FaArrowRight />
                                      </Link>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            {/* Show variants for interior products */}
                            {cat.id === 'interiors' && (
                              <div className="variants-showcase">
                                {interiorProducts.filter(p => p.variants).map((product) => (
                                  <div key={product.id} className="variant-section">
                                    <h3>{product.title} <span className="text-gradient">Styles</span></h3>
                                    <div className="variants-grid">
                                      {product.variants.map((variant, i) => (
                                        <motion.div
                                          key={i}
                                          className="variant-card"
                                          whileHover={{ y: -5, scale: 1.02 }}
                                        >
                                          <img src={variant.image} alt={variant.name} />
                                          <span>{variant.name}</span>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Aluminium-specific sections */}
                            {cat.id === 'aluminium' && (
                              <>
                                {/* Color Collections */}
                                <section className="color-collections">
                                  <div className="section-header">
                                    <span className="section-badge">Premium Finishes</span>
                                    <h2>Endless Choices, <span className="text-gradient">Timeless Shades</span> for Every Style</h2>
                                    <p>In today's architecture, surface finishes are more than aesthetic – they're a commitment to durability and lasting beauty.</p>
                                  </div>

                                  <div className="collection-tabs">
                                    {Object.entries(collections).map(([key, collection]) => (
                                      <button
                                        key={key}
                                        className={`tab-btn ${activeCollection === key ? 'active' : ''}`}
                                        onClick={() => setActiveCollection(key)}
                                      >
                                        {collection.title}
                                      </button>
                                    ))}
                                  </div>

                                  <AnimatePresence mode="wait">
                                    <motion.div
                                      key={activeCollection}
                                      className="showcase-display"
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -20 }}
                                      transition={{ duration: 0.4 }}
                                    >
                                      <div className="showcase-image">
                                        <img src={collections[activeCollection].image} alt={collections[activeCollection].title} />
                                        <div className="image-overlay">
                                          <h3>{collections[activeCollection].tagline}</h3>
                                        </div>
                                      </div>
                                      <div className="showcase-content">
                                        <h3>{collections[activeCollection].title}</h3>
                                        <p>{collections[activeCollection].description}</p>
                                        <div className="showcase-swatches">
                                          {collections[activeCollection].colors.map((color, index) => (
                                            <motion.div
                                              key={color.id}
                                              className={`showcase-swatch ${activeCollection === 'natural' ? 'natural-style' : ''}`}
                                              initial={{ scale: 0.8 }}
                                              animate={{ scale: 1 }}
                                              transition={{ delay: index * 0.1 }}
                                              whileHover={{ scale: 1.15, y: -5 }}
                                            >
                                              <div className="swatch-color" style={{ backgroundColor: color.color }}>
                                                {color.image && <img src={color.image} alt={color.name} className="swatch-img" />}
                                              </div>
                                              <span className="swatch-label">{color.name}</span>
                                            </motion.div>
                                          ))}
                                        </div>
                                        <Link to="/contact" className="btn btn-primary">
                                          Request Color Sample <FaArrowRight />
                                        </Link>
                                      </div>
                                    </motion.div>
                                  </AnimatePresence>
                                </section>

                                {/* Warranty Options */}
                                <section className="warranty-section">
                                  <div className="section-header">
                                    <span className="section-badge">Choose Your Protection</span>
                                    <h2>Surface Finish <span className="text-gradient">Warranty Options</span></h2>
                                    <p>Choose the warranty that suits your needs</p>
                                  </div>

                                  <div className="warranty-grid">
                                    {warrantyOptions.map((warranty, index) => (
                                      <motion.div
                                        key={index}
                                        className={`warranty-card glass-card ${index === 2 ? 'featured' : ''}`}
                                        initial={{ y: 30 }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        whileHover={{ y: -10 }}
                                      >
                                        {index === 2 && <span className="featured-badge">Recommended</span>}
                                        <div className="warranty-years">
                                          <span className="years-number">{warranty.years}</span>
                                          <span className="years-label">Years</span>
                                        </div>
                                        <h4>{warranty.title}</h4>
                                        <p>{warranty.description}</p>
                                        <ul className="warranty-highlights">
                                          {warranty.highlights.map((highlight, idx) => (
                                            <li key={idx}>
                                              <FaCheck className="check-icon" />
                                              {highlight}
                                            </li>
                                          ))}
                                        </ul>
                                        <Link to="/contact" className="btn btn-outline warranty-btn">
                                          Get Quote
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </section>

                                {/* Powder Coating Benefits */}
                                <section className="coating-benefits">
                                  <div className="section-header">
                                    <span className="section-badge">Why Powder Coating</span>
                                    <h2>Superior <span className="text-gradient">Finish Quality</span></h2>
                                    <p>Our advanced powder coating technology ensures lasting beauty and protection</p>
                                  </div>

                                  <div className="benefits-grid">
                                    {coatingBenefits.map((benefit, index) => (
                                      <motion.div
                                        key={index}
                                        className="benefit-card glass-card"
                                        initial={{ y: 30 }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                      >
                                        <div className="benefit-icon">{benefit.icon}</div>
                                        <h4>{benefit.title}</h4>
                                        <p>{benefit.description}</p>
                                      </motion.div>
                                    ))}
                                  </div>
                                </section>

                                {/* 3 Steps to Flawless Finish */}
                                <section className="finish-process">
                                  <div className="section-header">
                                    <span className="section-badge">Our Process</span>
                                    <h2>Master the Art: <span className="text-gradient">3 Steps to a Flawless Finish</span></h2>
                                  </div>

                                  <div className="process-timeline">
                                    {finishProcess.map((item, index) => (
                                      <motion.div
                                        key={index}
                                        className="process-step"
                                        initial={{ x: index % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                      >
                                        <div className="step-image">
                                          <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="step-number">{item.step}</div>
                                        <div className="step-content">
                                          <h4>{item.title}</h4>
                                          <p>{item.description}</p>
                                        </div>
                                      </motion.div>
                                    ))}
                                  </div>
                                </section>
                              </>
                            )}
                          </motion.div>
                        ) : (
                          /* Product Detail View */
                          <motion.div
                            key="detail"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="product-detail-view"
                          >
                            <button className="back-btn" onClick={handleBackClick}>
                              <FaChevronLeft /> Back to {categories.find(c => c.id === activeCategory)?.label}
                            </button>

                            <div className="detail-grid">
                              <div className="detail-image glass-card">
                                <img src={selectedProduct.image} alt={selectedProduct.title} />
                              </div>
                              <div className="detail-content">
                                <h2>{selectedProduct.title}</h2>
                                <span className="detail-tagline">{selectedProduct.subtitle}</span>
                                <p className="detail-description">{selectedProduct.description}</p>
                                <div className="detail-price-box">
                                  <span className="price-label">Starting Price</span>
                                  <span className="price-value">{selectedProduct.price}</span>
                                </div>

                                {selectedProduct.benefits && (
                                  <div className="benefits-grid">
                                    {selectedProduct.benefits.map((benefit, index) => (
                                      <motion.div
                                        key={index}
                                        className="benefit-item glass-card"
                                        initial={{ y: 20 }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                      >
                                        <div className="benefit-icon">{benefit.icon}</div>
                                        <h4>{benefit.title}</h4>
                                        <p>{benefit.desc}</p>
                                      </motion.div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Variants for interiors */}
                            {selectedProduct.variants && (
                              <div className="variants-detail">
                                <h3>Available <span className="text-gradient">Styles</span></h3>
                                <div className="variants-grid">
                                  {selectedProduct.variants.map((variant, i) => (
                                    <motion.div
                                      key={i}
                                      className="variant-card"
                                      whileHover={{ y: -5, scale: 1.02 }}
                                    >
                                      <img src={variant.image} alt={variant.name} />
                                      <span>{variant.name}</span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="features-apps-grid">
                              {selectedProduct.detailFeatures && (
                                <motion.div
                                  className="features-box glass-card"
                                  initial={{ x: -30 }}
                                  animate={{ x: 0 }}
                                  transition={{ delay: 0.2 }}
                                >
                                  <h3>Key Features</h3>
                                  <ul className="features-list">
                                    {selectedProduct.detailFeatures.map((feature, index) => (
                                      <li key={index}>
                                        <FaCheck className="check-icon" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}

                              {selectedProduct.applications && (
                                <motion.div
                                  className="apps-box glass-card"
                                  initial={{ x: 30 }}
                                  animate={{ x: 0 }}
                                  transition={{ delay: 0.3 }}
                                >
                                  <h3>Applications</h3>
                                  <div className="apps-tags">
                                    {selectedProduct.applications.map((app, index) => (
                                      <span key={index} className="app-tag">{app}</span>
                                    ))}
                                  </div>
                                  <Link to="/contact" className="btn btn-primary">
                                    Get a Quote <FaArrowRight />
                                  </Link>
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="collections-cta-section section">
        <div className="container">
          <motion.div
            className="collections-cta glass-card"
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Can't find what you're looking for?</h2>
            <p>We offer custom solutions tailored to your specific requirements</p>
            <Link to="/contact" className="btn btn-primary">
              Request Custom Design <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Collections;
