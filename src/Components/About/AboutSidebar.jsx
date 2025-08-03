import React from 'react';
import ContactCard from './ContactCard';
import CertificationsSection from './CertificationsSection';
import ExperienceTimeline from './ExperienceTimeline';
import FunStats from './FunStats';

const AboutSidebar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <ContactCard />
      <CertificationsSection />
      <ExperienceTimeline />
      <FunStats />
    </div>
  );
};

export default AboutSidebar;
