// TalksandWorkshops.js

import React from 'react';
import './TalksandWorkshops.css';

const TalksandWorkshops = () => {
  return (
    <div className="talks-workshops-container">
      <div className="work-title-container">
        <h2 className="work-title">Talks and Workshops</h2>
        <div className="header-line"></div>
      </div>
      {/* Section 1: Academic Speaking and Presenting */}
      <div className="talks-workshops-section">
        <h2>Academic Speaking and Presenting</h2>
        <p>
          I have had the opportunity to present at many different academic conferences in my field. Below is a short list of key conferences I have presented at.
        </p>
        <div className="talks-workshops-images">
          {/* First row with three images */}
          <div className="image-row">
            {[...Array(3)].map((_, index) => (
              <img key={index} src={`/S1.${index + 1}.png`} alt={`Conference ${index + 1}`} />
            ))}
          </div>
          {/* Second row with two images */}
          <div className="image-row">
            {[...Array(2)].map((_, index) => (
              <img key={index + 3} src={`/S1.${index + 4}.png`} alt={`Conference ${index + 4}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Co-Design Workshops */}
      <div className="talks-workshops-section">
        <h2>Co-Design Workshops</h2>
        <p>
          I have had the opportunity to run several design workshops for organizations in need of expertise on co-design and designing behavior change interventions. Below are some of the organizations I have worked with to run these workshops.
        </p>
        {/* Images for Section 2 */}
        <div className="image-row">
          {[...Array(3)].map((_, index) => (
            <img key={index} src={`/S2.${index + 1}.png`} alt={`Co-Design Workshop ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Section 3: Company Presentations */}
      <div className="talks-workshops-section">
        <h2>Company Presentations</h2>
        <p>
          I am available to give presentations to companies and organizations who are interested in educating their staff on designing interventions using insights from behavioral science and design science. Below are some of the companies I have presented to.
        </p>
        {/* Images for Section 3 */}
        <div className="image-row">
          {[...Array(2)].map((_, index) => (
            <img key={index} src={`/S3.${index + 1}.png`} alt={`Company Presentation ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Section 4: Teaching */}
      <div className="talks-workshops-section">
        <h2>Teaching</h2>
        <p>
          My teaching has involved guest lecturing for several courses at the Institute of Health Policy, Management and Evaluation at the University of Toronto.
        </p>
        {/* Image for Section 4 */}
        <img src="/S4.1.png" alt="Teaching" />
      </div>
    </div>
  );
};

export default TalksandWorkshops;
