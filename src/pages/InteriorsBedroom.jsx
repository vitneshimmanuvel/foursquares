import React from 'react';
import { motion } from 'framer-motion';
import './InteriorsSubpage.css';
import ProductCTA from '../components/ProductCTA';

const InteriorsBedroom = () => {
  return (
    <main className="interiors-subpage">
      {/* Hero Section */}
      <section 
        className="int-sub-hero" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
      >
        <div className="int-sub-hero-overlay"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container int-sub-hero-content"
        >
          <h1>WHERE YOUR DREAMS COME TO LIFE</h1>
          <p>
            A bedroom is a sacred space where dreams are made. Bedrooms hold different meanings to different people. 
            For some, it is a place to relax after a long day, while for others, it serves as a creative hub. 
            For couples, it represents intimacy, while for families, it’s a place to bond. Regardless of the purpose, 
            a bedroom is a personal space that reflects the personality of the people to the core.
          </p>
          <br />
          <p>
            At Four Square, we consider bedroom design as an art that should be an extension of the individuals. 
            Our aim is to design a bedroom that not only looks beautiful but also promotes comfort bringing your vision to life.
          </p>
        </motion.div>
      </section>

      <section className="int-section bg-light">
        <div className="container">
          <div className="int-section-header">
            <h2>The Contents Of Your Chamber</h2>
            <div className="diamond-divider">
              <span className="line" style={{width: '60px', backgroundColor: '#0d6eaa'}}></span>
              <span className="diamond" style={{width: '12px', height: '12px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 10px'}}></span>
              <span className="line" style={{width: '60px', backgroundColor: '#0d6eaa'}}></span>
            </div>
            <p>
              We are a home to impeccable bedroom interiors. With exclusive options for good interiors to line a bedroom 
              and superior manufacturing abilities, we aim to create an unparalleled space for you to unwind.
            </p>
          </div>

          {/* Where Comfort meets Style */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Where Comfort meets Style" />
            </div>
            <div className="int-feature-text">
              <h3>Where Comfort meets Style</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                Crafted with high-quality materials, our cots provide a sturdy and comfortable foundation. 
                Our skilled designers & wide range of premium materials allows us to customize the design 
                of the cot to suit your specific preferences or functional needs.
              </p>
              <p>
                Although wood remains a popular choice, we offer various other materials to meet your unique requirements.
              </p>
            </div>
          </motion.div>

          {/* The Most Faithful Sidekick */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row reverse"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="The Most Faithful Sidekick" />
            </div>
            <div className="int-feature-text">
              <h3>The Most Faithful Sidekick</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                A dependable bedside table is an essential element of bedroom furniture and currently in high demand. 
                Although they essentially serve the same purpose, there are various types of side tables available.
              </p>
              <p>
                With a carefully selected side table that complements your bed perfectly, you can elevate the overall aesthetic of your bedroom.
              </p>
            </div>
          </motion.div>

          {/* Where Elegance Meets Trend */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Where Elegance Meets Trend" />
            </div>
            <div className="int-feature-text">
              <h3>Where Elegance Meets Trend</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                If you aim to create a wardrobe that perfectly balances both elegant style and effortless functionality, we are here to help. 
                We understand that it is an important component of both your bedroom and interior design, and therefore, we strive to craft it to perfection.
              </p>
              <p>
                Our experts consider your requirements and the available space to create a wardrobe that is designed to your needs.
              </p>
            </div>
          </motion.div>

          {/* Upgrade your Home Office */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row reverse"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Upgrade your Home Office" />
            </div>
            <div className="int-feature-text">
              <h3>Upgrade your Home Office</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                These days when a hybrid work model is becoming the talk of the town, or taking classes online are all common practices, 
                having a study table is essential for maintaining good posture and focus.
              </p>
              <p>
                However, the study table doesn’t have to be old-fashioned and simple; it can be modern, trendy, and even add a pop of colour to your space. 
                A calm and organized workspace enhances the overall aesthetics of your bedroom.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
      <ProductCTA 
        title="Interested in a Bedroom Redesign?" 
        subtitle="Get a free consultation and customized quotation to design your perfect cozy bedroom sanctuary" 
        btnText="Get Free Quote"
      />
    </main>
  );
};

export default InteriorsBedroom;
