// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Paula</h2>
        <div className="header-line"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="/about-image.png" alt="About Paula" />
        </div>
        <div className="about-text">
          <p>
            I'm a researcher who uses best practices from behavioural science, implementation science,
            and design science to improve the development and evaluation of health-related innovations.
            I use mixed methods research approaches and work closely with stakeholders (e.g., patients,
            caregivers, and providers) to ensure innovative solutions meet users’ needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
