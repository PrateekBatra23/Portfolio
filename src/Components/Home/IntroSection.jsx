import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import pic1 from '../../data/pic1.jpg'; // Fixed path from components/home to data

const IntroSection = ({ setCurrentPage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  return (
    <section className="hero-section">
      <div className="hero-gradient-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-grid" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
          <div className="hero-text-content">
            <div className="hero-text-inner">
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
              <button 
                className="hero-button-primary hover-scale"
                onClick={() => setCurrentPage('projects')}
              >
                View My Work
                <ArrowRight className="transition-transform" size={20} />
              </button>
            </div>
          </div>
          
          {/* Profile Image with Floating Orb Animation */}
          <div className="profile-container animate-slide-in-right">
            <div className="profile-wrapper-new">
              {/* Floating Orbs */}
              <div className="floating-orb orb-1"></div>
              <div className="floating-orb orb-2"></div>
              <div className="floating-orb orb-3"></div>
              <div className="floating-orb orb-4"></div>
              
              {/* Rotating Ring */}
              <div className="rotating-ring"></div>
              
              {/* Pulsing Glow */}
              <div className="pulsing-glow"></div>
              
              {/* Main Image Container */}
              <div className="profile-main-new">
                <div className="profile-border-animation"></div>
                <div className="profile-image-container">
                  <img 
                    src={pic1} 
                    alt="Prateek Batra"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;