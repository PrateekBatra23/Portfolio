import React from 'react';
import IntroSection from './Home/IntroSection.jsx';
import TechnologyStack from './Home/TechnologyStack.jsx';
import FeaturedProjects from './Home/FeaturedProjects.jsx';
import '../App.css'; // Ensure styles are applied
const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="home-page-wrapper">
      <IntroSection setCurrentPage={setCurrentPage}/>
      <TechnologyStack />
      <FeaturedProjects setCurrentPage={setCurrentPage} />
    </div>
  );
};


export default HomePage;