import React from 'react';

const CTASection = () => {
  return (
    <div className="cta-section">
      <div className="cta-card">
        <h2 className="cta-title">Ready to work together?</h2>
        <p className="cta-description">
          I'm always open to discussing new opportunities, innovative projects, 
          or just having a chat about technology.
        </p>
        <div className="cta-buttons" style={{ alignItems: 'center' }}>
          <button className="cta-button-primary">
            Start a Project
          </button>
          <button className="cta-button-secondary">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;