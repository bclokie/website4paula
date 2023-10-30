import React from 'react';
import './Contact.css'; // Import the Contact.css file for styling
import SocialMediaIcons from './SocialMediaIcons'; // Import the SocialMediaIcons component

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Please Reach Out!</h2>
      <div className="contact-info">
        <div className="email-section">
          <h3>Email</h3>
          <p>paulavoorheis@gmail.com</p>
        </div>
        <div className="social-media-section">
          <h3>Connect with Me</h3>
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default Contact;
