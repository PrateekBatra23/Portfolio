import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen, scrollY }) => {
  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' }
  ];

  return (
    <nav className={`nav-container ${scrollY > 50 ? 'nav-scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-inner">
          <div className="logo">
            <span style={{ color: '#ffffff' }}>PB</span>
            
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className={`nav-button ${
                  currentPage === id 
                    ? 'nav-button-active' 
                    : 'nav-button-inactive'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ display: 'none' }} className="nav-desktop">
            <button className="cta-button">
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  setCurrentPage(id);
                  setIsMenuOpen(false);
                }}
                className={`mobile-menu-button-item ${
                  currentPage === id 
                    ? 'mobile-menu-button-active' 
                    : 'mobile-menu-button-inactive'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;