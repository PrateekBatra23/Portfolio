import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-gradient-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-grid" style={{ gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="availability-badge">
                <div className="availability-dot"></div>
                <span className="availability-text">Available for new opportunities</span>
              </div>
              
              <h1 className="hero-title animate-slide-in-left">
                Prateek
                <br />
                <span className="hero-title-gradient">
                  Batra
                </span>
              </h1>
              
              <p className="hero-description animate-fade-in">
                Crafting exceptional digital experiences with cutting-edge technology and pixel-perfect design.
              </p>
            </div>
            
            <div className="hero-buttons">
              <button className="hero-button-primary hover-scale">
                <span>View My Work</span>
                <ArrowRight className="transition-transform" size={20} />
              </button>
              
            </div>

           
          </div>
          
          {/* Profile Image with Premium Frame */}
          <div className="profile-container animate-slide-in-right">
            <div className="profile-wrapper">
              {/* Animated Background Elements */}
              <div className="profile-bg-1"></div>
              <div className="profile-bg-2"></div>
              
              {/* Main Image Container */}
              <div className="profile-main">
                <div className="profile-overlay"></div>
                <div className="profile-placeholder">
                  <div style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '8px' }}>Your Professional Photo</div>
                  <div style={{ fontSize: '0.875rem', opacity: '0.75' }}>Replace this placeholder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;