import React from 'react';
import { motion } from 'framer-motion';
import './InteriorsSubpage.css';

const InteriorsLivingRoom = () => {
  return (
    <main className="interiors-subpage">
      {/* Hero Section */}
      <section 
        className="int-sub-hero" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
      >
        <div className="int-sub-hero-overlay"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container int-sub-hero-content"
        >
          <h1>Designed to Enhance Your Entertainment Space</h1>
          <p>
            One of the most crucial yet often overlooked elements of interior design is cabinetry, 
            which can make a significant impact on the overall aesthetic of any room. 
            Cabinets are available in various styles and storage capacities, making them an important trendsetter in home decor.
          </p>
        </motion.div>
      </section>

      <section className="int-section">
        <div className="container">
          
          <div className="int-section-header">
            <h2>Watch It in Style For Life</h2>
            <div className="diamond-divider">
              <span className="line" style={{width: '60px', backgroundColor: '#0d6eaa'}}></span>
              <span className="diamond" style={{width: '12px', height: '12px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 10px'}}></span>
              <span className="line" style={{width: '60px', backgroundColor: '#0d6eaa'}}></span>
            </div>
            <p>
              Mounting the television in the living room is definitely a big decision when it comes to interior decor, 
              for it is where everyone gets together. There are two definite styles that you can choose from with its own set of attributes.
            </p>
          </div>

          {/* Floor Standing */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Floor Standing" />
            </div>
            <div className="int-feature-text">
              <h3>Floor Standing</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                These low-level fitted cabinets are mounted on a baseboard and create a floor standing style 
                that is contemporary in nature.
              </p>
              <p>
                These are typically larger in size and are a popular choice for those who need additional storage space.
              </p>
            </div>
          </motion.div>

          {/* Hung on Wall */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row reverse"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hung on Wall" />
            </div>
            <div className="int-feature-text">
              <h3>Hung on Wall</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                These seem like they are floating as they are fitted on to the Unit. They are smaller in size and 
                can be used to store a variety of items, such as books, decorative objects, or electronic equipment.
              </p>
              <p>
                Popular in modern interior design, as they provide a clean, streamlined look to a room and can create 
                the illusion of more space.
              </p>
            </div>
          </motion.div>

          <div className="int-grid">
            <div className="int-card">
              <h3>Coffee Table</h3>
              <p>
                As the focal point of the room, it’s crucial that the centre coffee table is visually appealing 
                since it draws the attention of everyone in the space.
              </p>
            </div>
            <div className="int-card">
              <h3>Console Unit</h3>
              <p>
                Another eye grabbing element in your living room is the console unit and selecting the perfect 
                style for this is of great importance, given the numerous options available.
              </p>
            </div>
            <div className="int-card">
              <h3>Living Partition</h3>
              <p>
                Prime example of exquisite decor, living partitions can make or break your sense of living room style.
              </p>
            </div>
            <div className="int-card">
              <h3>Wall Panel</h3>
              <p>
                Having an elegant wall panelling into your living room decor can seamlessly bring all the elements 
                together for a cohesive and polished look.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default InteriorsLivingRoom;
