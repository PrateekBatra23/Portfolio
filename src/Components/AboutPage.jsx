import React from 'react';
import { User } from 'lucide-react';
import AboutMainContent from './About/AboutMainContent';
import AboutSidebar from './About/AboutSidebar';
import CTASection from './About/CTASection';
import '../App.css';


const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <div className="about-page-container">
        {/* Header */}
        <div className="page-header">
          <div className="page-badge">
            {/* <User size={16} style={{ color: '#60a5fa' }} /> */}
            <span className="page-badge-text">About Me</span>
          </div>
          
          <h1 className="page-title">
            Developer
            <br />
            <span className="page-title-gradient">
              & Designer
            </span>
          </h1>
        </div>

        <div className="about-grid-container">
          <AboutMainContent />
          <AboutSidebar />
        </div>

        <CTASection />
      </div>
    </div>
  );
};

export default AboutPage;