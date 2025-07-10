import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaHardHat, 
  FaBuilding, 
  FaIndustry, 
  FaRoad, 
  FaUsers, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaClock,
  FaMobile,
  FaCalculator,
  FaSearch,
  FaChartLine,
  FaHandshake,
  FaClipboardList,
  FaFileContract,
  FaBalanceScale,
  FaLightbulb
} from 'react-icons/fa';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const services = [
    { icon: <FaCalculator />, title: "Preconstruction Cost Estimation", description: "Comprehensive cost analysis and budget planning for construction projects" },
    { icon: <FaSearch />, title: "Subcontractor Sourcing", description: "Expert vetting and selection of qualified subcontractors for your projects" },
    { icon: <FaChartLine />, title: "Project Feasibility Analysis", description: "Detailed market research and project viability assessments" },
    { icon: <FaHandshake />, title: "Contract Negotiation", description: "Professional contract management and negotiation services" }
  ];

  const projects = [
    { name: "Commercial Complex Cost Analysis", type: "Preconstruction Planning", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" },
    { name: "Industrial Facility Estimation", type: "Cost Estimation", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800" },
    { name: "Residential Development Planning", type: "Feasibility Study", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800" }
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "95%", label: "Cost Accuracy" }
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+91 96600 22114",
      details2: "+91 98878 54588",
      subtitle: "Call us anytime"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "info@suarabuild.com",
      subtitle: "Send us a message"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      details: "1440/26, Ambay Shree Colony, Vigyan Nagar, Adarsh Nagar, Ajmer, Rajasthan, 305001",
      subtitle: "Visit our headquarters"
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
      subtitle: "Saturday: 9:00 AM - 3:00 PM"
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Sura Build Logo" className="logo-icon" />
          </motion.div>
          
          <div className="nav-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="mobile-menu">
            <a href="#home" onClick={toggleMenu}>Home</a>
            <a href="#about" onClick={toggleMenu}>About</a>
            <a href="#services" onClick={toggleMenu}>Services</a>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Expert Preconstruction Services & Cost Estimation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are a premier construction services firm specializing in preconstruction 
            cost estimation, subcontractor sourcing, and project feasibility analysis. 
            With years of expertise and industry knowledge, we help you make informed 
            decisions and optimize your construction projects for maximum efficiency and profitability.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#projects">
              <button className="btn-primary">Our Projects</button>
            </a>
            <a href="#contact">
              <button className="btn-secondary">Get Quote</button>
            </a>
          </motion.div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800" alt="Construction Services" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="stat-icon">
                {index === 0 && <FaClock />}
                {index === 1 && <FaClipboardList />}
                {index === 2 && <FaChartLine />}
              </div>
              <div className="stat-content">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>About Sura Build</h2>
            <p>Delivering expert preconstruction services with precision and reliability</p>
          </motion.div>
          
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              
              <h3>Our Values</h3>
              <ul>
                <li><FaCheckCircle /> Accuracy First - Precise cost estimation and analysis</li>
                <li><FaCheckCircle /> Quality Excellence - Superior services and planning</li>
                <li><FaCheckCircle /> Innovation - Latest industry tools and methodologies</li>
                <li><FaCheckCircle /> Integrity - Honest, transparent, and ethical practices</li>
                <li><FaCheckCircle /> Client Success - Dedicated to your project's success</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500" alt="Sura Build Team" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Services</h2>
            <p>Comprehensive preconstruction solutions for every project</p>
          </motion.div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Featured Projects</h2>
            <p>Showcasing our expertise in preconstruction planning and cost estimation</p>
          </motion.div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                  <div className="project-overlay">
                    <span className="project-type">{project.type}</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>Completed in 2025</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="testimonials">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <p>Expert professionals dedicated to your project's success</p>
          </motion.div>
          
          <div className="testimonials-grid">
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Sushant Saxena</h3>
              <span className="team-role">Senior Consultant</span>
              <p>Mr. Sushant Saxena is an accomplished construction professional with diverse experience spanning the engineering industries. Known for his analytical approach to cost estimation and cross-disciplinary coordination, he has contributed to the successful planning of infrastructure, construction, and development projects across various sectors.</p>
              <div className="team-expertise">
                <span>Cost Estimation</span>
                <span>Project Planning</span>
                <span>Contract Management</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Dinesh Saxena</h3>
              <span className="team-role">Lead Estimator</span>
              <p>Mr. Dinesh Saxena's objective is to remain dedicated to building and developing diverse, capable teams that can deliver effective, forward-thinking solutions to complex construction planning and cost estimation challenges faced by organizations and communities.</p>
              <div className="team-expertise">
                <span>Cost Analysis</span>
                <span>Project Management</span>
                <span>Subcontractor Sourcing</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Sahil Aggarwal</h3>
              <span className="team-role">Technical Consultant</span>
              <p>As our Technical Consultant with a strong background in Computer Science, Sahil brings cutting-edge technical expertise to Sura Build. His deep understanding of software systems, automation, and digital solutions enables us to implement innovative project management tools and advanced cost estimation methodologies.</p>
              <div className="team-expertise">
                <span>Technical Innovation</span>
                <span>Digital Solutions</span>
                <span>Process Optimization</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Get In Touch</h2>
            <p>Ready to optimize your construction project with expert services?</p>
          </motion.div>
          
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="contact-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="contact-icon">
                  {info.icon}
                </div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  <p className="contact-main">{info.details}</p>
                  <p className="contact-main">{info.details2}</p>
                  <p className="contact-subtitle">{info.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="social-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Follow Us</h3>
            <p>Stay connected with us on LinkedIn</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/sura-build" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Sura Build Logo" className="logo-icon" />
              </div>
              <p>Providing expert preconstruction services, delivering accurate cost estimates, and creating lasting value for our clients through innovative solutions.</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <a href="#services">Cost Estimation</a>
              <a href="#services">Subcontractor Sourcing</a>
              <a href="#services">Feasibility Analysis</a>
              <a href="#services">Contract Negotiation</a>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div>
                <p><FaPhone /> +91 96600 22114</p>
                <p><FaMobile /> +91 98878 54588</p>
              </div>
              <p><FaEnvelope /> info@suarabuild.com</p>
              <p><FaMapMarkerAlt /> 1440/26, Ambay Shree Colony, Vigyan Nagar, Adarsh Nagar, Ajmer, Rajasthan, 305001</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Sura Build. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
