import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaPalette, FaShieldAlt, FaAward } from 'react-icons/fa';
import heroBackground from '../assets/images/hero_background.png';
import interiorLiving from '../assets/images/interior_living.png';
import upvcWindow from '../assets/images/upvc_window.png';
import aluminiumWindow from '../assets/images/aluminium_window.png';
import slidingWindow from '../assets/images/sliding_window.png';
import bedroomShowcase from '../assets/images/bedroom_showcase.png';
import kitchenShowcase from '../assets/images/kitchen_showcase.png';
import livingRoomShowcase from '../assets/images/living_room_showcase.png';
// Wood Textures for Natural Collection
import woodRusticCharm from '../assets/images/wood_rustic_charm.png';
import woodMysticDark from '../assets/images/wood_mystic_dark.png';
import woodCitrine from '../assets/images/wood_citrine.jpg';
import woodDuke from '../assets/images/wood_duke.png';
import woodRoyalChestnut from '../assets/images/wood_royal_chestnut.png';

// Import new unique images
import bedFabric from '../assets/images/bed_fabric_headboard.png';
import bedHydraulic from '../assets/images/bed_hydraulic.png';
import bedPlatform from '../assets/images/bed_platform.png';
import bedStorage from '../assets/images/bed_storage.png';

import kitchenGalley from '../assets/images/kitchen_galley.png';
import kitchenIsland from '../assets/images/kitchen_island.png';
import kitchenLShaped from '../assets/images/kitchen_l_shaped.png';
import kitchenPeninsular from '../assets/images/kitchen_peninsular.png';
import kitchenStraight from '../assets/images/kitchen_straight.png';
import kitchenUShaped from '../assets/images/kitchen_u_shaped.png';

import windowWhite from '../assets/images/window_color_white.png';
import windowCream from '../assets/images/window_color_cream.png';
import windowGrey from '../assets/images/window_color_grey.png';
import windowBlack from '../assets/images/window_color_black.png';
import windowWood from '../assets/images/window_color_wood.png';
import windowGreen from '../assets/images/window_color_green.png';

import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    // Bedrooms
    { id: 1, src: bedroomShowcase, category: 'bedroom', title: 'Luxury Master Suite', desc: 'Elegant master bedroom featuring floor-to-ceiling UPVC windows with stunning city skyline views.' },
    { id: 2, src: bedFabric, category: 'bedroom', title: 'Contemporary Comfort', desc: 'Modern bedroom setup with custom upholstered headboard and large panoramic casement windows.' },
    { id: 3, src: bedHydraulic, category: 'bedroom', title: 'Smart Space Bedroom', desc: 'Minimalist bedroom featuring hydraulic bed storage and sleek aluminium frame windows.' },
    { id: 4, src: bedPlatform, category: 'bedroom', title: 'Zen Platform Suite', desc: 'Low-profile platform bed in a bright room with expansive glass walls for a seamless outdoor connection.' },
    { id: 5, src: bedStorage, category: 'bedroom', title: 'Urban Living Retreat', desc: 'Functional bedroom design with integrated storage solutions and premium soundproof windows.' },

    // Kitchens
    { id: 6, src: kitchenShowcase, category: 'kitchen', title: 'Modern Gourmet Kitchen', desc: 'Contemporary kitchen with sleek aluminium frame windows overlooking a lush garden.' },
    { id: 7, src: kitchenGalley, category: 'kitchen', title: 'Efficient Galley Setup', desc: 'Narrow but bright kitchen space optimized with large horizontal sliding windows.' },
    { id: 8, src: kitchenIsland, category: 'kitchen', title: 'Island Paradise Kitchen', desc: 'Spacious kitchen featuring a central island and floor-to-ceiling glass panels.' },
    { id: 9, src: kitchenLShaped, category: 'kitchen', title: 'L-Shaped Elegance', desc: 'Classic L-shaped kitchen layout with premium white UPVC windows and natural stone counters.' },
    { id: 10, src: kitchenPeninsular, category: 'kitchen', title: 'Social Kitchen Hub', desc: 'Open kitchen with peninsular seating and large tilt-and-turn windows for ventilation.' },
    { id: 11, src: kitchenStraight, category: 'kitchen', title: 'Minimalist Linear Kitchen', desc: 'Clean, linear kitchen design with wood-finish window frames for a warm touch.' },
    { id: 12, src: kitchenUShaped, category: 'kitchen', title: 'Chef\'s U-Shaped Haven', desc: 'Professionally equipped U-shaped kitchen with wrap-around windows for maximum light.' },

    // Living Rooms
    { id: 13, src: livingRoomShowcase, category: 'living', title: 'Panoramic Living Room', desc: 'Spacious living area with wall-to-wall glass panels offering breathtaking city views.' },
    { id: 14, src: interiorLiving, category: 'living', title: 'Open Plan Excellence', desc: 'Sophisticated open-plan living and dining area with premium UPVC casement windows.' },
    { id: 15, src: heroBackground, category: 'living', title: 'Grand Vista Lounge', desc: 'Large living space featuring massive fixed glass panels and high-profile sliding doors.' },

    // UPVC
    { id: 16, src: upvcWindow, category: 'upvc', title: 'Arctic White UPVC', desc: 'Premium multi-chamber UPVC casement window with German multi-point locking system.' },
    { id: 17, src: windowWhite, category: 'upvc', title: 'Classic Casement System', desc: 'Durable and energy-efficient white UPVC window installation in a modern villa.' },
    { id: 18, src: windowCream, category: 'upvc', title: 'Elegant Cream Finish', desc: 'Soft cream-toned UPVC frames providing a warm aesthetic for traditional home designs.' },

    // Aluminium
    { id: 19, src: aluminiumWindow, category: 'aluminium', title: 'Anthracite Slim Profile', desc: 'Ultra-slim aluminium window frames for a minimalist architectural look.' },
    { id: 20, src: windowGrey, category: 'aluminium', title: 'Modern Grey Solution', desc: 'Architectural grey aluminium windows with thermal break technology for energy efficiency.' },
    { id: 21, src: windowBlack, category: 'aluminium', title: 'Jet Black Statement', desc: 'Bold jet black aluminium frames adding a contemporary edge to any residential project.' },

    // Sliding
    { id: 22, src: slidingWindow, category: 'sliding', title: 'Master Slide System', desc: 'Heavy-duty sliding glass door system with smooth-gliding whisper tracks.' },
    { id: 23, src: windowWood, category: 'sliding', title: 'Rosewood Timber Finish', desc: 'Sliding windows with premium wood-grain lamination for a natural, rustic feel.' },
    { id: 24, src: windowGreen, category: 'sliding', title: 'Vibrant Forest Green', desc: 'Unique color-coated sliding windows designed to blend with garden surroundings.' },
  ];

  const colorCollections = [
    {
      title: 'Natural Collection',
      tagline: 'Warmth & Authenticity',
      colors: [
        { name: 'Rustic Charm', image: woodRusticCharm },
        { name: 'Mystic Dark', image: woodMysticDark },
        { name: 'Citrine', image: woodCitrine },
        { name: 'Duke', image: woodDuke },
        { name: 'Royal Chestnut', image: woodRoyalChestnut }
      ]
    },
    {
      title: 'Premium Collection',
      tagline: 'Sophisticated Performance',
      colors: [
        { name: 'Hazel', hex: '#6B7B5E' },
        { name: 'Caramel', hex: '#C68E5E' },
        { name: 'Cedar', hex: '#7F6347' },
        { name: 'Dew', hex: '#E8E4DF' },
        { name: 'Urban Dusk', hex: '#5C6B5E' }
      ]
    },
    {
      title: 'Solid Bold Collection',
      tagline: 'Timeless Elegance',
      colors: [
        { name: 'Urban Mist', hex: '#B8B8B8' },
        { name: 'Mocha', hex: '#7B5B4C' },
        { name: 'Frost', hex: '#F5F5F5' },
        { name: 'Noir', hex: '#2C2C2C' },
        { name: 'Slate', hex: '#4A5568' }
      ]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'living', label: 'Living Rooms' },
    { id: 'kitchen', label: 'Kitchens' },
    { id: 'upvc', label: 'UPVC' },
    { id: 'aluminium', label: 'Aluminium' },
    { id: 'sliding', label: 'Sliding' },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const currentIndex = selectedImage ? filteredItems.findIndex(item => item.id === selectedImage.id) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1]);
    }
  };

  return (
    <main className="gallery-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Our Work</span>
            <h1>Project <span className="text-gradient">Gallery</span></h1>
            <p>Endless Choices, Timeless Shades for Every Style</p>
          </motion.div>
        </div>
      </section>



      {/* Gallery Content */}
      <section className="gallery-content section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Installation Gallery</span>
            <h2>Real World <span className="text-gradient">Applications</span></h2>
          </div>

          {/* Filters */}
          <div className="gallery-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            className="gallery-grid"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item.src} alt={item.title} />
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>

            {currentIndex > 0 && (
              <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
                <FaChevronLeft />
              </button>
            )}

            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-image-wrapper">
                <img src={selectedImage.src} alt={selectedImage.title} />
              </div>
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.desc}</p>
              </div>
            </motion.div>

            {currentIndex < filteredItems.length - 1 && (
              <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
                <FaChevronRight />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
