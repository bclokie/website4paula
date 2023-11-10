import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Feel free to contact me!</h2>

      <a href="mailto:paulavoorheis@gmail.com" className="contact-section">
        <FaEnvelope className="icon" />
        <p>paulavoorheis@gmail.com</p>
      </a>

      <a href="https://www.linkedin.com/in/paula-voorheis-phd-14415b11a/" target="_blank" rel="noopener noreferrer" className="contact-section">
        <FaLinkedin className="icon" />
        <p>LinkedIn</p>
      </a>

      <a href="https://twitter.com/paula_voorheis/" target="_blank" rel="noopener noreferrer" className="contact-section">
        <FaTwitter className="icon" />
        <p>Twitter</p>
      </a>

      <a href="https://scholar.google.ca/citations?hl=en&user=X5tw-kEAAAAJ&view_op=list_works&gmla=AJ1KiT1Wnnb5ARgiGLnOWFW1hoyDwPLSMEx-70qeAXjjVL0l4KyrzsxuqFp1r-MxtbkASbS-a6tcQ5DBCHJEz4Jw" target="_blank" rel="noopener noreferrer" className="contact-section">
        <i className="ai ai-google-scholar icon"></i>
        <p>Google Scholar</p>
      </a>
    </div>
  );
};

export default Contact;
