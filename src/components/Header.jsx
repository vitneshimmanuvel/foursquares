import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import logoImg from '../assets/images/f2_logo-removebg-preview.png';
import './Header.css';

// --- Desktop Nested Dropdown Item ---
const DropdownItem = ({ item, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const hasChildren = item.children && item.children.length > 0;
  let hoverTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setIsOpen(false), 150);
  };

  if (!hasChildren) {
    return (
      <Link
        to={item.path || '#'}
        className={`dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="nested-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={item.path || '#'}
        className={`dropdown-item nested-dropdown-toggle ${location.pathname === item.path ? 'active' : ''}`}
        onClick={(e) => {
          if (!item.path) e.preventDefault();
          else closeMenu();
        }}
      >
        {item.label}
        <FaChevronRight className="dropdown-arrow right-arrow" />
      </Link>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="dropdown-menu sub-menu"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {item.children.map((child, idx) => (
              <DropdownItem key={idx} item={child} closeMenu={closeMenu} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Mobile Nested Dropdown Item ---
const MobileDropdownItem = ({ item, closeMenu, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        to={item.path || '#'}
        className={`mobile-dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
        style={{ paddingLeft: `calc(var(--space-md) + ${level * 15}px)` }}
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="mobile-nested-dropdown">
      <button
        className={`mobile-dropdown-item mobile-dropdown-toggle ${isOpen ? 'active' : ''}`}
        style={{ paddingLeft: `calc(var(--space-md) + ${level * 15}px)` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.label}
        <FaChevronDown className={`dropdown-arrow ${isOpen ? 'open' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            {item.children.map((child, idx) => (
              <MobileDropdownItem key={idx} item={child} closeMenu={closeMenu} level={level + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const dropdownTimeout = useRef(null);

  const [showLargeLogo, setShowLargeLogo] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const resetNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsScrolled(false);
        setShowLargeLogo(true);
      } else {
        setIsScrolled(true);
      }
      lastScrollY = currentScrollY;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY < 50) {
            setIsScrolled(false);
            setShowLargeLogo(true);
          } else {
            setIsScrolled(true);
            if (currentScrollY < lastScrollY) {
              setShowLargeLogo(true);
            } else if (currentScrollY > lastScrollY + 5) {
              setShowLargeLogo(false);
            }
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    resetNavbar();
    window.addEventListener('scroll', handleScroll, { passive: true });
    const timer = setTimeout(resetNavbar, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
    setIsMobileProductsOpen(false);
  }, [location]);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setIsProductsOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200);
  };

  const productSubLinks = [
    { 
      path: '/products/interiors', 
      label: 'Interiors',
      children: [
        { path: '/products/interiors/full-home', label: 'Full Home Interiors' },
        { path: '/products/interiors/kitchen', label: 'Modular Kitchen' },
        { path: '/products/interiors/living-room', label: 'Living Room' },
        { path: '/products/interiors/bedroom', label: 'Bedroom' }
      ]
    },
    { 
      path: '/products/upvc', 
      label: 'UPVC Windows',
      children: [
        { path: '/products/upvc/casement', label: 'Casement Windows' },
        { path: '/products/upvc/sliding', label: 'Sliding Windows' },
        { path: '/products/upvc/tilt-turn', label: 'Tilt & Turn Windows' },
        { path: '/products/upvc/colours', label: 'Colour Options' },
      ]
    },
    { 
      path: '/products/upvc-doors', 
      label: 'UPVC Doors',
      children: [
        { path: '/products/upvc-doors/casement', label: 'Casement uPVC Doors' },
        { path: '/products/upvc-doors/sliding', label: 'Sliding uPVC Doors' },
        { path: '/products/upvc-doors/slide-fold', label: 'Slide & Fold uPVC Doors' },
        { path: '/products/upvc-doors/colours', label: 'Colour Options' },
      ]
    },
    { 
      path: '/products/aluminium', 
      label: 'Aluminium',
      children: [
        { path: '/products/aluminium/sliding', label: 'Sliding Systems' },
        { path: '/products/aluminium/casement', label: 'Casement Systems' },
      ]
    },
  ];

  const isProductsActive = location.pathname.startsWith('/products');

  return (
    <div className={`navbar-wrapper`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <a href="tel:+919876543210" className="top-bar-item">
              <FaPhone />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@foursquare.com" className="top-bar-item">
              <FaEnvelope />
              <span>info@foursquare.com</span>
            </a>
          </div>
          <div className="top-bar-right">
            Premium Windows & Interiors
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header`}>
        <div className="container header-content">
          <Link to="/" className="logo">
            <img src={logoImg} alt="Four Square Logo" className="logo-img" />
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="nav-dropdown"
              ref={dropdownRef}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to="/products"
                className={`nav-link ${isProductsActive ? 'active' : ''}`}
              >
                Our Products <FaChevronDown className={`dropdown-arrow ${isProductsOpen ? 'open' : ''}`} />
              </Link>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {productSubLinks.map((sub, idx) => (
                      <DropdownItem key={idx} item={sub} closeMenu={() => setIsProductsOpen(false)} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/gallery"
              className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          <div className="header-actions">
            <Link to="/contact" className="btn btn-primary header-cta">
              Get Quote
            </Link>
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="nav-mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/"
                className={`nav-link-mobile ${location.pathname === '/' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Products Accordion */}
              <div className="mobile-dropdown">
                <button
                  className={`nav-link-mobile mobile-dropdown-toggle ${isProductsActive ? 'active' : ''}`}
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                >
                  Our Products <FaChevronDown className={`dropdown-arrow ${isMobileProductsOpen ? 'open' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileProductsOpen && (
                    <motion.div
                      className="mobile-dropdown-menu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Link
                        to="/products"
                        className="mobile-dropdown-item"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        All Products
                      </Link>
                      {productSubLinks.map((sub, idx) => (
                        <MobileDropdownItem key={idx} item={sub} closeMenu={() => setIsMobileMenuOpen(false)} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/gallery"
                className={`nav-link-mobile ${location.pathname === '/gallery' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className={`nav-link-mobile ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`nav-link-mobile ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;

