import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import image1 from '../../data/image.png'; 
const FeaturedProjects = ({ setCurrentPage }) => {
  const featuredProjects = [
    {
      title: 'Notes-App',
      description: 'Full-stack notes Application with advanced features',
      tech: ['React', 'Node.js', 'Mongodb'],
      featured: true,
      github: 'https://github.com/PrateekBatra23/notes-app-frontend',
      image: image1
    },
    {
      title: 'Personal Portfolio',
      description: 'Portfolio website showcasing my projects and skills',
      tech: ['React', 'CSS', 'HTML', 'Javascript'],
      featured: false,
      github: 'https://github.com/PrateekBatra23/Portfolio',
      image: image1
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
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                
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
                
                <button className="project-link hover-translate-x" onClick={() => window.open(project.github, '_blank')}>
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