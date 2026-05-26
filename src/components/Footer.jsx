import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logoImg from '../assets/images/f2_logo-removebg-preview.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoImg} alt="Four Square Logo" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              Transforming spaces with premium UPVC & Aluminium windows.
              Your trusted partner for elegant interiors and lasting quality.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-link" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="social-link" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Our Products</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-column">
            <h4 className="footer-heading">Our Products</h4>
            <ul className="footer-links">
              <li><Link to="/products/interiors">Interiors</Link></li>
              <li><Link to="/products/upvc">UPVC Windows</Link></li>
              <li><Link to="/products/upvc-doors">UPVC Doors</Link></li>
              <li><Link to="/products/aluminium">Aluminium Systems</Link></li>
              <li><Link to="/products/aluminium/sliding">Aluminium Sliders</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Design Street, Mumbai, Maharashtra 400001</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>info@foursquare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Four Square. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
