import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaCheckCircle, FaCog, FaAward, FaRocket } from 'react-icons/fa';
import { SiReact, SiJavascript, SiCss3, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiChartdotjs, SiNetlify, SiRedux, SiMaterialdesign } from 'react-icons/si';
import { BiTime, BiTrophy } from 'react-icons/bi';
import { MdOutlineMyLocation } from 'react-icons/md';
import { WiDaySunny } from 'react-icons/wi';
import Tilt from 'react-parallax-tilt';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Carenest",
      description: "A comprehensive healthcare management platform connecting doctors and patients. Features include appointment scheduling, patient monitoring, medical records management, and real-time health analytics.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Material-UI"],
      icons: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiRedux, SiMaterialdesign],
      github: "https://github.com/satyanandyadav/carenest-healthcare",
      live: "https://carenest-satyanand.netlify.app",
      features: [
        "Doctor-patient appointment system",
        "Real-time health monitoring",
        "Medical records management",
        "Prescription tracking",
        "Health analytics dashboard",
        "Secure patient portal"
      ],
      category: "Healthcare Platform",
      difficulty: "Advanced",
      duration: "6 weeks"
    },
    {
      id: 2,
      title: "Weather Website",
      description: "A modern weather application that provides real-time weather data, forecasts, and interactive maps. Features include location-based weather, 7-day forecasts, and beautiful weather animations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "JavaScript", "CSS3", "Weather API", "Geolocation"],
      icons: [SiReact, SiJavascript, SiCss3, WiDaySunny, MdOutlineMyLocation],
      github: "https://github.com/satyanandyadav/weather-app-react",
      live: "https://weather-app-satyanand.netlify.app",
      features: [
        "Real-time weather data",
        "7-day weather forecast",
        "Location-based weather",
        "Interactive weather maps",
        "Responsive design",
        "Weather animations"
      ],
      category: "Web Application",
      difficulty: "Intermediate",
      duration: "3 weeks"
    },
    {
      id: 3,
      title: "Task Manager",
      description: "A comprehensive task management application with drag-and-drop functionality, priority levels, and team collaboration features. Perfect for personal and team productivity.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      icons: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
      github: "https://github.com/satyanandyadav/task-manager-fullstack",
      live: "https://task-manager-satyanand.netlify.app",
      features: [
        "Drag & drop interface",
        "Priority levels",
        "Due date tracking",
        "Team collaboration",
        "Progress analytics",
        "Real-time updates"
      ],
      category: "Full-Stack Application",
      difficulty: "Advanced",
      duration: "4 weeks"
    },
    {
      id: 4,
      title: "Expense Tracker",
      description: "A powerful expense tracking application with budget management, spending analytics, and financial insights. Helps users manage their finances effectively with detailed reports.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "JavaScript", "CSS3", "Chart.js", "Local Storage"],
      icons: [SiReact, SiJavascript, SiCss3, SiChartdotjs, SiNetlify],
      github: "https://github.com/satyanandyadav/expense-tracker-react",
      live: "https://expense-tracker-satyanand.netlify.app",
      features: [
        "Expense categorization",
        "Budget tracking",
        "Spending analytics",
        "Visual charts",
        "Export reports",
        "Data persistence"
      ],
      category: "Web Application",
      difficulty: "Intermediate",
      duration: "2 weeks"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-title-container">
            <FaCode className="projects-title-icon" />
            <h2 className="projects-title">My Projects</h2>
          </div>
          <p className="projects-subtitle">
            Here are some of the projects I've built with modern technologies and best practices
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Tilt
              key={project.id}
              className="project-card"
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1200}
              glareEnable={true}
              glareMaxOpacity={0.25}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="24px"
              scale={1.03}
              transitionSpeed={2500}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-badge">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-difficulty">
                      <BiTrophy />
                      {project.difficulty}
                    </span>
                    <span className="project-duration">
                      <BiTime />
                      {project.duration}
                    </span>
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  <h4 className="tech-title">
                    <FaCog />
                    Technologies Used:
                  </h4>
                  <div className="tech-icons">
                    {project.icons.map((Icon, iconIndex) => (
                      <div key={iconIndex} className="tech-icon" title={project.technologies[iconIndex]}>
                        <Icon />
                      </div>
                    ))}
                  </div>
                  <div className="tech-names">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-name">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h4 className="features-title">
                    <FaStar />
                    Key Features:
                  </h4>
                  <ul className="features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <span className="feature-bullet">
                          <FaCheckCircle />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>


              </div>
            </Tilt>
          ))}
        </div>

        <div className="projects-footer">
          <div className="projects-stats">
            <div className="stat-item">
              <FaAward />
              <span>4 Projects</span>
            </div>
            <div className="stat-item">
              <FaCode />
              <span>Modern Tech</span>
            </div>
            <div className="stat-item">
              <FaRocket />
              <span>Live Demos</span>
            </div>
          </div>
          <p className="projects-note">
            All projects are built with modern web technologies and follow best practices for performance, accessibility, and user experience.
          </p>
          <a 
            href="https://github.com/Satyam00190" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            <FaGithub />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
