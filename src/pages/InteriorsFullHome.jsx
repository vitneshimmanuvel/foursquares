import React from 'react';
import { motion } from 'framer-motion';
import './InteriorsSubpage.css';

const InteriorsFullHome = () => {
  return (
    <main className="interiors-subpage">
      {/* Hero Section */}
      <section 
        className="int-sub-hero" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
      >
        <div className="int-sub-hero-overlay"></div>
        <div className="container int-sub-hero-content">
          <h1>Outstanding Home Interiors</h1>
          <p>
            We have mastered our processes to bring unique interior designs to life and make your space outshine. 
            Our vision of creating remarkable interiors with distinctive styles, colour schemes, décor and furnishings 
            is what makes us excel and stand apart from other interior design entities.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="int-section">
        <div className="container">
          
          {/* Indian Classic Style */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Indian Classic Style" />
            </div>
            <div className="int-feature-text">
              <h3>Indian Classic Style</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                Classic interior design exudes luxury and sophistication featuring traditional elements such as rich textured fabrics and intricate patterns.
              </p>
              <p>
                The colour palette for classic interior design is muted, including warm tones like cream, and beige. This design style emphasizes on symmetry and balance making it a perfect choice for those who appreciate timeless aesthetics and a sense of elegance in their living spaces.
              </p>
            </div>
          </motion.div>

          {/* Contemporary Style */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row reverse"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Contemporary Style" />
            </div>
            <div className="int-feature-text">
              <h3>Contemporary Style</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                Modern design style is a reflection of calm and contemporary lifestyle with clean lines, sleek surfaces, and minimal aesthetics that bring harmony.
              </p>
              <p>
                The focal point of modern design is simplicity and functionality, with neutral colours, natural materials and a focus on form over ornamentation. Our team of experienced designers specialize in curating interiors with a focus on form over ornamentation to enhance the functionality in your space.
              </p>
            </div>
          </motion.div>

          {/* Traditional Style */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Traditional Style" />
            </div>
            <div className="int-feature-text">
              <h3>Traditional Style</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                Traditional design style draws inspiration from 18th and 19th century European decor, featuring rich colours, ornate details, and plush fabrics.
              </p>
              <p>
                It is characterized by elegance and grandeur, offering a sense of history and heritage. Incorporating antique furnishings and vintage elements, traditional design adds a touch of classic charm to your living space.
              </p>
            </div>
          </motion.div>

          {/* Minimalistic Style */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row reverse"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Minimalistic Style" />
            </div>
            <div className="int-feature-text">
              <h3>Minimalistic Style</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                Minimalistic design embraces the "less is more" philosophy, stripping away the excess to focus on the essential elements of a space.
              </p>
              <p>
                Characterized by clean lines, a monochromatic colour palette, and functional furniture, minimalistic design creates a sense of calm and clarity.
              </p>
            </div>
          </motion.div>

          {/* English Classic Style */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="English Classic Style" />
            </div>
            <div className="int-feature-text">
              <h3>English Classic Style</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                English classic design brings a touch of country charm to your living space, featuring floral patterns, comfortable furnishings, and a warm, inviting atmosphere.
              </p>
              <p>
                With a focus on comfort and coziness, English classic design incorporates plush sofas, vintage accents, and soft, warm lighting to create a welcoming environment.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
};

export default InteriorsFullHome;
