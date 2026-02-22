import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, MapPin, Briefcase, GraduationCap, Award, Code, Database, Cloud, Cpu, Languages, Download } from 'lucide-react'
import './App.css'
import profileImage from './assets/56405921.jpg'

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <div className="resume-container">
      {/* PDF Export Button */}
      <motion.button 
        className="pdf-export-btn"
        onClick={handleDownloadPDF}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download size={20} />
        <span>Export as PDF</span>
      </motion.button>

      {/* Header Section */}
      <motion.header 
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-content">
          <motion.div 
            className="profile-image-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <img src={profileImage} alt="Amit Singh" className="profile-image" />
          </motion.div>
          <h1 className="name">AMIT SINGH</h1>
          <h2 className="title">Full Stack Software Engineer</h2>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={16} />
              <a href="mailto:ascool84424@gmail.com">ascool84424@gmail.com</a>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+48 796984012</span>
            </div>
            <div className="contact-item">
              <Linkedin size={16} />
              <a href="https://www.linkedin.com/in/amitsingh766/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-item">
              <Github size={16} />
              <a href="https://github.com/amitsingh7668" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Poland</span>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="main-content">
        {/* Professional Summary */}
        <motion.section 
          className="section summary-section"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="section-title">Professional Summary</h3>
          <p className="summary-text">
            Full Stack Developer with <strong>10 years of experience</strong> building scalable enterprise applications and cloud-native solutions. Expert in Java, Python, and modern frameworks with deep expertise in <strong>Generative AI</strong>, microservices architecture, and event-driven systems. Proven track record of leading cross-functional teams and delivering high-performance solutions for global financial institutions including <strong>UBS, Morgan Stanley, and Société Générale</strong>.
          </p>
        </motion.section>

        {/* Technical Skills */}
        <motion.section 
          className="section skills-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="section-title"><Code size={24} /> Technical Skills</h3>
          <div className="skills-grid">
            <motion.div className="skill-card" variants={itemVariants}>
              <div className="skill-icon"><Code /></div>
              <h4>Languages & Frameworks</h4>
              <p>Java 17, Python, Spring Boot 3, React.js, Redux, Django, Hibernate</p>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
              <div className="skill-icon"><Cpu /></div>
              <h4>AI/ML Technologies</h4>
              <p>OpenAI Agentic, MCP Tools, LLM Models, Multi-Agent, Vectors</p>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
              <div className="skill-icon"><Database /></div>
              <h4>Databases</h4>
              <p>PostgreSQL, MySQL, DB2, Elasticsearch, Neo4j, Neptune, Couchbase, Cosmos DB</p>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
              <div className="skill-icon"><Cloud /></div>
              <h4>Cloud & Infrastructure</h4>
              <p>AWS, Azure, PaaS, FaaS, IaaS, Docker, Kubernetes, Linux</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section 
          className="section experience-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="section-title"><Briefcase size={24} /> Professional Journey</h3>
          
          {/* Timeline Roadmap */}
          <div className="timeline-roadmap">
            <div className="timeline-line"></div>
            
            <motion.div className="timeline-item" variants={itemVariants}>
              <div className="timeline-dot">
                <div className="timeline-dot-inner"></div>
              </div>
              <div className="timeline-year">2023 - Present</div>
              <div className="experience-card">
                <div className="exp-header">
                  <div>
                    <h4 className="exp-title">Associate Director</h4>
                    <p className="exp-company">UBS Poland</p>
                  </div>
                  <span className="exp-date">3+ Years</span>
                </div>
                <p className="exp-project"><strong>Project:</strong> Digital Core Capabilities</p>
                <div className="tech-stack">
                  <span className="tech-tag">Apache Flink</span>
                  <span className="tech-tag">Kafka</span>
                  <span className="tech-tag">Spring Boot 3</span>
                  <span className="tech-tag">Java 17</span>
                  <span className="tech-tag">Cosmos DB</span>
                  <span className="tech-tag">Claude, OpenAI</span>
                </div>
                <ul className="exp-achievements">
                  <li>Migrated complete legacy systems (13 years old) from Java 8 to Java 17 and modernized cloud infrastructure, enhancing scalability and reliability</li>
                  <li>Pioneered GenAI integration by developing MCP tools and intelligent NLP solutions using OpenAI Agentic Framework</li>
                  <li>Onboarded complex business workflows to BPMN Flowable, reducing process automation time by 40%</li>
                  <li>Led adoption of Clean Code practices including SOLID principles, DRY, and code review standards</li>
                  <li>Experience in high-throughput data pipeline processing millions of events daily</li>
                </ul>
                <div className="achievement-badge">
                  <Award size={16} />
                  <span>Reduced data processing latency by 60%</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="timeline-item" variants={itemVariants}>
              <div className="timeline-dot">
                <div className="timeline-dot-inner"></div>
              </div>
              <div className="timeline-year">2022 - 2023</div>
              <div className="experience-card">
                <div className="exp-header">
                  <div>
                    <h4 className="exp-title">Senior Software Engineer</h4>
                    <p className="exp-company">UBS (via Luxoft/DXC Technologies)</p>
                  </div>
                  <span className="exp-date">4 Months</span>
                </div>
                <p className="exp-project"><strong>Project:</strong> Payment Services</p>
                <div className="tech-stack">
                  <span className="tech-tag">Java Spring Boot 2</span>
                  <span className="tech-tag">DB2</span>
                  <span className="tech-tag">ELK</span>
                  <span className="tech-tag">Couchbase</span>
                </div>
                <ul className="exp-achievements">
                  <li>Developed and maintained critical payment processing services ensuring PCI compliance</li>
                  <li>Implemented caching strategies using Couchbase, improving response times by 35%</li>
                  <li>Conducted code reviews and enforced clean coding standards across development teams</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="timeline-item" variants={itemVariants}>
              <div className="timeline-dot">
                <div className="timeline-dot-inner"></div>
              </div>
              <div className="timeline-year">2021 - 2022</div>
              <div className="experience-card">
                <div className="exp-header">
                  <div>
                    <h4 className="exp-title">Senior Software Engineer</h4>
                    <p className="exp-company">Morgan Stanley</p>
                  </div>
                  <span className="exp-date">1.2 Years</span>
                </div>
                <p className="exp-project"><strong>Project:</strong> Client Onboarding System (COSS)</p>
                <div className="tech-stack">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Spring Boot 2</span>
                  <span className="tech-tag">Microservices</span>
                </div>
                <ul className="exp-achievements">
                  <li>Built client-facing onboarding application processing 500+ client registrations monthly</li>
                  <li>Developed full-stack features for Cash and Security Transfer Authorization</li>
                  <li>Implemented intelligent cache management reducing database load by 45%</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="timeline-item" variants={itemVariants}>
              <div className="timeline-dot">
                <div className="timeline-dot-inner"></div>
              </div>
              <div className="timeline-year">2019 - 2021</div>
              <div className="experience-card">
                <div className="exp-header">
                  <div>
                    <h4 className="exp-title">Software Development Engineer II</h4>
                    <p className="exp-company">Société Générale</p>
                  </div>
                  <span className="exp-date">1.6 Years</span>
                </div>
                <p className="exp-project"><strong>Project:</strong> Helios - Test Strategy Management Platform</p>
                <div className="tech-stack">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Spring Boot 2</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Docker</span>
                </div>
                <ul className="exp-achievements">
                  <li>Architected backend framework from scratch using Spring Boot and Hexagonal Architecture</li>
                  <li>Developed React.js components for enterprise UI serving 1000+ internal users</li>
                  <li>Established CI/CD pipelines using Jenkins, Docker, and monitoring via ELK stack</li>
                </ul>
                <div className="achievement-badge">
                  <Award size={16} />
                  <span>Star of the Quarter Award</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="timeline-item" variants={itemVariants}>
              <div className="timeline-dot">
                <div className="timeline-dot-inner"></div>
              </div>
              <div className="timeline-year">2017 - 2019</div>
              <div className="experience-card">
                <div className="exp-header">
                  <div>
                    <h4 className="exp-title">Software Engineer</h4>
                    <p className="exp-company">L&T Infotech (LTI)</p>
                  </div>
                  <span className="exp-date">2.3 Years</span>
                </div>
                <p className="exp-project"><strong>Project:</strong> Document Production & Salesforce Integration</p>
                <div className="tech-stack">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Spring Boot 2</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">Docker</span>
                </div>
                <ul className="exp-achievements">
                  <li>Designed and deployed RESTful APIs for automated document generation</li>
                  <li>Containerized applications using Docker and orchestrated deployments with Docker Swarm</li>
                  <li>Implemented test automation frameworks improving code coverage to 85%</li>
                </ul>
                <div className="achievement-badge">
                  <Award size={16} />
                  <span>Mercerthon Hackathon Winner</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section 
          className="section education-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="section-title"><GraduationCap size={24} /> Education</h3>
          <motion.div className="education-card" variants={itemVariants}>
            <h4>Bachelor of Engineering</h4>
            <p className="edu-school">T.C.E.T, Mumbai</p>
            <p className="edu-details">2013 – 2017 | CGPA: 7.5/10</p>
          </motion.div>
          <motion.div className="education-card" variants={itemVariants}>
            <h4>Higher Secondary Education</h4>
            <p className="edu-school">Gyan Deep English School, Varanasi</p>
            <p className="edu-details">2012-13 | 82%</p>
          </motion.div>
        </motion.section>

        {/* Certifications */}
        <motion.section 
          className="section certifications-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="section-title"><Award size={24} /> Certifications</h3>
          <div className="cert-grid">
            <motion.div className="cert-badge" variants={itemVariants}>Certified Engineer – UBS</motion.div>
            <motion.div className="cert-badge" variants={itemVariants}>Java Certified Programmer</motion.div>
            <motion.div className="cert-badge" variants={itemVariants}>Python Certified Programmer</motion.div>
            <motion.div className="cert-badge" variants={itemVariants}>Advanced Google Analytics</motion.div>
            <motion.div className="cert-badge" variants={itemVariants}>CI/CD Pipeline Certification</motion.div>
          </div>
        </motion.section>

        {/* Additional Info */}
        <motion.section 
          className="section additional-section"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="section-title"><Languages size={24} /> Additional Information</h3>
          <div className="additional-content">
            <p><strong>Languages:</strong> English (Professional), Hindi (Native)</p>
            <p><strong>Availability:</strong> Open to relocation | Currently based in Poland</p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default App
