import React from 'react';
import { Calendar } from 'lucide-react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: 'Research & Development Head ',
      company: 'Mozilla Firefox Club, VIT',
      date: 'Jan 2025 - Present',
      dotClass: 'timeline-dot-green animate-pulse',
      companyClass: 'timeline-company-green'
    },
    {
      title: 'Junior Core Member',
      company: 'Mozilla Firefox Club, VIT',
      date: 'Mar 2024- Dec 2024',
      dotClass: 'timeline-dot-blue animate-pulse',
      companyClass: 'timeline-company-blue'
    }

  ];

  return (
    <div className="about-section">
      <h3 className="about-section-title" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Experience</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className={`timeline-dot ${exp.dotClass}`}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h4 className="timeline-title" style={{ fontSize: '1.125rem' }}>{exp.title}</h4>
              <p className={`timeline-company ${exp.companyClass}`}>{exp.company}</p>
              <p className="timeline-date">
                <Calendar size={14} style={{ marginRight: '4px' }} />
                {exp.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
