import React from 'react';
import { Mail, MapPin, Globe, Github, Linkedin } from 'lucide-react';

const ContactCard = () => {
  const contactInfo = [
    {
      icon: Mail,
      iconClass: 'contact-icon-mail',
      label: 'Email',
      value: 'prateekbatra001@gmail.com'
    },
    {
      icon: MapPin,
      iconClass: 'contact-icon-location',
      label: 'Location',
      value: 'Delhi, India'
    },
    // {
    //   icon: Globe,
    //   iconClass: 'contact-icon-website',
    //   label: 'Website',
    //   value: ''
    // }
  ];

  return (
    <div className="contact-card">
      <h3 className="about-section-title" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Let's Connect</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {contactInfo.map((item, idx) => (
          <div key={idx} className="contact-item">
            <div className="contact-icon">
              <item.icon className={item.iconClass} size={20} />
            </div>
            <div>
              <p className="contact-label">{item.label}</p>
              <p className="contact-value">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="contact-buttons">
        <a href="https://github.com/PrateekBatra23" className="contact-button contact-button-primary">
          <Github style={{ display: 'inline', marginRight: '8px' }} size={16} />
          GitHub
        </a>
        <a href="www.linkedin.com/in/prateekbatradel" className="contact-button contact-button-secondary">
          <Linkedin style={{ display: 'inline', marginRight: '8px' }} size={16} />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactCard;