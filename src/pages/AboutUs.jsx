import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    FaArrowRight, FaCheck, FaUsers, FaAward, FaShieldAlt, FaLeaf,
    FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaTools, FaStar,
    FaLightbulb, FaHandshake, FaHeart, FaGem
} from 'react-icons/fa';
import interiorLiving from '../assets/images/interior_living.png';
import CounterAnimation from '../components/CounterAnimation';
import './AboutUs.css';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const heroRef = useRef(null);
    const storyRef = useRef(null);
    const statsRef = useRef(null);
    const valuesRef = useRef(null);
    const servicesRef = useRef(null);
    const timelineRef = useRef(null);
    const contactRef = useRef(null);

    const companyValues = [
        {
            icon: <FaGem />,
            title: 'Premium Quality',
            description: 'We use only the finest materials sourced from trusted German and Italian suppliers.'
        },
        {
            icon: <FaLightbulb />,
            title: 'Innovation',
            description: 'Constantly evolving with cutting-edge technology and modern design trends.'
        },
        {
            icon: <FaHandshake />,
            title: 'Trust & Reliability',
            description: 'Building lasting relationships through transparent dealings and dependable service.'
        },
        {
            icon: <FaHeart />,
            title: 'Customer Focus',
            description: 'Your satisfaction is our priority. We tailor solutions to meet your unique needs.'
        }
    ];

    const milestones = [
        { year: '2000', title: 'Company Founded', description: 'Four Square started with a vision to revolutionize window solutions in India.' },
        { year: '2005', title: 'First Major Project', description: 'Completed our first large-scale residential complex with 500+ units.' },
        { year: '2010', title: 'Expanded Operations', description: 'Opened manufacturing facility with state-of-the-art German machinery.' },
        { year: '2015', title: 'Pan-India Presence', description: 'Expanded services to 15+ cities across India.' },
        { year: '2020', title: 'Interior Solutions', description: 'Launched complete interior solutions including kitchens and bedrooms.' },
        { year: '2025', title: '1000+ Projects', description: 'Celebrating 25+ years of excellence with 1000+ successful projects.' }
    ];

    const teamHighlights = [
        { icon: <FaUsers />, target: 100, suffix: '+', label: 'Expert Craftsmen' },
        { icon: <FaAward />, target: 25, suffix: '+', label: 'Years Experience' },
        { icon: <FaShieldAlt />, target: 10, suffix: 'Yr', label: 'Warranty Coverage' },
        { icon: <FaStar />, target: 4.9, suffix: '★', decimals: 1, label: 'Customer Rating' }
    ];

    const services = [
        {
            title: 'UPVC Windows',
            description: 'Energy-efficient, low-maintenance windows with multi-chamber profiles for superior insulation.'
        },
        {
            title: 'Aluminium Windows',
            description: 'Sleek, modern aluminium frames with thermal break technology for contemporary spaces.'
        },
        {
            title: 'Sliding Doors',
            description: 'Space-saving sliding door systems for seamless indoor-outdoor living.'
        },
        {
            title: 'Modular Kitchens',
            description: 'Custom-designed modular kitchens with premium finishes and hardware.'
        },
        {
            title: 'Bedroom Furniture',
            description: 'Elegant bedroom solutions including storage beds and wardrobes.'
        },
        {
            title: 'Complete Interiors',
            description: 'End-to-end interior design and execution for homes and offices.'
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // ─── HERO ANIMATIONS ───
            const heroTl = gsap.timeline();
            heroTl
                .from('.about-hero .hero-line', {
                    y: 80,
                    opacity: 0,
                    rotationX: 40,
                    stagger: 0.15,
                    duration: 1,
                    ease: 'power3.out'
                })
                .from('.about-hero .hero-description', {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                }, '-=0.4')
                .from('.about-hero .hero-decoration', {
                    scale: 0,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'elastic.out(1, 0.5)'
                }, '-=0.6')
                .from('.about-hero .section-badge', {
                    scale: 0.5,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'back.out(1.7)'
                }, 0);

            // Parallax on hero background shapes
            gsap.to('.hero-shape-1', {
                y: -80,
                scrollTrigger: {
                    trigger: '.about-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });
            gsap.to('.hero-shape-2', {
                y: -120,
                scrollTrigger: {
                    trigger: '.about-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5
                }
            });
            gsap.to('.hero-shape-3', {
                y: -50,
                x: 30,
                scrollTrigger: {
                    trigger: '.about-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.8
                }
            });

            // ─── STORY SECTION ───
            gsap.from('.story-content .section-badge', {
                x: -60,
                opacity: 0,
                duration: 0.6,
                scrollTrigger: {
                    trigger: '.about-story',
                    start: 'top 75%',
                }
            });

            gsap.from('.story-content h2', {
                x: -80,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-story',
                    start: 'top 70%',
                }
            });

            const isMobile = window.innerWidth < 768;

            gsap.from('.story-content p', {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.about-story',
                    start: 'top 65%',
                }
            });

            gsap.from('.highlight-item', {
                x: isMobile ? 0 : -40,
                y: isMobile ? 20 : 0,
                opacity: 0,
                stagger: 0.12,
                duration: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.story-highlights',
                    start: 'top 80%',
                }
            });

            // Story image with reveal effect
            gsap.from('.story-image img', {
                clipPath: 'inset(0 100% 0 0)',
                duration: 1.2,
                ease: 'power3.inOut',
                scrollTrigger: {
                    trigger: '.story-image',
                    start: 'top 70%',
                }
            });

            gsap.from('.image-accent-box', {
                scale: 0,
                rotation: -15,
                opacity: 0,
                duration: 0.8,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.story-image',
                    start: 'top 60%',
                }
            });

            // ─── STATS SECTION (Counter Animation) ───
            const statCards = gsap.utils.toArray('.stat-card');
            statCards.forEach((card, i) => {
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: '.about-stats',
                        start: 'top 75%',
                    }
                });
            });

            // Stat icon floating animation
            gsap.utils.toArray('.stat-icon').forEach((icon) => {
                gsap.to(icon, {
                    y: -5,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            });

            // ─── VALUES SECTION ───
            gsap.from('.about-values .section-header', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-values',
                    start: 'top 75%',
                }
            });

            gsap.utils.toArray('.value-card').forEach((card, i) => {
                gsap.from(card, {
                    y: 80,
                    opacity: 0,
                    scale: 0.9,
                    rotation: i % 2 === 0 ? -3 : 3,
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.values-grid',
                        start: 'top 78%',
                    }
                });
            });

            // Value icon spin on scroll
            gsap.utils.toArray('.value-icon').forEach((icon) => {
                gsap.from(icon, {
                    rotation: 360,
                    scale: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: icon,
                        start: 'top 85%',
                    }
                });
            });

            // ─── SERVICES SECTION ───
            gsap.from('.about-services .section-header', {
                y: 40,
                opacity: 0,
                duration: 0.7,
                scrollTrigger: {
                    trigger: '.about-services',
                    start: 'top 75%',
                }
            });

            gsap.utils.toArray('.service-card').forEach((card, i) => {
                gsap.from(card, {
                    x: isMobile ? 0 : (i % 3 === 0 ? -60 : i % 3 === 1 ? 0 : 60),
                    y: isMobile ? 40 : (i % 3 === 1 ? 60 : 30),
                    opacity: 0,
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.services-grid',
                        start: 'top 78%',
                    }
                });
            });

            // ─── TIMELINE SECTION ───
            gsap.from('.about-timeline .section-header', {
                y: 40,
                opacity: 0,
                duration: 0.7,
                scrollTrigger: {
                    trigger: '.about-timeline',
                    start: 'top 75%',
                }
            });

            // Animate the timeline line growing
            gsap.from('.timeline::before', {
                scaleY: 0,
                transformOrigin: 'top',
                duration: 1,
                scrollTrigger: {
                    trigger: '.timeline',
                    start: 'top 70%',
                }
            });

            // Timeline items stagger with alternating directions
            gsap.utils.toArray('.timeline-item').forEach((item, i) => {
                const isLeft = item.classList.contains('left');
                gsap.from(item, {
                    x: isMobile ? 30 : (isLeft ? -100 : 100),
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 82%',
                    }
                });

                // Dot pulse
                gsap.from(item, {
                    '--dot-scale': 0,
                    duration: 0.5,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 82%',
                    }
                });
            });

            // ─── CONTACT SECTION ───
            gsap.from('.contact-header', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-contact',
                    start: 'top 75%',
                }
            });

            gsap.utils.toArray('.contact-card').forEach((card, i) => {
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: '.contact-cards-grid',
                        start: 'top 80%',
                    }
                });
            });

            gsap.from('.cta-box-pro', {
                y: 40,
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.contact-cta-wrapper',
                    start: 'top 85%',
                }
            });
        });

        return () => ctx.revert();
    }, []);

    // Magnetic hover effect for cards
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(card, {
            rotationY: x * 0.05,
            rotationX: -y * 0.05,
            transformPerspective: 1000,
            duration: 0.3,
            ease: 'power1.out'
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
        });
    };

    return (
        <main className="about-page">
            {/* Hero Section with Parallax Shapes */}
            <section className="about-hero" ref={heroRef}>
                {/* Floating geometric shapes for parallax */}
                <div className="hero-shape hero-shape-1"></div>
                <div className="hero-shape hero-shape-2"></div>
                <div className="hero-shape hero-shape-3"></div>
                <div className="hero-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>
                <div className="container">
                    <div className="about-hero-content">
                        <span className="section-badge">About Us</span>
                        <h1>
                            <span className="hero-line">Transforming Spaces</span>
                            <span className="hero-line">with <span className="text-gradient">Excellence</span></span>
                        </h1>
                        <p className="hero-description">
                            Four Square is a leading provider of premium windows and interior solutions in India.
                            With over a decade of experience, we combine German engineering with Indian craftsmanship
                            to deliver exceptional quality that transforms your living spaces.
                        </p>
                        <div className="hero-decoration">
                            <div className="decoration-line"></div>
                            <div className="decoration-dot"></div>
                            <div className="decoration-line"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="about-story section" ref={storyRef}>
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <span className="section-badge">Our Story</span>
                            <h2>25 Years of <span className="text-gradient">Craftsmanship</span></h2>
                            <p>
                                Founded in 2000, Four Square began with a simple mission: to bring world-class
                                window solutions to Indian homes. What started as a small workshop with a passion
                                for quality has grown into one of the most trusted names in premium windows and
                                interior solutions across India.
                            </p>
                            <p>
                                Our journey has been marked by continuous innovation, unwavering commitment to
                                quality, and a deep understanding of our customers' needs. Today, we serve
                                thousands of satisfied customers across 15+ cities in India.
                            </p>
                            <div className="story-highlights">
                                <div className="highlight-item">
                                    <FaCheck className="highlight-icon" />
                                    <span>German Engineering Standards</span>
                                </div>
                                <div className="highlight-item">
                                    <FaCheck className="highlight-icon" />
                                    <span>Eco-Friendly Materials</span>
                                </div>
                                <div className="highlight-item">
                                    <FaCheck className="highlight-icon" />
                                    <span>Expert Installation Teams</span>
                                </div>
                                <div className="highlight-item">
                                    <FaCheck className="highlight-icon" />
                                    <span>Post-Installation Support</span>
                                </div>
                            </div>
                        </div>

                        <div className="story-image">
                            <img src={interiorLiving} alt="Four Square Interior" />
                            <div className="image-accent-box">
                                <span className="accent-number">25+</span>
                                <span className="accent-text">Years of Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Stats */}
            <section className="about-stats section section-dark" ref={statsRef}>
                <div className="container">
                    <div className="stats-grid">
                        {teamHighlights.map((item, index) => (
                            <div
                                key={index}
                                className="stat-card"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="stat-icon">{item.icon}</div>
                                <span className="stat-value">
                                    <CounterAnimation
                                        target={item.target}
                                        suffix={item.suffix}
                                        decimals={item.decimals || 0}
                                        duration={2.5}
                                    />
                                </span>
                                <span className="stat-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="about-values section" ref={valuesRef}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Values</span>
                        <h2>What We <span className="text-gradient">Stand For</span></h2>
                        <p>The principles that guide everything we do</p>
                    </div>

                    <div className="values-grid">
                        {companyValues.map((value, index) => (
                            <div
                                key={index}
                                className="value-card glass-card"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="about-services section section-light" ref={servicesRef}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Services</span>
                        <h2>Complete <span className="text-gradient">Solutions</span></h2>
                        <p>From windows to complete interiors, we've got you covered</p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-card"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="about-timeline section" ref={timelineRef}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Journey</span>
                        <h2>Milestones of <span className="text-gradient">Growth</span></h2>
                    </div>

                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            >
                                <div className="timeline-content glass-card">
                                    <span className="timeline-year">{milestone.year}</span>
                                    <h4>{milestone.title}</h4>
                                    <p>{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Info - Premium Redesign */}
            <section className="about-contact section" ref={contactRef}>
                <div className="about-contact-bg"></div>
                <div className="container">
                    <div className="contact-header">
                        <span className="section-badge contact-badge">Get In Touch</span>
                        <h2>Let's Build Something <span className="text-gradient">Beautiful</span></h2>
                        <p className="contact-subtitle">We'd love to hear from you and discuss your project requirements.</p>
                    </div>

                    <div className="contact-cards-grid">
                        <div className="contact-card">
                            <div className="contact-card-icon map-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <h4>Our Location</h4>
                            <p>123 Industrial Area, Phase II, Mumbai, Maharashtra 400001</p>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon phone-icon">
                                <FaPhone />
                            </div>
                            <h4>Phone</h4>
                            <p>+91 98765 43210</p>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon email-icon">
                                <FaEnvelope />
                            </div>
                            <h4>Email</h4>
                            <p>info@foursquare.com</p>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon clock-icon">
                                <FaClock />
                            </div>
                            <h4>Working Hours</h4>
                            <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                        </div>
                    </div>

                    <div className="contact-cta-wrapper">
                        <div className="cta-box-pro">
                            <div className="cta-box-content">
                                <FaTools className="cta-icon-pro" />
                                <div className="cta-text">
                                    <h3>Ready to Start Your Project?</h3>
                                    <p>Get a free consultation and quote from our experts today.</p>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-primary cta-btn-pro">
                                Book Free Consultation
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;
