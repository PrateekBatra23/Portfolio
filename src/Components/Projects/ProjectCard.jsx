import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card hover-translate-y">
      {/* Project Image */}
      <div className="project-image" style={{ position: 'relative' }}>
        <div style={{ 
          position: 'absolute',
          inset: '0',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)'
        }}></div>
        <div style={{
          position: 'absolute',
          inset: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
                src={project.image} 
                alt={`${project.title} image`}
                style={{ width: '100%', height: '100%', borderRadius: '8px' }}
            />
        </div>
        
        {/* Status Badge */}
        <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
          <div className={`status-badge ${
            project.status === 'Live' ? 'status-live' :
            project.status === 'Beta' ? 'status-beta' :
            'status-development'
          }`}>
            {project.status}
          </div>
        </div>
        
        {project.featured && (
          <div style={{ position: 'absolute', top: '24px', left: '24px' }}>
            <div className="featured-badge" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px' 
            }}>
              <Star size={12} />
              <span>Featured</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Project Details */}
      <div className="project-content">
        <h3 className="project-title" style={{ marginBottom: '16px' }}>{project.title}</h3>
        <p className="project-description" style={{ marginBottom: '24px', lineHeight: '1.6' }}>{project.description}</p>
        
        {/* Tech Stack */}
        <div className="project-tech" style={{ marginBottom: '32px' }}>
          {project.tech.map((tech, techIdx) => (
            <span key={techIdx} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a
            href={project.demo}
            className="hero-button-primary"
            style={{ 
              flex: '1',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px'
            }}
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
          <a
            href={project.github}
            className="hero-button-secondary"
            style={{ 
              flex: '1',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px'
            }}
          >
            <Github size={18} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;