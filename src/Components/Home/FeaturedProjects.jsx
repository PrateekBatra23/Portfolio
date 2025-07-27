import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const FeaturedProjects = ({ setCurrentPage }) => {
  const featuredProjects = [
    {
      title: 'Notes-App',
      description: 'Full-stack notes Application with advanced features',
      tech: ['React', 'Node.js', 'Mongodb'],
      featured: true
    },
    {
      title: 'Personal Portfolio',
      description: 'Portfolio website showcasing my projects and skills',
      tech: ['React', 'CSS', 'HTML', 'Javascript'],
      featured: false
    }
  ];

  return (
    <section className="featured-section">
      <div className="featured-content">
        <div className="featured-header">
          <div>
            <h2 className="featured-title">Featured Work</h2>
            <p className="featured-subtitle">Recent projects that showcase my capabilities</p>
          </div>
          <button 
            onClick={() => setCurrentPage('projects')}
            className="featured-link hover-translate-x"
          >
            <span>View All Projects</span>
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="featured-grid" style={{ 
          gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr'
        }}>
          {featuredProjects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-image">
                <p style={{ color: '#9ca3af', textAlign: 'center' }}>
                  Project Screenshot
                  <br />
                  <span style={{ fontSize: '0.875rem', opacity: '0.6' }}>Add later</span>
                </p>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.featured && (
                    <div className="featured-badge">
                      Featured
                    </div>
                  )}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="project-link hover-translate-x">
                  <span>View Project</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;