import React from 'react';
import './UpvcColours.css';
import ProductCTA from '../components/ProductCTA';
import windowWood from '../assets/images/window_color_wood.png';
import woodRusticCharm from '../assets/images/wood_rustic_charm.png';
import woodMysticDark from '../assets/images/wood_mystic_dark.png';
import woodCitrine from '../assets/images/wood_citrine.jpg';
import woodDuke from '../assets/images/wood_duke.png';
import woodRoyalChestnut from '../assets/images/wood_royal_chestnut.png';

const UpvcColours = () => {
  const woodenLaminates = [
    { name: 'Rustic Charm', image: woodRusticCharm },
    { name: 'Mystic Dark', image: woodMysticDark },
    { name: 'Citrine', image: woodCitrine },
    { name: 'Duke', image: woodDuke },
    { name: 'Royal Chestnut', image: woodRoyalChestnut },
    { name: 'Walnut', color: '#5C4033' },
    { name: 'Mahogany', color: '#4A0E0E' },
    { name: 'Light Oak', color: '#D4B895' },
    { name: 'Dark Oak', color: '#3A2818' },
    { name: 'Teak', color: '#825C37' },
  ];

  const contemporaryLaminates = [
    { name: 'Anthracite Grey', color: '#383E42' },
    { name: 'Basalt Grey', color: '#4C5156' },
    { name: 'Quartz Grey', color: '#6A6E73' },
    { name: 'Jet Black', color: '#1A1A1A' },
    { name: 'Steel Blue', color: '#2A4B7C' },
    { name: 'Signal Blue', color: '#1E3F66' },
    { name: 'Dark Red', color: '#6B1B1B' },
    { name: 'Moss Green', color: '#2D4B2D' },
    { name: 'Cream White', color: '#FDFBF7' },
    { name: 'Pure White', color: '#FFFFFF' },
  ];

  return (
    <main className="colours-page">
      {/* Hero Banner */}
      <section className="colours-hero">
        <div className="colours-hero-bg">
          <div className="stripe" style={{ backgroundImage: `url(${woodRusticCharm})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="stripe" style={{ backgroundImage: `url(${woodMysticDark})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="stripe" style={{ backgroundImage: `url(${woodCitrine})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="stripe" style={{ backgroundImage: `url(${woodDuke})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="stripe" style={{ backgroundImage: `url(${woodRoyalChestnut})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="stripe textured-stripe" style={{ backgroundColor: '#4C5156' }}></div>
          <div className="stripe textured-stripe" style={{ backgroundColor: '#6A6E73' }}></div>
          <div className="stripe textured-stripe" style={{ backgroundColor: '#1A1A1A' }}></div>
        </div>
        <div className="colours-hero-overlay"></div>
        <div className="container colours-hero-content">
          <h1>COLORED UPVC WINDOWS & DOORS LAMINATE OPTIONS</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="colours-intro">
        <div className="container">
          <h2>A TOUCH OF THE SUBLIME</h2>
          <div className="diamond-divider">
            <span className="line"></span>
            <span className="diamond"></span>
            <span className="line"></span>
          </div>
          <h3>Choice of aesthetically pleasing laminates for our uPVC Windows profiles</h3>
          <p>
            We offer a wide range of laminate options ranging from contemporary colors to wooden textures for uPVC Windows Profiles. 
            We provide colors that are best suited for your homes. Our laminates are imported from Europe. They are equipped to deal 
            with tropical weather and come with a 20 year warranty. Wooden textures have always been an evergreen choice when it comes 
            to beautifying our properties. In a bid to preserve nature, wooden textured laminates are a perfect replacement. We house a 
            wide range of wood grain textured laminates in Mahogany, Light Oak, Walnut and more.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="colours-features">
        <div className="container features-grid">
          <div className="features-image">
            <img src={windowWood} alt="Wood Laminate Corner" />
          </div>
          <div className="features-content">
            <div className="feature-block">
              <h2>FEATURES</h2>
              <div className="diamond-divider left">
                <span className="line"></span>
                <span className="diamond"></span>
                <span className="line"></span>
              </div>
              <ul>
                <li>Laminates are equipped with PVDF</li>
                <li>Extreme weather resistance</li>
                <li>Crack resistance</li>
                <li>Colour stability</li>
                <li>Gloss retention</li>
                <li>Easy maintenance</li>
                <li>Environment-friendly (Imported PUR base Adhesive)</li>
              </ul>
            </div>

            <div className="feature-block mt-lg">
              <h2>FEATURES OF LAMINATE ADHESION</h2>
              <div className="diamond-divider left">
                <span className="line"></span>
                <span className="diamond"></span>
                <span className="line"></span>
              </div>
              <ul>
                <li>Latest European hot melt lamination technology.</li>
                <li>High performance PUR adhesives.</li>
                <li>Certification/Accreditations from European testing organisations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Laminates Wooden Grid */}
      <section className="colours-grid-section">
        <div className="container">
          <h2>LAMINATES - WOODEN</h2>
          <div className="diamond-divider">
            <span className="line"></span>
            <span className="diamond"></span>
            <span className="line"></span>
          </div>
          
          <div className="laminate-grid">
            {woodenLaminates.map((lam, index) => (
              <div key={index} className="laminate-item" style={{ backgroundColor: lam.color }}>
                {lam.image && <img src={lam.image} alt={lam.name} className="laminate-img" />}
                <div className="laminate-overlay">
                  <span>{lam.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laminates Contemporary Grid */}
      <section className="colours-grid-section bg-light">
        <div className="container">
          <h2>LAMINATES - CONTEMPORARY</h2>
          <div className="diamond-divider">
            <span className="line"></span>
            <span className="diamond"></span>
            <span className="line"></span>
          </div>
          
          <div className="laminate-grid">
            {contemporaryLaminates.map((lam, index) => (
              <div key={index} className="laminate-item" style={{ backgroundColor: lam.color }}>
                {lam.image && <img src={lam.image} alt={lam.name} className="laminate-img" />}
                <div className="laminate-overlay">
                  <span>{lam.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProductCTA 
        title="Want custom laminated colors?" 
        subtitle="Request our premium tactile color swatch booklet or custom architectural consult for color schemes" 
        btnText="Get Free Quote"
      />
    </main>
  );
};

export default UpvcColours;
