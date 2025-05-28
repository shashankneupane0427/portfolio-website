"use client";
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink, Code, Database, Cpu } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "ING Tours and Travels",
      description: "Fullstack Booking Website Built Using React, Node, MongoDB",
      features: [
        "Secure authentication (Login, Signup, Password Recovery)",
        "AI-powered live chat bot for instant assistance",
        "Custom tour package requests",
        "Admin dashboard (CMS) to manage orders, users, and listings"
      ],
      tech: ["React", "Node.js", "MongoDB"],
      link: "ingtoursandtravels.com",
      image: "/projects/ingtravels.png",
      duration: "Feb 2025"
    },
    {
      title: "Nepscape",
      description: "IT Company Website",
      features: [
        "Next JS Website made using React, TypeScript, Tailwind, Nodemailer",
        "Modern UI/UX and Optimized SEO"
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Nodemailer"],
      link: "nepscape.com",
      image: "/projects/nepscape.png",
      duration: "Feb 2025 - Mar 2025"
    },
    {
      title: "Geo CMS",
      description: "Interactive Map based Content Management System",
      features: [
        "Content management system built using React, Node, Express, MongoDB",
        "Secured Login authentication and protected routes",
        "Role based user dashboard and content management"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "geocmsproject.vercel.app",
      image: "/projects/ccn.png",
      duration: "Mar 2025 - Apr 2025"
    },
    {
      title: "Sajilo Project",
      description: "Web Application Project",
      features: [
        "Modern web application with responsive design",
        "Built with latest web technologies"
      ],
      tech: ["React", "JavaScript"],
      link: "#",
      image: "/projects/sajilo.png",
      duration: "2025"
    }
  ];

  const skills = {
    "Programming Languages": {
      items: ["Python", "JavaScript", "TypeScript", "C/C++"],
      icon: <Code size={16} />
    },
    "Frameworks & Libraries": {
      items: ["React", "Redux", "Next.js", "Node.js", "Express", "NumPy", "Pandas", "Scikit Learn"],
      icon: <Cpu size={16} />
    },
    "Database & Tools": {
      items: ["MongoDB", "Mongoose", "SQL", "Prisma", "Git/GitHub", "Postman", "Vercel", "Netlify"],
      icon: <Database size={16} />
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Header Section */}
        <header className="mb-16 text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">Surya Shashank Neupane</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Computer Science student at the Institute of Science and Technology (BSc. CSIT), driven by a passion for
              Web Development and AI/ML. As a freelance Full-Stack Developer, I specialize in modern web technologies 
              like Next.js and the MERN stack, constantly exploring and refining my expertise to build scalable, 
              high-performance applications.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-700 mb-6">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <MapPin size={18} className="text-blue-600" />
              <span className="font-medium">Kathmandu, Bagmati, Nepal</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Phone size={18} className="text-green-600" />
              <span className="font-medium">+977 9827394116</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Mail size={18} className="text-red-600" />
              <span className="font-medium">suryaneupane0427@gmail.com</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <a href="#" className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Globe size={18} />
              <span className="font-medium">Portfolio</span>
            </a>
            <a href="#" className="flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-900 text-white px-6 py-3 rounded-full hover:from-blue-900 hover:to-blue-950 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Linkedin size={18} />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl">
              <Github size={18} />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-10">
            
            {/* Skills Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Code size={18} className="text-white" />
                </div>
                Skills
              </h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, {items, icon}]) => (
                  <div key={category} className="group">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="text-blue-600">{icon}</span>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <span key={index} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium hover:from-blue-100 hover:to-blue-200 hover:text-blue-800 transition-all duration-200 cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">📚</span>
                </div>
                Education
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-gray-900">BSc. CSIT</h3>
                  <p className="text-gray-700 font-medium">Tribhuvan University</p>
                  <p className="text-gray-600">Sagarmatha College of Science</p>
                  <p className="text-sm text-blue-600 font-medium mt-1">Sep 2023 - Present</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-gray-900">+2 Intermediate</h3>
                  <p className="text-gray-700 font-medium">Computer Science, NEB</p>
                  <p className="text-gray-600">Shikshadeep College</p>
                  <p className="text-sm text-purple-600 font-medium mt-1">Feb 2021 - Mar 2023</p>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🌐</span>
                </div>
                Languages
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-800">English</span>
                  <span className="text-green-600 font-semibold">Fluent</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-800">Nepali</span>
                  <span className="text-blue-600 font-semibold">Proficient</span>
                </div>
              </div>
            </section>
            
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Work Experience Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">💼</span>
                </div>
                Work Experience
              </h2>
              <div className="border-l-4 border-indigo-500 pl-8 py-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Freelance Full Stack Developer</h3>
                  <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Feb 2025 - Present</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Designed, developed, and deployed scalable web applications using MERN stack</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Built responsive and interactive UIs with React, ensuring optimal performance and accessibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Developed RESTful APIs endpoints for seamless client-server communication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Implemented authentication and authorization using JWT, OAuth, and role-based access control</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Integrated third-party services like payment gateways, cloud storage, and real-time databases</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Worked with version control (Git, GitHub) and CI/CD pipelines for smooth deployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Provided SEO optimization and improved website rankings with best practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Utilized state management libraries like Redux, and Context API for efficient data handling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Deployed applications on cloud platforms (Vercel) for high availability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🚀</span>
                </div>
                Featured Projects
              </h2>
              <div className="grid gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="group border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-50 to-white">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-48 lg:h-32 w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex-shrink-0 overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDE5MiAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik05NiA2NEwxMTQgODRINzhMOTYgNjRaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9Ijk2IiB5PSIxMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2QjcyODAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+UHJvamVjdCBJbWFnZTwvdGV4dD4KPC9zdmc+';
                          }}
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">{project.title}</h3>
                          <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-4">{project.duration}</span>
                        </div>
                        <p className="text-gray-700 font-medium">{project.description}</p>
                        <div className="space-y-2">
                          {project.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-3 text-gray-600">
                              <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, tIndex) => (
                            <span key={tIndex} className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-2 rounded-lg font-medium text-sm border border-blue-200 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.link !== "#" && (
                          <a 
                            href={`https://${project.link}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group/link"
                          >
                            <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                            <span className="border-b border-blue-300 group-hover/link:border-blue-600 transition-colors duration-200">{project.link}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;