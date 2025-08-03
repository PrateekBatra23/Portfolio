import React from 'react';
import { Calendar } from 'lucide-react';
import SkillsSection from './SkillsSection';

const AboutMainContent = () => {
  const educationData = [

    {
      title: 'Bachelor of Computer Science',
      company: 'VIT Vellore',
      date: '2016 - 2020 | CGPA: 8.75',
      description: 'Developed notes taking and management system using React and Node.js. Active member of the coding club, organizing hackathons and workshops.',
      dotClass: 'timeline-dot-purple',
      companyClass: 'timeline-company-purple'
    },{
      title: 'Class 12th',
      company: 'St. Mary\'s  School',
      date: '2022 | Percentage: 90.16%',
      description: '',
      dotClass: 'timeline-dot-blue',
      companyClass: 'timeline-company-blue'
    }
  ];

  return (
    <div className="about-main">
      {/* Bio Section */}
      <div className="about-section">
        <h2 className="about-section-title">My Story</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p className="about-text">
            Hi, I’m Prateek Batra — a technically grounded and forward-thinking Computer 
            Science undergrad with a strong foundation in algorithms, system design, and 
            full-stack web development. I build robust and scalable applications using the 
            MERN stack and enjoy working across the entire development lifecycle — from 
            setting up backend architectures to crafting responsive frontends
          </p>
          <p className="about-text">
            I currently lead the R&D wing of my college’s tech club, where I guide project 
            teams and help translate ideas into real-world  software.   While my roots are in 
            full-stack development  , I’m actively expanding into the field of Artificial 
            Intelligence, sharpening my skills in Python, data processing, and model 
            integration to build smarter systems in the near future.
          </p>
          <p className="about-text">
            When I’m not coding, I’m usually sketching out ideas for side projects, diving into
             UI/UX trends, or exploring how AI is shaping the future of software.


          </p>
        </div>
      </div>

      <SkillsSection />

      {/* Education */}
      <div className="about-section">
        <h3 className="about-section-title" style={{ fontSize: '1.5rem', marginBottom: '32px' }}>Education</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {educationData.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className={`timeline-dot ${item.dotClass}`}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h4 className="timeline-title">{item.title}</h4>
                <p className={`timeline-company ${item.companyClass}`}>{item.company}</p>
                <p className="timeline-date">
                  <Calendar size={14} style={{ marginRight: '4px' }} />
                  {item.date}
                </p>
                <p className="timeline-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMainContent;