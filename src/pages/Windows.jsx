import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCheck, FaArrowRight, FaShieldAlt, FaSun, FaWind, FaVolumeOff,
  FaLeaf, FaTools, FaChevronLeft, FaCogs, FaDollarSign, FaPaintBrush,
  FaGlobe, FaAward, FaLayerGroup
} from 'react-icons/fa';
import upvcWindow from '../assets/images/upvc_window.png';
import aluminiumWindow from '../assets/images/aluminium_window.png';
import slidingWindow from '../assets/images/sliding_window.png';
import heroBackground from '../assets/images/hero_background.png';
import interiorLiving from '../assets/images/interior_living.png';
import windowWhite from '../assets/images/window_color_white.png';
import windowGrey from '../assets/images/window_color_grey.png';
import windowWood from '../assets/images/window_color_wood.png';
// Wood Textures
import woodRusticCharm from '../assets/images/wood_rustic_charm.png';
import woodMysticDark from '../assets/images/wood_mystic_dark.png';
import woodCitrine from '../assets/images/wood_citrine.jpg';
import woodDuke from '../assets/images/wood_duke.png';
import woodRoyalChestnut from '../assets/images/wood_royal_chestnut.png';
import './Windows.css';

const Windows = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCollection, setActiveCollection] = useState('natural');

  // Catalog Collections from the brochure
  const collections = {
    natural: {
      title: 'Natural Collection',
      tagline: 'Experience Nature Indoors',
      description: 'Our Natural Collection brings warmth and authenticity. Citrine and Mystic Dark add classic, heritage-inspired designs, while Rustic Charm brings a timeless, earthy vibe. Duke shows strength and style, while Royal Chestnut offers depth and luxury. With a 15-year warranty, this collection matches nature\'s textures and tones, at while ensuring dependable quality.',
      colors: [
        { id: 'rustic-charm', name: 'Rustic Charm', image: woodRusticCharm },
        { id: 'mystic-dark', name: 'Mystic Dark', image: woodMysticDark },
        { id: 'citrine', name: 'Citrine', image: woodCitrine },
        { id: 'duke', name: 'Duke', image: woodDuke },
        { id: 'royal-chestnut', name: 'Royal Chestnut', image: woodRoyalChestnut },
      ]
    },
    premium: {
      title: 'Premium Collection',
      tagline: 'Elevate Your Space',
      description: 'Our Premium Collection offers sophisticated high-performance finishes backed by your choice of soft metallic shimmer. Hazel adds urban dust and dew to provide soft metallic glow, Cedar and Caramel add inviting warmth, and Urban Dusk brings a subtle coastal glow. Ideal for luxury and coastal projects, these shades bring both style and strength.',
      colors: [
        { id: 'hazel', name: 'Hazel', color: '#6B7B5E', textColor: '#fff' },
        { id: 'caramel', name: 'Caramel', color: '#C68E5E', textColor: '#333' },
        { id: 'cedar', name: 'Cedar', color: '#7F6347', textColor: '#fff' },
        { id: 'dew', name: 'Dew', color: '#E8E4DF', textColor: '#333' },
        { id: 'urban-dusk', name: 'Urban Dusk', color: '#5C6B5E', textColor: '#fff' },
      ]
    },
    solid: {
      title: 'Solid Bold Collection',
      tagline: 'Discover Timeless Elegance',
      description: 'Our Solid Colors provide enduring style and protection to meet your needs. Scale geometric workmanship with a choice of 15, 25, or 30-year Mocha brings Urban Mist offers sophisticated grey, and Frost provides a clean, bright white. These shades are perfect for modern and minimalistic designs where durability and aesthetics go hand-in-hand.',
      colors: [
        { id: 'urban-mist', name: 'Urban Mist', color: '#B8B8B8', textColor: '#333' },
        { id: 'mocha', name: 'Mocha', color: '#7B5B4C', textColor: '#fff' },
        { id: 'frost', name: 'Frost', color: '#F5F5F5', textColor: '#333' },
        { id: 'noir', name: 'Noir', color: '#2C2C2C', textColor: '#fff' },
        { id: 'slate', name: 'Slate', color: '#4A5568', textColor: '#fff' },
      ]
    }
  };

  // Powder Coating Benefits from catalog
  const coatingBenefits = [
    {
      icon: <FaShieldAlt />,
      title: 'Quality Assurance',
      description: 'Powder coating adheres to industry regulations and rigorous testing protocols to guarantee top-tier performance.'
    },
    {
      icon: <FaCogs />,
      title: 'Rapid Production',
      description: 'Powder coating supports fast curing times, high-volume production, and quick turnaround, ensuring efficiency in manufacturing.'
    },
    {
      icon: <FaDollarSign />,
      title: 'Cost-Effective Solution',
      description: 'Powder coating minimizes material waste, lowers labor costs, and eliminates solvent use, offering a highly cost-effective solution.'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Superior Aesthetics',
      description: 'Powder coating delivers vibrant gloss, enhancing the visual appeal of any surface.'
    },
    {
      icon: <FaGlobe />,
      title: 'Environmental Benefits',
      description: 'Eco-friendly powder coating units zero VOCs, producing no hazardous waste, reducing energy consumption, and making it a sustainable choice.'
    },
    {
      icon: <FaAward />,
      title: 'Enhanced Durability',
      description: 'Powder coating provides resistance to corrosion, abrasion, ensuring long-lasting performance in challenging environments.'
    }
  ];

  // Warranty Options from catalog
  const warrantyOptions = [
    {
      years: '10-15',
      title: 'Standard Coating',
      description: 'Reliable, cost-effective coating for moderate weather conditions.',
      highlights: ['Weather Resistant', 'Economical Choice', 'Standard Protection']
    },
    {
      years: '25',
      title: 'Premium Coating',
      description: 'A resilient coating designed for superior color and gloss retention.',
      highlights: ['Color Retention', 'Gloss Retention', 'Extended Life']
    },
    {
      years: '30',
      title: 'Durasol Premium',
      description: 'Durosol Premium Coating provides superior durability with vibrant long-lasting color.',
      highlights: ['Superior Durability', 'Vibrant Colors', 'Maximum Protection']
    }
  ];

  // Surface Finish Process
  const finishProcess = [
    { step: 1, title: 'Surface Preparation', description: 'Thorough cleaning and preparation of the aluminium surface' },
    { step: 2, title: 'Chromating / Non-Chrome', description: 'Chemical treatment for enhanced adhesion and corrosion resistance' },
    { step: 3, title: 'Powder Coating', description: 'Premium powder application with precise curing for flawless finish' }
  ];

  const windowCategories = [
    {
      id: 'upvc',
      title: 'UPVC Windows',
      tagline: 'Energy Efficient & Low Maintenance',
      image: windowWhite,
      shortDesc: 'Premium UPVC windows with German engineering for superior thermal insulation.',
      description: 'Our premium UPVC windows represent the perfect fusion of German engineering excellence and contemporary Indian design sensibilities. Crafted from lead-free, eco-friendly unplasticized polyvinyl chloride, these windows deliver exceptional thermal insulation that can reduce your cooling costs by up to 40%. The multi-chamber profile design creates dead-air spaces that act as natural insulators, while the fusion-welded corners ensure decades of trouble-free performance without warping, fading, or requiring repainting.',
      benefits: [
        { icon: <FaSun />, title: 'UV Resistant', desc: 'Advanced UV stabilizers prevent yellowing and degradation' },
        { icon: <FaVolumeOff />, title: 'Sound Insulation', desc: 'Reduces external noise by up to 40 decibels' },
        { icon: <FaLeaf />, title: 'Eco Friendly', desc: '100% lead-free, recyclable profiles' },
        { icon: <FaShieldAlt />, title: '10 Year Warranty', desc: 'Comprehensive coverage for complete peace of mind' },
      ],
      features: [
        'Multi-chamber profile for maximum insulation',
        'Double/Triple glazing with argon gas fill option',
        'Internal galvanized steel reinforcement',
        'Premium German Roto/Siegenia hardware',
        'Fusion-welded corners for superior strength',
        'Multiple finishes: white, cream, wood-grain, grey',
      ],
      applications: ['Bedrooms', 'Living Rooms', 'Kitchens', 'Bathrooms', 'Home Offices'],
      price: 'Starting ₹850/sq.ft'
    },
    {
      id: 'aluminium',
      title: 'Aluminium Windows',
      tagline: 'Sleek, Modern & Durable',
      image: windowGrey,
      shortDesc: 'Ultra-slim profiles with maximum glass area for contemporary spaces.',
      description: 'Make a bold architectural statement with our premium aluminium windows. Engineered for contemporary spaces, these windows feature ultra-slim 35mm profiles that maximize glass area and flood your interiors with natural light. The advanced thermal break technology uses polyamide strips to prevent heat transfer, ensuring energy efficiency without compromising on the sleek, minimalist aesthetics. Our powder-coated finishes are tested to withstand 25+ years of exposure without fading or corroding.',
      benefits: [
        { icon: <FaWind />, title: 'High Strength', desc: 'Aluminium alloy provides 3x strength of UPVC' },
        { icon: <FaSun />, title: 'Corrosion Resistant', desc: 'Anodized and powder coated for coastal areas' },
        { icon: <FaTools />, title: 'Low Maintenance', desc: 'Simple wipe-down keeps them looking new' },
        { icon: <FaShieldAlt />, title: '15 Year Warranty', desc: 'Extended protection for premium investment' },
      ],
      features: [
        'Ultra-slim 35mm profile design',
        'Advanced polyamide thermal break',
        'Premium powder-coated finishes (200+ colors)',
        'Multi-point locking security system',
        'Large panel configurations up to 4 meters',
        'Concealed drainage system',
      ],
      applications: ['High-rise Buildings', 'Commercial Spaces', 'Modern Homes', 'Glass Facades', 'Skylights'],
      price: 'Starting ₹1,200/sq.ft'
    },
    {
      id: 'sliding',
      title: 'Sliding Windows',
      tagline: 'Space-Saving Elegance',
      image: windowWood,
      shortDesc: 'Elegant sliding systems for seamless indoor-outdoor living.',
      description: 'Reimagine your living spaces with our elegant sliding windows that seamlessly connect interiors with the outdoors. Designed for areas where conventional swing windows are impractical, these windows feature whisper-quiet rollers and precision-engineered tracks for effortless operation. The multi-point weather stripping creates an impenetrable barrier against rain, dust, and noise, while the interlocking design provides enhanced security without visible locks.',
      benefits: [
        { icon: <FaWind />, title: 'Space Efficient', desc: 'No internal or external swing clearance needed' },
        { icon: <FaTools />, title: 'Easy Operation', desc: 'Precision rollers for feather-light movement' },
        { icon: <FaVolumeOff />, title: 'Weather Sealed', desc: 'Triple brush seals block dust and rain' },
        { icon: <FaShieldAlt />, title: '12 Year Warranty', desc: 'Reliable long-term protection' },
      ],
      features: [
        'Heavy-duty stainless steel roller bearings',
        'Interlocking anti-lift security mechanism',
        'Wide panel configurations up to 3 meters',
        'Integrated child safety locks',
        'Optional mosquito mesh integration',
        'Smooth powder-coated aluminum track',
      ],
      applications: ['Balconies', 'Patios', 'Compact Spaces', 'Partition Walls', 'Room Dividers'],
      price: 'Starting ₹1,050/sq.ft'
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  return (
    <main className="windows-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Our Collection</span>
            <h1>Premium <span className="text-gradient">Windows</span></h1>
            <p>Endless Choices, Timeless Shades for Every Style</p>
          </motion.div>
        </div>
      </section>

      <section className="windows-content section">
        <div className="container">
          <AnimatePresence mode="wait">
            {!selectedProduct ? (
              <motion.div
                key="main-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Window Types Grid */}
                <div className="categories-intro">
                  <h2>Choose Your <span className="text-gradient">Window Type</span></h2>
                  <p>Click on any category to explore detailed specifications and features</p>
                </div>

                <div className="categories-grid">
                  {windowCategories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      className="category-card glass-card"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      onClick={() => handleProductClick(category)}
                    >
                      <div className="category-image">
                        <img src={category.image} alt={category.title} />
                        <div className="category-overlay">
                          <span className="view-details">View Details <FaArrowRight /></span>
                        </div>
                      </div>
                      <div className="category-content">
                        <span className="category-tagline">{category.tagline}</span>
                        <h3>{category.title}</h3>
                        <p>{category.shortDesc}</p>
                        <div className="category-price">{category.price}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Premium Color Collections */}
                <section className="color-collections">
                  <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="section-badge">Color Collections</span>
                    <h2>Unveil the <span className="text-gradient">Perfect Shade</span></h2>
                    <p>Why just imagine when you can experience it firsthand? With our interactive window visualizer, your space becomes a canvas. Place your favorite color behind the windows and watch as the ambiance comes to life, reflecting your home's beauty and style.</p>
                  </motion.div>

                  {/* Collection Tabs */}
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

                  {/* Active Collection Display */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCollection}
                      className="collection-display glass-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="collection-info">
                        <h3>{collections[activeCollection].title}</h3>
                        <span className="collection-tagline">{collections[activeCollection].tagline}</span>
                        <p>{collections[activeCollection].description}</p>

                        <div className="collection-cta-inline">
                          <button className="btn-sample">
                            Request Color Sample <FaArrowRight />
                          </button>
                        </div>
                      </div>
                      <div className="color-swatches">
                        {collections[activeCollection].colors.map((color, index) => (
                          <motion.div
                            key={color.id}
                            className={`swatch-item ${activeCollection === 'natural' ? 'natural-style' : ''}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                          >
                            <div
                              className="swatch-color"
                              style={{
                                backgroundColor: color.color && !color.image ? color.color : 'transparent',
                                backgroundImage: color.image ? `url(${color.image})` : 'none',
                                backgroundSize: 'cover',
                                color: color.textColor
                              }}
                            >
                              {activeCollection !== 'natural' && (
                                <span className="swatch-name">{color.name}</span>
                              )}
                            </div>
                            {activeCollection === 'natural' && (
                              <span className="swatch-name-outside">{color.name}</span>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </section>

                {/* How It Feels Inside */}
                <section className="feels-inside">
                  <div className="feels-grid">
                    <motion.div
                      className="feels-content"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <span className="section-badge">Your Home's First Impression</span>
                      <h2>How It <span className="text-gradient">Feels Inside</span></h2>
                      <p>Your windows are more than just openings—they're the gateway to natural light, fresh air, and stunning views. Our premium windows transform your home's aesthetic while providing superior protection and comfort.</p>
                      <div className="feels-features">
                        <div className="feels-feature">
                          <FaSun className="feature-icon" />
                          <span>Natural Light Optimization</span>
                        </div>
                        <div className="feels-feature">
                          <FaWind className="feature-icon" />
                          <span>Perfect Air Circulation</span>
                        </div>
                        <div className="feels-feature">
                          <FaVolumeOff className="feature-icon" />
                          <span>Noise Reduction</span>
                        </div>
                        <div className="feels-feature">
                          <FaShieldAlt className="feature-icon" />
                          <span>Enhanced Security</span>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="feels-images"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="image-stack">
                        <img src={heroBackground} alt="Window View 1" className="stack-image img-1" />
                        <img src={interiorLiving} alt="Window View 2" className="stack-image img-2" />
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Powder Coating Benefits */}
                <section className="coating-benefits">
                  <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="section-badge">Why Powder Coating</span>
                    <h2>Superior <span className="text-gradient">Finish Quality</span></h2>
                    <p>Our advanced powder coating technology ensures lasting beauty and protection</p>
                  </motion.div>

                  <div className="benefits-grid">
                    {coatingBenefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="benefit-card glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
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

                {/* Surface Finish Process */}
                <section className="finish-process">
                  <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="section-badge">Our Process</span>
                    <h2>Master the Art: <span className="text-gradient">3 Steps to a Flawless Finish</span></h2>
                  </motion.div>

                  <div className="process-timeline">
                    {finishProcess.map((item, index) => (
                      <motion.div
                        key={index}
                        className="process-step"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div className="step-number">{item.step}</div>
                        <div className="step-content">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Warranty Options */}
                <section className="warranty-section">
                  <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="section-badge">Choose Your Protection</span>
                    <h2>Surface Finish <span className="text-gradient">Warranty Options</span></h2>
                    <p>Choose the warranty that suits your needs</p>
                  </motion.div>

                  <div className="warranty-grid">
                    {warrantyOptions.map((warranty, index) => (
                      <motion.div
                        key={index}
                        className={`warranty-card glass-card ${index === 2 ? 'featured' : ''}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
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

                {/* CTA Section */}
                <motion.div
                  className="windows-cta glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2>Ready to Transform Your Space?</h2>
                  <p>Get a free consultation and let the colors inspire you</p>
                  <Link to="/contact" className="btn btn-primary">
                    Book Free Consultation
                    <FaArrowRight />
                  </Link>
                </motion.div>
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
                  <FaChevronLeft /> Back to Categories
                </button>

                <div className="detail-grid">
                  <div className="detail-image glass-card">
                    <img src={selectedProduct.image} alt={selectedProduct.title} />
                  </div>

                  <div className="detail-content">
                    <h2>{selectedProduct.title}</h2>
                    <span className="detail-tagline">{selectedProduct.tagline}</span>
                    <p className="detail-description">{selectedProduct.description}</p>
                    <div className="detail-price-box">
                      <span className="price-label">Starting Price</span>
                      <span className="price-value">{selectedProduct.price}</span>
                    </div>

                    <div className="benefits-grid">
                      {selectedProduct.benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="benefit-item glass-card"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="benefit-icon">{benefit.icon}</div>
                          <h4>{benefit.title}</h4>
                          <p>{benefit.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="features-apps-grid">
                  <motion.div
                    className="features-box glass-card"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3>Key Features</h3>
                    <ul className="features-list">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index}>
                          <FaCheck className="check-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    className="apps-box glass-card"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3>Applications</h3>
                    <div className="apps-tags">
                      {selectedProduct.applications.map((app, index) => (
                        <span key={index} className="app-tag">{app}</span>
                      ))}
                    </div>
                    <Link to="/contact" className="btn btn-primary">
                      Get a Quote
                      <FaArrowRight />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Windows;
