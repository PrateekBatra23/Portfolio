import React from 'react';
import { Code, Github, ExternalLink, Star } from 'lucide-react';
import ProjectCard from './Projects/ProjectCard';
import FilterTabs from './Projects/FilterTabs';
import { projectsData } from '../data/projectsData';

const ProjectsPage = () => {
  return (
    <div className="page-wrapper">
      <div className="projects-page-container">
        {/* Header */}
        <div className="page-header">
          <div className="page-badge">
            <Code size={16} style={{ color: '#60a5fa' }} />
            <span className="page-badge-text">Portfolio</span>
          </div>
          
          <h1 className="page-title">
            My Projects
          </h1>
          <p className="page-description">
            A collection of projects that demonstrate my expertise in modern web development, 
            from concept to deployment.
          </p>
        </div>

        <FilterTabs />

        {/* Projects Grid */}
        <div className="projects-grid-container">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
