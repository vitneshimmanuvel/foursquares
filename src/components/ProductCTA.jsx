import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProductCTA = ({ 
  title = "Interested in our premium designs?", 
  subtitle = "Get a free site visit and customized quotation", 
  btnText = "Get Free Quote" 
}) => {
  return (
    <section className="product-section section-white" style={{ paddingTop: '20px', paddingBottom: '80px' }}>
      <div className="container">
        <motion.div 
          className="cta-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #0d2137, #1a3a50)',
            borderRadius: '20px',
            padding: '50px 40px',
            boxShadow: '0 15px 40px rgba(13, 33, 55, 0.15)'
          }}
        >
          <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '15px', color: '#fff' }}>{title}</h3>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>{subtitle}</p>
          <Link 
            to="/contact" 
            className="btn btn-primary" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '15px 35px',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '30px',
              boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            {btnText} <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCTA;
