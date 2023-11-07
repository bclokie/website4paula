import React from 'react';
import './SocialMediaIcons.css';

const SocialMediaIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/paula-voorheis-phd-14415b11a/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://twitter.com/paula_voorheis/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.example.com/google-scholar" target="_blank" rel="noopener noreferrer">
        <i className="ai ai-google-scholar"></i> {/* Updated line with Academicons icon */}
      </a>
    </div>
  );
};

export default SocialMediaIcons;
