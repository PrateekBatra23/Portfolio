import React from 'react';

const SkillsSection = () => {
  const programmingLanguages = [
    { lang: 'JavaScript', level: 95, colorClass: 'skill-js' },
    { lang: 'Python', level: 90, colorClass: 'skill-python' },
    { lang: 'Java', level: 85, colorClass: 'skill-java' },
    { lang: 'C++', level: 80, colorClass: 'skill-go' },
  ];

  const coreCompetencies = [
    'Full-Stack Development',
    'System Architecture',
    'UI/UX Design',
    'Team Leadership',
    'Problem Solving',
  ];

  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
      gap: '32px'
    }}>
      {/* Programming Languages */}
      <div className="about-section">
        <h3 className="about-section-title" style={{ fontSize: '1.5rem', marginBottom: '32px' }}>Programming Languages</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {programmingLanguages.map((item, idx) => (
            <div key={idx} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{item.lang}</span>
                <span className="skill-percentage">{item.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className={`skill-progress ${item.colorClass}`}
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="about-section">
        <h3 className="about-section-title" style={{ fontSize: '1.5rem', marginBottom: '32px' }}>Core Competencies</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {coreCompetencies.map((skill, idx) => (
            <div key={idx} className="tech-skill">
              <div style={{ width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div>
              <span style={{ color: '#d1d5db', fontWeight: '500' }}>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;