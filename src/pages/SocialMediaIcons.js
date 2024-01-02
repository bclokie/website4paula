// SocialMediaIcons.js

import React from 'react';
import './SocialMediaIcons.css';

const SocialMediaIcons = () => {
  return (
    <div className="social-icons">
      <a className="social-link" href="https://www.linkedin.com/in/paula-voorheis-phd-14415b11a/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a className="social-link" href="https://twitter.com/paula_voorheis/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a className="social-link" href="https://scholar.google.ca/citations?hl=en&user=X5tw-kEAAAAJ&view_op=list_works&gmla=AJ1KiT1Wnnb5ARgiGLnOWFW1hoyDwPLSMEx-70qeAXjjVL0l4KyrzsxuqFp1r-MxtbkASbS-a6tcQ5DBCHJEz4Jw" target="_blank" rel="noopener noreferrer">
        <i className="ai ai-google-scholar"></i> 
      </a>
    </div>
  );
};

export default SocialMediaIcons;
