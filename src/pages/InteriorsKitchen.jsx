import React from 'react';
import { motion } from 'framer-motion';
import './InteriorsSubpage.css';
import ProductCTA from '../components/ProductCTA';

const InteriorsKitchen = () => {
  return (
    <main className="interiors-subpage">
      {/* Hero Section */}
      <section 
        className="int-sub-hero" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
      >
        <div className="int-sub-hero-overlay"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container int-sub-hero-content"
        >
          <h1>Modular Kitchen</h1>
          <p>
            In the past, a kitchen was solely designated for cooking. However, it has now evolved into a more 
            multifaceted and intimate space – a place for family gatherings where memories are made over food.
          </p>
          <br />
          <p>
            Our designers aim to understand your true desires and integrate them seamlessly into your kitchen 
            design, creating a space that is reflective of your individuality.
          </p>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="int-section bg-light">
        <div className="container">
          <div className="int-section-header">
            <h2>Steps To Setup The Perfect Kitchen</h2>
            <div className="diamond-divider">
              <span className="line" style={{width: '60px', backgroundColor: '#0d6eaa'}}></span>
              <span className="diamond" style={{width: '12px', height: '12px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 10px'}}></span>
              <span className="line" style={{width: '60px', backgroundColor: '#0d6eaa'}}></span>
            </div>
          </div>
          
          <div className="int-grid">
            <div className="int-card">
              <div className="int-card-icon">1</div>
              <h3>Choose the layout you want</h3>
              <p>
                With a variety of different layouts to choose from, there is one for all kinds of kitchen needs. 
                From the very compact L Shaped Kitchen to the larger U shaped ones, we have a team of experts 
                to create a kitchen that matches your style.
              </p>
            </div>
            <div className="int-card">
              <div className="int-card-icon">2</div>
              <h3>Decide on the number of units</h3>
              <p>
                The three fundamental unit categories for Kitchen design are - base unit, wall unit and tall unit. 
                There are multiple options for you to choose from depending on space, style, and appliances.
              </p>
            </div>
            <div className="int-card">
              <div className="int-card-icon">3</div>
              <h3>Decide the fixture to embed</h3>
              <p>
                Choosing the type of structure will have a profound impact on the functionality of the units. 
                This decision will be based on your preference and ease of access.
              </p>
            </div>
            <div className="int-card">
              <div className="int-card-icon">4</div>
              <h3>Choose materials for the surface</h3>
              <p>
                Our catalogue offers a wide variety of aesthetically appealing materials: wood, acrylic and many more. 
                Our inventory is filled with the most vivid pieces to select from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kitchen Triangle */}
      <section className="int-section">
        <div className="container">
          <div className="int-section-header">
            <h2>The Kitchen Triangle</h2>
            <div className="diamond-divider">
              <span className="line" style={{width: '60px', backgroundColor: '#0d6eaa'}}></span>
              <span className="diamond" style={{width: '12px', height: '12px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 10px'}}></span>
              <span className="line" style={{width: '60px', backgroundColor: '#0d6eaa'}}></span>
            </div>
            <p>
              The kitchen work triangle is a principle to create an efficient work flow in the kitchen. It refers to an imaginary triangle between the three main areas: the sink, the stove, and the refrigerator. The theory says that by placing these three work areas in close proximity and forming a triangle, allows for a more efficient flow of work. While this is a helpful guideline for designing a functional kitchen, it’s just one of the aspects of kitchen design. Other factors to consider include storage, lighting, and overall flow and aesthetics of the space.
            </p>
          </div>

          {/* Layouts */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="L Shaped Kitchen" />
            </div>
            <div className="int-feature-text">
              <h3>L Shaped Kitchen</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                An L-shaped kitchen consisting of two adjacent walls, one longer than the other is most popular kitchen layout. Ideal for small to medium-sized kitchens, it uses corner space effectively, creating ample counter space and storage options. It works well in both open-plan and closed-plan homes, providing a clear separation between cooking and dining areas. With its efficient use of space, open flow, and functionality, it’s no wonder why it’s a popular choice among homeowners.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row reverse"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="U Shaped Kitchen" />
            </div>
            <div className="int-feature-text">
              <h3>U Shaped Kitchen</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                A U-shaped kitchen is a popular kitchen layout too that maximizes the use of walls by providing ample storage and counter space. The three walls of the U-shaped kitchen can be used to house appliances, cabinets, and countertops. It ensures easy access to all areas of the kitchen. This layout is perfect for homeowners who want a functional and stylish kitchen that maximizes the use of space.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Galley Kitchen" />
            </div>
            <div className="int-feature-text">
              <h3>Galley Shaped Kitchen</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                A galley kitchen featuring two opposing walls facing each other is the perfect option for a narrow corridor space. Although the floor space is narrow and resembles a walkway, the storage space ratio is much higher. When designed well, a galley kitchen is able to perfectly execute the kitchen work triangle. Its sleek and elongated nature makes it a practical choice for homeowners.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row reverse"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="One Wall Kitchen" />
            </div>
            <div className="int-feature-text">
              <h3>One Wall Kitchen</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                A One wall kitchen is commonly found in studio apartments or small homes, where space is limited. Efficient in terms of space utilization, it provides easy access to all the kitchen appliances and saves a lot of space. It’s also easy to clean and maintain. However, due to the limited space, it can be challenging to incorporate all the necessary things and difficult to create an efficient work triangle. But it’s a practical and efficient choice for those with limited space.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Peninsular Kitchen" />
            </div>
            <div className="int-feature-text">
              <h3>Peninsular Kitchen</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                A peninsular kitchen features a connected island that extends from one of the main walls and is attached to the main cabinets, creating a “peninsula” that separates the kitchen from living areas. It provides additional storage, while also serving as a natural room divider, perfect for open-concept homes. It can be used as a breakfast bar or informal dining area. This layout helps to optimize the kitchen work triangle by creating a more efficient flow.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="int-feature-row reverse"
          >
            <div className="int-feature-img">
              <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Island Kitchen" />
            </div>
            <div className="int-feature-text">
              <h3>Island Kitchen</h3>
              <div className="diamond-divider left" style={{marginBottom: '20px'}}>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
                <span className="diamond" style={{width: '8px', height: '8px', border: '2px solid #0d6eaa', transform: 'rotate(45deg)', margin: '0 8px'}}></span>
                <span className="line" style={{width: '40px', backgroundColor: '#0d6eaa'}}></span>
              </div>
              <p>
                An island kitchen features a freestanding island in the center of the room. The island can serve a variety of purposes, such as additional storage, countertop space, seating, or even as a secondary sink or cooking area. In addition, an island kitchen can also function as a social hub for the home. It’s a popular choice for those who want to maximize their kitchen space while creating a stylish design.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
      <ProductCTA 
        title="Interested in a Modular Kitchen Design?" 
        subtitle="Get a free design consultation, layout walkthrough, and customized quotation for your kitchen" 
        btnText="Get Free Quote"
      />
    </main>
  );
};

export default InteriorsKitchen;
