"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaGlobe,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaBolt
} from 'react-icons/fa';
import { 
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiNumpy,
  SiPandas,
  SiScikitlearn
} from 'react-icons/si';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = {
    languages: ['python', 'javascript', 'typescript', 'cpp'],
    frameworks: ['react', 'redux', 'nextjs', 'nodejs', 'express'],
    databases: ['mongodb', 'mongoose', 'postgresql', 'prisma'],
    tools: ['git', 'postman', 'vercel', 'netlify'],
    libraries: ['numpy', 'pandas', 'scikitlearn']
  };

   const projects = [
    {
      title: 'ING Tours & Travels',
      period: 'Feb 2025',
      description: 'Fullstack booking website with secure authentication, AI-powered chatbot, and admin dashboard',
      tech: ['React', 'Node.js', 'MongoDB'],
      features: ['JWT Authentication', 'AI Chatbot', 'Admin CMS', 'Custom Packages'],
      link: 'https://ingtoursandtravels.com',
      gradient: 'from-blue-400 to-cyan-600',
      image: '/projects/ingtravels.png'
    },
     {
      title: 'Sajilo Supplement',
      period: 'Apr 2025 - May 2025',
      description: 'Full-featured eCommerce platform with secure payment integration',
      tech: ['MERN Stack', 'JWT', 'Google OAuth'],
      features: ['Shopping Cart', 'Order Tracking', 'Payment Gateway', 'User Authentication'],
      link: 'https://sajilosupplement.com',
      gradient: 'from-orange-400 to-amber-600',
      image: '/projects/sajilo.png'
    },
    {
      title: 'Nepscape',
      period: 'Feb 2025 - Mar 2025',
      description: 'Modern corporate website with optimized SEO and responsive design',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      features: ['Modern UI/UX', 'SEO Optimized', 'Responsive Design'],
      link: 'https://nepscape.com',
      gradient: 'from-emerald-400 to-teal-600',
      image: '/projects/nepscape.png'
    }
   
  ];

  const experience = {
    title: 'Freelance Contract Full Stack Developer',
    period: 'Feb 2025 - Present',
    responsibilities: [
      'Design, develop, and deploy scalable web applications using the MERN stack',
      'Build responsive and interactive user interfaces with React',
      'Develop RESTful API endpoints for seamless client-server communication',
      'Implement authentication and authorization using JWT, OAuth, and RBAC',
      'Integrate third-party services including payment gateways and cloud storage',
      'Deploy applications on cloud platforms for high availability and performance'
    ]
  };

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science and Information Technology',
      institution: 'Sagarmatha College of Science, Tribhuvan University',
      period: 'Sep 2023 - Present',
      status: 'Currently Pursuing'
    },
    {
      degree: '+2 Intermediate in Computer Science',
      institution: 'Shikshadeep College, NEB',
      period: 'Feb 2021 - Mar 2023',
      status: 'Completed'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSkillIcon = (skill: string) => {
    switch(skill) {
      case 'python': return <SiPython className="w-8 h-8" />;
      case 'javascript': return <SiJavascript className="w-8 h-8" />;
      case 'typescript': return <SiTypescript className="w-8 h-8" />;
      case 'cpp': return <SiCplusplus className="w-8 h-8" />;
      case 'react': return <SiReact className="w-8 h-8" />;
      case 'redux': return <SiRedux className="w-8 h-8" />;
      case 'nextjs': return <SiNextdotjs className="w-8 h-8" />;
      case 'nodejs': return <SiNodedotjs className="w-8 h-8" />;
      case 'express': return <SiExpress className="w-8 h-8" />;
      case 'mongodb': return <SiMongodb className="w-8 h-8" />;
      case 'mongoose': return <SiMongoose className="w-8 h-8" />;
      case 'postgresql': return <SiPostgresql className="w-8 h-8" />;
      case 'prisma': return <SiPrisma className="w-8 h-8" />;
      case 'git': return <SiGit className="w-8 h-8" />;
      case 'postman': return <SiPostman className="w-8 h-8" />;
      case 'vercel': return <SiVercel className="w-8 h-8" />;
      case 'netlify': return <SiNetlify className="w-8 h-8" />;
      case 'numpy': return <SiNumpy className="w-8 h-8" />;
      case 'pandas': return <SiPandas className="w-8 h-8" />;
      case 'scikitlearn': return <SiScikitlearn className="w-8 h-8" />;
      default: return <FaCode className="w-8 h-8" />;
    }
  };

  return (
    <div className="bg-white min-h-screen relative overflow-x-hidden text-gray-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full pointer-events-none z-50 transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference'
        }}
      ></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">
              SSN
            </div>
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-900 relative ${
                    activeSection === item ? 'text-blue-900' : 'text-gray-700'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {activeSection === item && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-8 shadow-lg overflow-hidden border-4 border-gray-200">
              <Image 
                src="/ssn.jpg" 
                alt="Surya Shashank Neupane"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-5xl font-light text-gray-900 mb-6 animate-fade-in">
              Full-Stack Developer
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Computer Science student at Tribhuvan University, passionate about Web Development and AI/ML. 
              Specializing in modern web technologies like Next.js and the MERN stack to build scalable, 
              high-performance applications.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-700">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-900" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
                <FaPhone className="w-4 h-4 text-emerald-600" />
                <span>+977 9827394116</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
                <FaEnvelope className="w-4 h-4 text-blue-600" />
                <span>suryaneupane0427@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-900 to-blue-700 mx-auto mb-12 rounded-full"></div>
          
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200 hover:bg-gray-100 transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                <div className="flex items-center text-blue-900">
                  <FaCalendarAlt className="w-5 h-5 mr-2" />
                  <span className="font-medium">{experience.period}</span>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full shadow">
                <FaBriefcase className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="space-y-4">
              {experience.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-900 to-blue-700 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-sm relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Project Image */}
                  <div className="relative aspect-video w-full mb-6 rounded-lg overflow-hidden border border-gray-200">
                    <Image 
  src={project.image}
  alt={project.title}
  width={400}  // Set specific dimensions
  height={300}
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-98"
/>
                  </div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-900 transition-all duration-300 transform hover:scale-110"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <div className="flex items-center text-sm text-blue-900 mb-4">
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    <span>{project.period}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full border border-gray-300 hover:bg-gray-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        <FaStar className="w-3 h-3 text-amber-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-900 to-blue-700 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200 hover:bg-gray-100 transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaCode className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Programming Languages</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {skills.languages.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 p-2 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:shadow-md transition-all duration-300">
                      {getSkillIcon(skill)}
                    </div>
                    <span className="mt-2 text-sm font-medium text-gray-700 capitalize">
                      {skill === 'cpp' ? 'C++' : skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200 hover:bg-gray-100 transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaGlobe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Frameworks & Libraries</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[...skills.frameworks, ...skills.libraries].map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 p-2 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:shadow-md transition-all duration-300">
                      {getSkillIcon(skill)}
                    </div>
                    <span className="mt-2 text-sm font-medium text-gray-700 capitalize">
                      {skill === 'nextjs' ? 'Next.js' : 
                       skill === 'nodejs' ? 'Node.js' :
                       skill === 'scikitlearn' ? 'Scikit-Learn' : skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200 hover:bg-gray-100 transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaDatabase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Databases & Tools</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[...skills.databases, ...skills.tools].map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 p-2 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:shadow-md transition-all duration-300">
                      {getSkillIcon(skill)}
                    </div>
                    <span className="mt-2 text-sm font-medium text-gray-700 capitalize">
                      {skill === 'postgresql' ? 'PostgreSQL' : skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-900 to-blue-700 mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-blue-900">
                      <FaCalendarAlt className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                      <span className="mx-3 text-gray-400">•</span>
                      <span className="text-sm font-medium text-gray-700">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full shadow group-hover:scale-110 transition-transform duration-300">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-900 to-blue-700 mx-auto mb-8 rounded-full"></div>
          
    
          
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:suryaneupane0427@gmail.com"
              className="group flex items-center px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-full hover:from-blue-800 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow"
            >
              <FaEnvelope className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Send Email
            </a>
            <a
              href="tel:+9779827394116"
              className="group flex items-center px-8 py-4 bg-gray-100 text-gray-800 rounded-full border border-gray-200 hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow"
            >
              <FaPhone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Call Now
            </a>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a
              href="https://linkedin.com/in/shashankneupane0427"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-100 rounded-full border border-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/shashankneupane0427"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-100 rounded-full border border-gray-200 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Dark Contrast */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex"></div>
              <img src="/favicon.ico" alt="" />
              <h3 className="text-xl font-bold text-white pt-2 mb-4">Surya Shashank Neupane</h3>
              <p className="max-w-md">
                Full-Stack Developer specializing in modern web technologies to build scalable, high-performance applications.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/shashankneupane0427"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/shashankneupane0427"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="mailto:suryaneupane0427@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>
              © 2025 Surya Shashank Neupane
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;