import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logoImg from '../assets/images/f2_logo-removebg-preview.png';
import './Header.css';

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
    { path: '/products/interiors', label: 'Interiors' },
    { path: '/products/upvc', label: 'UPVC Windows' },
    { path: '/products/aluminium', label: 'Aluminium' },
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
                    {productSubLinks.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`dropdown-item ${location.pathname === sub.path ? 'active' : ''}`}
                        onClick={() => setIsProductsOpen(false)}
                      >
                        {sub.label}
                      </Link>
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
                      {productSubLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`mobile-dropdown-item ${location.pathname === sub.path ? 'active' : ''}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
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
