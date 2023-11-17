// About.js
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
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
          <Link to="/my-work" className="my-work-button">
          See My Work
        </Link>
        </div>
      </div>
    </div>
  );
};

export default About;