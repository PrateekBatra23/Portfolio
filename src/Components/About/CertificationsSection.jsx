import React from 'react';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    { 
      name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional', 
      issuer: 'Oracle', 
      year: '2025',
      iconClass: 'cert-icon-aws'
    },
    { 
      name: 'OCI 2025 Certified AI Foundations Associate', 
      issuer: 'Oracle', 
      year: '2025',
      iconClass: 'cert-icon-gcp'
    }
  ];

  return (
    <div className="about-section">
      <h3 className="about-section-title" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Certifications</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {certifications.map((cert, idx) => (
          <div key={idx} className="cert-item">
            <div className="cert-card">
              <div className={`cert-icon ${cert.iconClass}`}>
                <Award style={{ color: '#ffffff' }} size={20} />
              </div>
              <div className="cert-details">
                <h4 className="cert-name">{cert.name}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-year">{cert.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;