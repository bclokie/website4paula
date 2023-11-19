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
          <br />
          <p>
            I currently work as a Postdoctoral Researcher at Sinai Health, Toronto, to advance my program
            of research on behaviourally-informed innovations. I also work as the Head of R&amp;D at
            VeroSource Solutions, helping them evaluate and enhance their digital health products and
            solutions.
          </p>
          <br />
          <p>
            In addition to this work, I am also a member of University of Toronto’s Entrepreneurship
            Accelerator, “InnovED.” InnovED is committed to innovation in education, focusing on
            supporting meaningful improvements in a new or modified practice, technology, or process
            that supports any part of our educational ecosystem.
          </p>
          <br />
          <p>
            My education includes:
            <br />
            - BSc in Biology &amp; Society at Cornell University - Research focused on smoking cessation
            behaviour change.
            <br />
            - MSc in Public Health at the London School of Hygiene and Tropical Medicine – Research
            focused on using behavioural economic insights to improve public health nutrition
            guidance.
            <br />
            - PhD in Health Services Research at University of Toronto - Research focused on using
            behavioural science insights to improve the design of digital health interventions.
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