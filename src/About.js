import React from 'react';
import './About.css'; // Import the About.css file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="/about-image.png" alt="About Paula" />
      </div>
      <div className="about-text">
        <h2>About Paula</h2>
        <p>
          I'm a researcher who uses best practices from behavioural science, implementation science,
          and design science to improve the development and evaluation of health-related innovations.
          I use mixed methods research approaches and work closely with stakeholders (e.g., patients,
          caregivers, and providers) to ensure innovative solutions meet users’ needs.
        </p>
      </div>
    </div>
  );
};

export default About;
