import React from 'react';
import { Code } from 'lucide-react';

const TechnologyStack = () => {
  const techCategories = [
    { 
      category: 'Frontend', 
      description: 'Modern',
      skills: ['React', 'HTML', 'JavaScript', 'CSS'],
      iconClass: 'tech-icon-frontend'
    },
    { 
      category: 'Backend', 
      description: 'Server & Database',
      skills: ['Node.js', 'Express', 'SQL', 'MongoDB'],
      iconClass: 'tech-icon-backend'
    },
    { 
      category: 'UI/UX', 
      description: 'Design',
      skills: ['Wireframing', 'Prototyping'],
      iconClass: 'tech-icon-cloud'
    },
    { 
      category: 'Tools & Design', 
      description: 'Workflow',
      skills: ['Figma', 'Git', 'VS Code', 'RStudio'],
      iconClass: 'tech-icon-tools'
    }
  ];

  return (
    <section className="tech-section">
      <div className="tech-content">
        <div className="tech-header">
          <h2 className="tech-title">Technology Stack</h2>
          <p className="tech-subtitle">
            Leveraging industry-leading technologies to build scalable, performant applications
          </p>
        </div>
        
        <div className="tech-grid" style={{ 
          gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(4, 1fr)' : 
                               window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr'
        }}>
          {techCategories.map((category, idx) => (
            <div key={idx} className="tech-card hover-translate-y">
              <div className={`tech-icon ${category.iconClass}`}>
                <Code style={{ color: '#ffffff' }} size={24} />
              </div>
              
              <h3 className="tech-category-title">{category.category}</h3>
              <p className="tech-category-desc">{category.description}</p>
              
              <div className="tech-skills">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="tech-skill">
                    <div className="tech-skill-dot"></div>
                    <span className="tech-skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
