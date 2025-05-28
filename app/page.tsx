"use client";
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Brain, User, Award, Coffee, MapPin, Calendar } from 'lucide-react';

const PortfolioHomepage = () => {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const fullNameRef = useRef(null);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Enhanced typing animation with cursor effect
    const animateTyping = (element, text, delay = 0, speed = 80) => {
      if (!element) return;
      
      setTimeout(() => {
        element.textContent = '';
        element.style.opacity = '1';
        
        let i = 0;
        const typing = setInterval(() => {
          if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
          } else {
            clearInterval(typing);
          }
        }, speed);
      }, delay);
    };

    // Smooth entrance animations
    const animateElement = (element, delay = 0) => {
      if (!element) return;
      
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) scale(1)';
      }, delay);
    };

    // Initialize animations
    setTimeout(() => {
      animateTyping(nameRef.current, 'SURYA', 300, 120);
    }, 100);

    setTimeout(() => {
      animateTyping(fullNameRef.current, 'Surya Shashank Neupane', 1800, 60);
    }, 100);

    setTimeout(() => {
      animateElement(titleRef.current, 3000);
    }, 100);

    setTimeout(() => {
      animateElement(ctaRef.current, 3500);
    }, 100);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      name: "ING Tours and Travels",
      description: "A comprehensive fullstack booking platform featuring an intelligent AI chatbot for customer support and a robust admin dashboard for seamless management.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Socket.io"],
      image: "/ingtravels.png",
      link: "https://ingtoursandtravels.com",
      category: "Full Stack"
    },
    {
      name: "Nepscape",
      description: "Modern IT company website with advanced SEO optimization, responsive design, and enhanced user experience for maximum engagement.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      image: "/nepscape.png",
      link: "https://nepscape.com",
      category: "Frontend"
    },
    {
      name: "Geo CMS",
      description: "Interactive map-based content management system with real-time data visualization and geographic information processing capabilities.",
      tech: ["React", "Express", "MongoDB", "Leaflet"],
      image: "/ccn.png",
      link: "https://geocmsproject.vercel.app",
      category: "Full Stack"
    },
    {
      name: "Sajilo Project",
      description: "Innovative web solution built with modern architecture, focusing on performance optimization and scalable design patterns.",
      tech: ["React", "Node.js", "Express", "Redis"],
      image: "/sajilo.png",
      link: "#",
      category: "Backend"
    }
  ];

  const aboutStats = [
    { icon: <Code className="w-6 h-6" />, number: "10+", label: "Projects Delivered", color: "blue" },
    { icon: <Award className="w-6 h-6" />, number: "1+", label: "Years Experience", color: "green" },

  ];

  const skills = [
    { name: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"], icon: <Palette className="w-5 h-5" /> },
    { name: "Backend", technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"], icon: <Code className="w-5 h-5" /> },
    { name: "AI/ML", technologies: ["Python", "TensorFlow", "Scikit-learn", "OpenAI API"], icon: <Brain className="w-5 h-5" /> }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section with Diagonal Split */}
      <section className="relative h-screen w-full overflow-hidden bg-white">
        {/* Diagonal Background */}
        <div className="absolute inset-0">
          {/* Left Yellow Side */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400"
            style={{
              clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0% 100%)'
            }}
          />
          {/* Right White Side */}
          <div 
            className="absolute inset-0 bg-gradient-to-bl from-white via-gray-50 to-gray-100"
            style={{
              clipPath: 'polygon(45% 100%, 55% 0, 100% 0, 100% 100%)'
            }}
          />
          
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gray-800 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-12">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Name */}
            <h1 
              ref={nameRef}
              className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black mb-4 opacity-0 transition-all duration-1000"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                color: '#1F2937',
                textShadow: '0 4px 20px rgba(0,0,0,0.1)',
                letterSpacing: '-0.02em'
              }}
            >
              
            </h1>
            
            {/* Full Name */}
            <h2 
              ref={fullNameRef}
              className="text-xl md:text-3xl lg:text-4xl font-medium mb-8 opacity-0 tracking-wide text-gray-700"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: '400',
                letterSpacing: '0.05em'
              }}
            >
              
            </h2>

            {/* Title */}
            <h3 
              ref={titleRef}
              className="text-lg md:text-xl lg:text-2xl font-normal mb-12 opacity-0 transform translate-y-8 scale-95 transition-all duration-1000 text-gray-600 max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: '300',
                letterSpacing: '0.02em'
              }}
            >
              Full Stack Developer & AI Enthusiast crafting digital experiences that make a difference
            </h3>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 transform translate-y-8 scale-95 transition-all duration-1000">
              <button className="group relative px-8 py-4 bg-gray-900 text-white font-medium rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-gray-900 hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="relative z-10">View My Work</span>
              </button>
              
              <div className="flex gap-4">
                <a href="mailto:suryaneupane0427@gmail.com" className="p-3 bg-white border-2 border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:border-yellow-400 group">
                  <Mail className="w-5 h-5 text-gray-700 group-hover:text-yellow-600" />
                </a>
                <a href="#" className="p-3 bg-white border-2 border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:border-yellow-400 group">
                  <Github className="w-5 h-5 text-gray-700 group-hover:text-yellow-600" />
                </a>
                <a href="#" className="p-3 bg-white border-2 border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:border-yellow-400 group">
                  <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-yellow-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section ref={aboutRef} className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-yellow-500" />
                  Hello, I'm Surya!
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  I'm a passionate Full Stack Developer and AI enthusiast from Nepal, dedicated to creating innovative digital solutions that solve real-world problems. With a strong foundation in modern web technologies and a growing expertise in artificial intelligence, I bring ideas to life through code.
                </p>
              </div>

              <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  Based in Nepal
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying at the forefront of technology.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Core Expertise</h4>
                <div className="grid gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          {skill.icon}
                        </div>
                        <h5 className="font-semibold text-gray-900">{skill.name}</h5>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-white text-gray-600 rounded-full text-sm font-medium border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="space-y-6">
              {aboutStats.map((stat, index) => (
                <div key={index} className={`animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000`} style={{transitionDelay: `${index * 200}ms`}}>
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        stat.color === 'green' ? 'bg-green-100 text-green-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Info Card */}
              <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
                <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-yellow-600" />
                    Currently Working On
                  </h4>
                  <p className="text-gray-700">
                    Exploring advanced AI integration in web applications and building scalable microservices architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 group`} style={{transitionDelay: `${index * 150}ms`}}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="text-2xl font-bold text-gray-600">${project.name}</div>`;
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white bg-opacity-90 text-gray-700 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-yellow-100 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Link */}
                    <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 text-gray-900 hover:text-yellow-600 font-semibold transition-colors duration-300 group/link"
                    >
                      View Project 
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:suryaneupane0427@gmail.com"
                className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start a Conversation
              </a>
              <a 
                href="tel:+9779827394116"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-300 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400">
            &copy; 2025 <span className="text-white font-semibold">Surya Shashank Neupane</span>. 
            Made with passion in Nepal.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioHomepage;