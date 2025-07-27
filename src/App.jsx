import React, { useState, useEffect } from 'react';
import Navigation from './Components/Navigation.jsx';
import HomePage from './Components/HomePage.jsx';
import './App.css';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
      />
      
      {/* FIXED: Removed app-container wrapper */}
      <HomePage setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Portfolio;