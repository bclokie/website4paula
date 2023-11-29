// TalksandWorkshops.js

import React from 'react';
import './TalksandWorkshops.css';

const TalksandWorkshops = () => {
  return (
    <div className="talks-workshops-container">
      {/* Section 1: Academic Speaking and Presenting */}
      <div className="talks-workshops-section">
        <h2>Academic Speaking and Presenting</h2>
        <p>
          I have had the opportunity to present at many different academic conferences in my field. Below is a short list of key conferences I have presented at.
        </p>
        <div className="talks-workshops-images">
          {/* Insert 5 images */}
          {[...Array(5)].map((_, index) => (
            <img key={index} src="https://via.placeholder.com/200" alt={`Conference ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Section 2: Co-Design Workshops */}
      <div className="talks-workshops-section">
        <h2>Co-Design Workshops</h2>
        <p>
          I have had the opportunity to run several design workshops for organizations in need of expertise on co-design and designing behavior change interventions. Below are some of the organizations I have worked with to run these workshops.
        </p>
        <div className="talks-workshops-images">
          {/* Insert 3 images */}
          {[...Array(3)].map((_, index) => (
            <img key={index} src="https://via.placeholder.com/200" alt={`Workshop Organization ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Section 3: Company Presentations */}
      <div className="talks-workshops-section">
        <h2>Company Presentations</h2>
        <p>
          I am available to give presentations to companies and organizations interested in educating their staff on designing interventions using insights from behavioral science and design science. Below are some of the companies I have presented to.
        </p>
        <div className="talks-workshops-images">
          {/* Insert 2 images */}
          {[...Array(2)].map((_, index) => (
            <img key={index} src="https://via.placeholder.com/200" alt={`Company ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Section 4: Teaching */}
      <div className="talks-workshops-section">
        <h2>Teaching</h2>
        <p>
          My teaching has involved guest lecturing for several courses at the Institute of Health Policy, Management and Evaluation at the University of Toronto.
        </p>
        <div className="talks-workshops-images">
          {/* Insert 1 image */}
          <img src="https://via.placeholder.com/200" alt="Teaching" />
        </div>
      </div>
    </div>
  );
};

export default TalksandWorkshops;
