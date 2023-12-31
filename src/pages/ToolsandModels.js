// ToolsandModels.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ToolsandModels.css';

const ToolsandModels = () => {
  const [clickedImage, setClickedImage] = useState(null);
  
  const handleImageClick = (imageSrc) => {
    setClickedImage(imageSrc);
  };
  
  return (
    <div className="tools-models-container">
      <div className="tools-models-title-container">
        <h2 className="tools-models-title">Tools and Models</h2>
        <div className="tools-models-header-line"></div>
      </div>

      {/* Section 1: Behavioral Design Thinking Approach */}
      <div className="tools-models-section-container">
        <hr className="divider" />
        <h3 className="tools-models-section-title">Behavioral Design Thinking Approach</h3>
        <hr className="divider" />
        <p className="tools-models-section-subtitle">
          Behavioral Design Thinking (BDT) is a novel approach to designing behavior change interventions,
          integrating best practices from Behavioral Design (BD) and Design Thinking (DT).
          The tools below will help you navigate the BDT process.
        </p>
        <div className="tools-models-work-items">
          <div className="tools-models-work-item" onClick={() => handleImageClick("/TM1-1.png")}>
            <h3>Playbook</h3>
            <img src="/TM1-1.png" alt="Playbook" />
            <p>Behavioral Design Thinking</p>
          </div>
          <hr className="divider" />
          <div className="tools-models-work-item" onClick={() => handleImageClick("/TM1-2.png")}>
            <h3>Model</h3>
            <img src="/TM1-2.png" alt="Model" />
            <p>Design models for “Effectively Engaging” Digital Health Interventions</p>
          </div>
          <hr className="divider" />
          <div className="tools-models-work-item" onClick={() => handleImageClick("/TM1-3.png")}>
            <h3>Insights</h3>
            <img src="/TM1-3.png" alt="Insights" />
            <p>Behavioral Design Thinking Considerations and Challenges</p>
          </div>
        </div>
      </div>

      {/* Section 2: Behavioral Design Tools */}
      <div className="tools-models-section-container">
        <hr className="divider" />
        <h3 className="tools-models-section-title">Behavioral Design Tools</h3>
        <hr className="divider" />
        <p className="tools-models-section-subtitle">
          Behavioral Design (BD) theories, models, and frameworks are helpful to design better behaviour
          change interventions; however, it can be hard to select which ones to choose. The tools below
          will help you select the best theories, models, and frameworks for your work.
        </p>
        <div className="tools-models-work-items">
          <div className="tools-models-work-item" onClick={() => handleImageClick("/TM2-1.png")}>
            <h3>Toolkit</h3>
            <img src="/TM2-1.png" alt="Toolkit" />
            <p>Types of Behavioral Design Tools</p>
          </div>
          <hr className="divider" />
          <div className="tools-models-work-item" onClick={() => handleImageClick("/TM2-2.png")}>
            <h3>Guidance</h3>
            <img src="/TM2-2.png" alt="Guidance" />
            <p>How to Select Behavioral Design Tools</p>
          </div>
          <hr className="divider" />
          <div className="tools-models-work-item" onClick={() => handleImageClick("/TM2-3.png")}>
            <h3>Recommendations</h3>
            <img src="/TM2-3.png" alt="Recommendations" />
            <p>How to Improve Behavioral Design Tools</p>
          </div>
        </div>
      </div>

      {/* Section 3: Co-Designing Behaviour Change Interventions */}
      <div className="tools-models-section-container">
        <hr className="divider" />
        <h3 className="tools-models-section-title">Co-Designing Behaviour Change Interventions</h3>
        <hr className="divider" />
        <p className="tools-models-section-subtitle">
          Co-designing with patients, caregivers, and families can help ensure the behaviour change
          interventions you design better meet people’s needs. The tools below offer guidance on how
          to maximize the value of co-design.
        </p>
        <div className="tools-models-work-items">
          <div className="tools-models-work-item" onClick={() => handleImageClick("/TM3-1.png")}>
            <h3>Playbook</h3>
            <img src="/TM3-1.png" alt="Playbook" />
            <p>Co-Design Process for Maximal Value</p>
          </div>
          <hr className="divider" />
          <div className="tools-models-work-item" onClick={() => handleImageClick("/TM3-2.png")}>
            <h3>Insights</h3>
            <img src="/TM3-2.png" alt="Insights" />
            <p>How Co-Design Adds Value</p>
          </div>
        </div>
      </div>

      {/* Section 4: Strategic Behavioural Analysis */}
      <div className="tools-models-section-container">
        <hr className="divider" />
        <h3 className="tools-models-section-title">Strategic Behavioural Analysis</h3>
        <hr className="divider" />
        <p className="tools-models-section-subtitle">
          Strategic Behavioural Analysis (SBA) offers a systematic way to review the literature using a
          behavioural science lens. The tools below offer guidance on how to conduct a SBA.
        </p>
        <div className="tools-models-work-items">
          <div className="tools-models-work-item" onClick={() => handleImageClick("/TM4-1.png")}>
            <h3>Playbook</h3>
            <img src="/TM4-1.png" alt="Playbook" />
            <p>Strategic Behavioural Analysis</p>
          </div>
        </div>
      </div>

      <Link to="/publications" className="tools-models-updates-button">
        Publications
      </Link>
      
      {/* Overlay for the clicked image */}
      {clickedImage && (
        <div className="tools-models-overlay" onClick={() => setClickedImage(null)}>
          <img src={clickedImage} alt="Expanded" className="tools-models-expanded-image" />
        </div>
      )}
    </div>
  );
};

export default ToolsandModels;
