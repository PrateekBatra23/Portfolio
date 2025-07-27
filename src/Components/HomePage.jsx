import React from 'react';
import HeroSection from './Home/IntroSection.jsx';
import TechnologyStack from './Home/TechnologyStack.jsx';
import FeaturedProjects from './Home/FeaturedProjects.jsx';
import '../App.css'; // Ensure styles are applied
const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="home-page-wrapper">
      <HeroSection />
      <TechnologyStack />
      <FeaturedProjects setCurrentPage={setCurrentPage} />
    </div>
  );
};


export default HomePage;