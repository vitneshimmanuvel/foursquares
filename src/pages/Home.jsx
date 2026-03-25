import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShieldAlt, FaLeaf, FaPaintBrush, FaCogs, FaClock, FaAward, FaQuoteLeft, FaStar, FaEye, FaBullseye, FaSeedling, FaTree, FaGlobeAmericas, FaCheckCircle } from 'react-icons/fa';
import Hero from '../components/Hero';
import ImageMarquee from '../components/ImageMarquee';
import CounterAnimation, { SlideIn, StaggerChildren, StaggerItem } from '../components/CounterAnimation';
import './Home.css';

// Import images
import interiorLiving from '../assets/images/interior_living.png';
import upvcWindow from '../assets/images/upvc_window.png';
import aluminiumWindow from '../assets/images/aluminium_window.png';
import kitchenShowcase from '../assets/images/kitchen_showcase.png';
import bedroomShowcase from '../assets/images/bedroom_showcase.png';
import livingRoomShowcase from '../assets/images/living_room_showcase.png';

const Home = () => {
  const visionRef = useRef(null);
  const whyRef = useRef(null);
  const treeContainerRef = useRef(null);
  const [treeGrowth, setTreeGrowth] = useState(0);
  
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });

  // Tree scroll animation 
  const { scrollYProgress: treeScrollProgress } = useScroll({
    target: treeContainerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = treeScrollProgress.on("change", (latest) => {
      setTreeGrowth(latest);
    });
    return () => unsubscribe();
  }, [treeScrollProgress]);

  // Tree story text based on growth
  const getTreeStoryIndex = () => {
    if (treeGrowth < 0.2) return 0;
    if (treeGrowth < 0.4) return 1;
    if (treeGrowth < 0.6) return 2;
    if (treeGrowth < 0.8) return 3;
    return 4;
  };

  const treeStories = [
    { title: 'The Seed of Change', text: 'Every great journey begins with a single step. At Four Square, we planted the seed of sustainability from day one — believing that beautiful living spaces and a healthy planet go hand in hand.' },
    { title: 'Roots of Commitment', text: 'Our roots run deep in eco-conscious manufacturing. We source materials responsibly and implement zero-waste processes that nurture the environment while creating premium products.' },
    { title: 'Growing Together', text: 'Like a sapling reaching for sunlight, our green initiatives have grown stronger each year. We\'ve planted over 500 trees and reduced our carbon footprint by 40% through innovative practices.' },
    { title: 'Branches of Impact', text: 'Our impact extends beyond our factory walls. We partner with local communities for reforestation projects and supply energy-efficient windows that reduce energy consumption in thousands of homes.' },
    { title: 'A Forest of Tomorrow', text: 'What started as one seed has grown into a forest of change. Our vision is a world where every home is sustainable, every product is eco-friendly, and every choice makes the planet greener.' },
  ];

  const storyIndex = getTreeStoryIndex();

  const whyFourSquare = [
    { icon: <FaShieldAlt />, title: '25+ Years of Trust', description: 'A legacy of excellence and reliability in windows and interiors.' },
    { icon: <FaPaintBrush />, title: '200+ Color Options', description: 'From premium solid colors to natural wood-grain finishes.' },
    { icon: <FaCogs />, title: 'German Engineering', description: 'World-class technology and precision craftsmanship.' },
    { icon: <FaAward />, title: 'Up to 30 Year Warranty', description: 'Industry-leading warranty for complete peace of mind.' },
  ];

  // Sakura petals - memoized so positions don't change on re-render
  const sakuraPetals = useMemo(() => 
    [...Array(25)].map((_, i) => ({
      left: `${3 + Math.random() * 94}%`,
      delay: `${i * 0.5}s`,
      duration: `${3.5 + Math.random() * 5}s`,
      size: 7 + Math.random() * 12,
      drift: (Math.random() - 0.5) * 120,
    })), []);

  const productShowcases = [
    {
      badge: 'Interiors',
      title: 'Complete Interior',
      highlight: 'Solutions',
      text: 'Transform your living spaces with our complete range of modular kitchens, bedroom furniture, and living room solutions. Crafted to perfection with premium materials and contemporary designs.',
      subtext: 'From modular kitchens to luxury wardrobes — every piece is custom-designed for your home.',
      image: interiorLiving,
      link: '/products/interiors',
    },
    {
      badge: 'UPVC',
      title: 'Premium UPVC',
      highlight: 'Windows',
      text: 'Energy-efficient, low-maintenance premium UPVC windows with German engineering. Multi-chamber profiles for superior thermal insulation and noise reduction.',
      subtext: 'Reduce cooling costs by up to 40% with our advanced UPVC window systems.',
      image: upvcWindow,
      link: '/products/upvc',
    },
    {
      badge: 'Aluminium',
      title: 'Aluminium',
      highlight: 'Windows & Doors',
      text: 'Ultra-slim aluminium profiles with maximum glass area for contemporary spaces. Advanced thermal break technology with powder-coated finishes in 200+ colors.',
      subtext: 'Sleek, modern, and built to last — the perfect choice for contemporary architecture.',
      image: aluminiumWindow,
      link: '/products/aluminium',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh & Meera Kumar',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      project: '3 BHK Apartment',
      image: 'RK',
      text: 'Four Square completely transformed our apartment! The aluminium windows have reduced our AC bills by 40%. Highly recommend!',
    },
    {
      name: 'Priya Sharma',
      location: 'Bangalore, Karnataka',
      rating: 5,
      project: 'Villa Renovation',
      image: 'PS',
      text: 'The aluminium windows look absolutely stunning. Modern, sleek, and the sliding mechanism is so smooth.',
    },
  ];

  return (
    <main>
      <Hero />
      
      {/* Vision & Mission Section */}
      <section className="vision-mission-section" ref={visionRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ y: 40 }}
            animate={visionInView ? { y: 0 } : { y: 40 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Our Purpose</span>
            <h2>Vision & <span className="text-gradient">Mission</span></h2>
          </motion.div>

          <div className="vision-mission-grid">
            <motion.div
              className="vm-card vision-card"
              initial={{ x: -60 }}
              animate={visionInView ? { x: 0 } : { x: -60 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="vm-icon"><FaEye /></div>
              <h3>Our Vision</h3>
              <p>To be India's most trusted brand for premium windows and interior solutions — setting new standards in quality, design, and sustainability for every living space.</p>
            </motion.div>

            <motion.div
              className="vm-card mission-card"
              initial={{ x: 60 }}
              animate={visionInView ? { x: 0 } : { x: 60 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="vm-icon"><FaBullseye /></div>
              <h3>Our Mission</h3>
              <p>To deliver world-class aluminium and UPVC window systems combined with stunning interior solutions, using German engineering and sustainable practices — making premium living accessible to every Indian home.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <ImageMarquee />

      {/* Product Showcases: Interiors, UPVC, Aluminium */}
      {productShowcases.map((item, index) => (
        <section
          key={index}
          className={`story-section ${index % 2 !== 0 ? 'story-section-reverse' : ''} ${index % 2 === 0 ? 'section-warm' : 'section-linen'}`}
        >
          <div className="container">
            <div className="story-grid">
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    className="story-image"
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="image-accent-dot"></div>
                  </motion.div>
                  <motion.div
                    className="story-content"
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <span className="story-badge">{item.badge}</span>
                    <h2>{item.title} <span className="text-gradient">{item.highlight}</span></h2>
                    <p className="story-text">{item.text}</p>
                    <p className="story-subtext">{item.subtext}</p>
                    <div className="explore-links">
                      <Link to="/products/interiors" className="explore-link">Interiors</Link>
                      <Link to="/products/upvc" className="explore-link">UPVC</Link>
                      <Link to="/products/aluminium" className="explore-link">Aluminium</Link>
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className="story-content"
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <span className="story-badge">{item.badge}</span>
                    <h2>{item.title} <span className="text-gradient">{item.highlight}</span></h2>
                    <p className="story-text">{item.text}</p>
                    <p className="story-subtext">{item.subtext}</p>
                    <div className="explore-links">
                      <Link to="/products/interiors" className="explore-link">Interiors</Link>
                      <Link to="/products/upvc" className="explore-link">UPVC</Link>
                      <Link to="/products/aluminium" className="explore-link">Aluminium</Link>
                    </div>
                  </motion.div>
                  <motion.div
                    className="story-image"
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="image-accent-dot reverse"></div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Sakura Tree Section - Japanese Art Style */}
      <section className="sakura-section" ref={treeContainerRef}>
        <div className="sakura-sticky">
          {/* Ambient background elements */}
          <div className="sakura-bg-elements">
            <div className="bg-circle bg-circle-1"></div>
            <div className="bg-circle bg-circle-2"></div>
            <div className="bg-mountain"></div>
            <div className="bg-mountain bg-mountain-2"></div>
          </div>

          <div className="sakura-container">
            {/* Left Side - Story Text */}
            <div className="sakura-left">
              <div className="sakura-badge">
                <FaSeedling />
                <span>Green Energy Initiative</span>
              </div>
              <div className="tree-story-container">
                {treeStories.map((story, i) => (
                  <div
                    key={i}
                    className={`tree-story-item ${storyIndex === i ? 'active' : ''}`}
                  >
                    <h2>{story.title}</h2>
                    <p>{story.text}</p>
                  </div>
                ))}
              </div>
              <div className="sakura-stats-row">
                <div className="sakura-stat">
                  <span className="sakura-stat-number">
                    <CounterAnimation target={500} suffix="+" duration={2} />
                  </span>
                  <span className="sakura-stat-label">Trees Planted</span>
                </div>
                <div className="sakura-stat">
                  <span className="sakura-stat-number">
                    <CounterAnimation target={40} suffix="%" duration={2} />
                  </span>
                  <span className="sakura-stat-label">Carbon Reduced</span>
                </div>
                <div className="sakura-stat">
                  <span className="sakura-stat-number">
                    <CounterAnimation target={100} suffix="%" duration={2} />
                  </span>
                  <span className="sakura-stat-label">Eco Materials</span>
                </div>
              </div>
            </div>

            {/* Right Side - Sakura Tree */}
            <div className="sakura-right">
              <div className="sakura-canvas">
                {/* Ground / hill */}
                <div className="sakura-ground"></div>
                <div className="sakura-grass"></div>
                
                {/* Seed */}
                <div 
                  className="sakura-seed"
                  style={{ 
                    opacity: treeGrowth < 0.1 ? 1 : 0,
                    transform: `scale(${treeGrowth < 0.1 ? 1 : 0})`
                  }}
                >
                  <FaSeedling />
                </div>

                {/* Main trunk & branches - natural sakura SVG */}
                <svg 
                  className="sakura-trunk-svg"
                  viewBox="0 0 500 550" 
                  style={{ opacity: treeGrowth > 0.05 ? 1 : 0 }}
                >
                  {/* === BACK LAYER: Left branches (drawn first = behind trunk) === */}
                  {/* Branch 2 - left long (behind trunk) */}
                  {treeGrowth > 0.22 && (
                    <path 
                      d="M244,310 Q200,280 150,270 Q110,262 70,275 Q50,282 35,270"
                      stroke="#5D4037"
                      strokeWidth="11"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="250"
                      strokeDashoffset={250 - (Math.min((treeGrowth - 0.22) * 4, 1) * 250)}
                    />
                  )}
                  {/* Branch 4 - up left (behind trunk) */}
                  {treeGrowth > 0.3 && (
                    <path 
                      d="M240,250 Q200,225 160,210 Q130,200 100,212 Q80,220 60,208"
                      stroke="#5D4037"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="210"
                      strokeDashoffset={210 - (Math.min((treeGrowth - 0.3) * 4, 1) * 210)}
                    />
                  )}
                  {/* Branch 6 - top left (behind trunk) */}
                  {treeGrowth > 0.35 && (
                    <path 
                      d="M240,210 Q210,185 175,170 Q145,158 120,168"
                      stroke="#5D4037"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="150"
                      strokeDashoffset={150 - (Math.min((treeGrowth - 0.35) * 5, 1) * 150)}
                    />
                  )}
                  {/* Left sub-twigs (behind trunk) */}
                  {treeGrowth > 0.35 && (
                    <>
                      <path d="M110,270 Q100,255 85,250" stroke="#6D4C41" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
                      <path d="M150,265 Q140,248 125,242" stroke="#6D4C41" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
                      <path d="M160,210 Q148,195 138,188" stroke="#6D4C41" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4" />
                    </>
                  )}

                  {/* === MIDDLE LAYER: Main trunk === */}
                  <path 
                    d="M250,550 Q245,500 248,450 Q252,400 245,350 Q238,300 242,260 Q246,230 240,195"
                    stroke="#5D4037"
                    strokeWidth="28"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="500"
                    strokeDashoffset={500 - (Math.min(treeGrowth * 2.5, 1) * 500)}
                    style={{ transition: 'stroke-dashoffset 0.15s linear' }}
                  />
                  {/* Bark shadow layer */}
                  <path 
                    d="M250,550 Q245,500 248,450 Q252,400 245,350 Q238,300 242,260 Q246,230 240,195"
                    stroke="#4E342E"
                    strokeWidth="18"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="500"
                    strokeDashoffset={500 - (Math.min(treeGrowth * 2.5, 1) * 500)}
                    style={{ transition: 'stroke-dashoffset 0.15s linear', opacity: 0.35 }}
                  />
                  {/* Bark highlight */}
                  <path 
                    d="M254,540 Q250,490 252,440 Q256,395 249,345 Q242,295 246,255"
                    stroke="#795548"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="400"
                    strokeDashoffset={400 - (Math.min(treeGrowth * 2.5, 1) * 400)}
                    style={{ transition: 'stroke-dashoffset 0.15s linear', opacity: 0.2 }}
                  />
                  
                  {/* === FRONT LAYER: Right branches (drawn last = in front of trunk) === */}
                  {/* Branch 1 - long right sweep */}
                  {treeGrowth > 0.2 && (
                    <path 
                      d="M247,340 Q290,310 340,295 Q380,285 420,300 Q440,310 455,295"
                      stroke="#6D4C41"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="250"
                      strokeDashoffset={250 - (Math.min((treeGrowth - 0.2) * 4, 1) * 250)}
                    />
                  )}
                  {/* Branch 3 - up right */}
                  {treeGrowth > 0.28 && (
                    <path 
                      d="M242,270 Q280,240 320,215 Q350,200 380,210 Q400,220 415,205"
                      stroke="#6D4C41"
                      strokeWidth="9"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="210"
                      strokeDashoffset={210 - (Math.min((treeGrowth - 0.28) * 4, 1) * 210)}
                    />
                  )}
                  {/* Branch 5 - top right */}
                  {treeGrowth > 0.33 && (
                    <path 
                      d="M241,220 Q270,195 310,170 Q340,155 365,165"
                      stroke="#6D4C41"
                      strokeWidth="7"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="160"
                      strokeDashoffset={160 - (Math.min((treeGrowth - 0.33) * 5, 1) * 160)}
                    />
                  )}
                  {/* Crown top */}
                  {treeGrowth > 0.37 && (
                    <path 
                      d="M240,195 Q238,165 245,140 Q250,120 260,110"
                      stroke="#6D4C41"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="100"
                      strokeDashoffset={100 - (Math.min((treeGrowth - 0.37) * 5, 1) * 100)}
                    />
                  )}
                  {/* Extra top branches for new clusters */}
                  {treeGrowth > 0.38 && (
                    <>
                      {/* Top left extension */}
                      <path 
                        d="M175,170 Q130,140 100,145"
                        stroke="#6D4C41"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="100"
                        strokeDashoffset={100 - (Math.min((treeGrowth - 0.38) * 5, 1) * 100)}
                      />
                      {/* Top right extension */}
                      <path 
                        d="M310,170 Q350,140 380,145"
                        stroke="#6D4C41"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="100"
                        strokeDashoffset={100 - (Math.min((treeGrowth - 0.38) * 5, 1) * 100)}
                      />
                    </>
                  )}
                  {/* Right sub-twigs (in front) */}
                  {treeGrowth > 0.35 && (
                    <>
                      <path d="M380,295 Q390,280 405,275" stroke="#795548" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
                      <path d="M340,295 Q350,275 360,268" stroke="#795548" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
                      <path d="M310,215 Q325,198 335,190" stroke="#795548" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
                    </>
                  )}
                </svg>

                {/* Sakura Blossoms - natural canopy clusters */}
                {treeGrowth > 0.35 && (
                  <div className="sakura-blossoms">
                    {/* Right branch tip clusters */}
                    <div className="blossom-cluster cluster-1" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.38) * 3, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-2" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.36) * 3, 1)})`,
                    }}></div>
                    {/* Left branch tip clusters */}
                    <div className="blossom-cluster cluster-3" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.4) * 3, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-4" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.42) * 3, 1)})`,
                    }}></div>
                    {/* Crown clusters */}
                    <div className="blossom-cluster cluster-5" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.43) * 3, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-6" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.45) * 3, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-7" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.47) * 2.5, 1)})`,
                    }}></div>
                    {/* Extra canopy fill clusters */}
                    <div className="blossom-cluster cluster-8" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.44) * 2.5, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-9" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.46) * 2.5, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-10" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.48) * 2.5, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-11" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.5) * 2.5, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-12" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.52) * 2.5, 1)})`,
                    }}></div>
                    {/* Full canopy fill - 3 more large clusters */}
                    <div className="blossom-cluster cluster-13" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.41) * 2.5, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-14" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.43) * 2.5, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-15" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.45) * 2.5, 1)})`,
                    }}></div>
                    {/* Top corner fills */}
                    <div className="blossom-cluster cluster-16" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.46) * 2.5, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-17" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.48) * 2.5, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-18" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.47) * 2.5, 1)})`,
                    }}></div>
                    <div className="blossom-cluster cluster-19" style={{
                      transform: `scale(${Math.min((treeGrowth - 0.49) * 2.5, 1)})`,
                    }}></div>
                  </div>
                )}

                {/* Falling Sakura Petals */}
                {treeGrowth > 0.6 && (
                  <div className="sakura-petals">
                    {sakuraPetals.map((petal, i) => (
                      <div 
                        key={i}
                        className="sakura-petal"
                        style={{
                          left: petal.left,
                          width: `${petal.size}px`,
                          height: `${petal.size * 0.6}px`,
                          animationDelay: petal.delay,
                          animationDuration: petal.duration,
                          '--drift': `${petal.drift}px`,
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Four Square Section */}
      <section className="why-foursquare section section-white" ref={whyRef}>
        <div className="container">
          <SlideIn direction="bottom" delay={0}>
            <div className="section-header">
              <span className="section-badge">Why Choose Us</span>
              <h2>Why <span className="text-gradient">Four Square</span>?</h2>
              <p>The trusted choice for premium windows and interior solutions</p>
            </div>
          </SlideIn>

          <StaggerChildren className="why-grid" staggerDelay={0.1}>
            {whyFourSquare.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="why-card modern-card"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="why-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Testimonials Section - Text Only */}
      <section className="testimonials-section section section-linen">
        <div className="container">
          <SlideIn direction="bottom" delay={0}>
            <div className="section-header">
              <span className="section-badge">Testimonials</span>
              <h2>What Our <span className="text-gradient">Clients Say</span></h2>
              <p>Real stories from real customers</p>
            </div>
          </SlideIn>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card modern-card"
                whileHover={{ y: -8 }}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="testimonial-quote">
                  <FaQuoteLeft />
                </div>
                <div className="testimonial-rating">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.image}
                  </div>
                  <div className="author-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ scale: 0.9, y: 30 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          >
            <h2 style={{ color: 'white', WebkitTextFillColor: 'white' }}>Ready to Transform Your Space?</h2>
            <p>Get a free consultation and quote for your dream windows</p>
            <Link to="/contact" className="btn btn-primary">
              Book Free Consultation
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
