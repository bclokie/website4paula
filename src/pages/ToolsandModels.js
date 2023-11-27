// ToolsAndMethods.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ToolsandModels.css';

const ToolsandModels = () => {
  return (
    <div className="tools-methods-container">
      <div className="work-title-container">
        <h2 className="work-title">Tools and Models</h2>
        <div className="header-line"></div>
      </div>

      {/* Section 1: Behavioral Design Thinking Approach */}
      <div className="section-container">
        <h3 className="section-title">Behavioral Design Thinking Approach</h3>
        <p className="section-subtitle">
          Behavioral Design Thinking (BDT) is a novel approach to designing behavior change interventions,
          integrating best practices from Behavioral Design (BD) and Design Thinking (DT).
          The tools below will help you navigate the BDT process.
        </p>
        <div className="work-items">
          <div className="work-item">
            <img src="https://picsum.photos/300/200" alt="Playbook" />
            <h3>Playbook: Behavioral Design Thinking</h3>
            <p>Explanation for the playbook goes here.</p>
          </div>
          <div className="work-item">
            <img src="https://picsum.photos/300/200" alt="Model" />
            <h3>Model: Design Methods for “Effectively Engaging” Digital Health Interventions</h3>
            <p>Explanation for the model goes here.</p>
          </div>
          <div className="work-item">
            <img src="https://picsum.photos/300/200" alt="Insights" />
            <h3>Insights: Behavioral Design Thinking Considerations and Challenges</h3>
            <p>Explanation for the insights goes here.</p>
          </div>
        </div>
      </div>

      {/* Section 2: Behavioral Design Tools */}
      <div className="section-container">
        <h3 className="section-title">Behavioral Design Tools</h3>
        <p className="section-subtitle">
          Behavioral Design (BD) theories, models, and frameworks are helpful to design better behaviour
          change interventions; however, it can be hard to select which ones to choose. The tools below
          will help you select the best theories, models, and frameworks for your work.
        </p>
        <div className="work-items">
          <div className="work-item">
            <img src="https://picsum.photos/300/200" alt="Toolkit" />
            <h3>Toolkit: Types of Behavioral Design Tools</h3>
            <p>Explanation for the toolkit goes here.</p>
          </div>
          <div className="work-item">
            <img src="https://picsum.photos/300/200" alt="Guidance" />
            <h3>Guidance: How to Select Behavioral Design Tools</h3>
            <p>Explanation for the guidance goes here.</p>
          </div>
          <div className="work-item">
            <img src="https://picsum.photos/300/200" alt="Recommendations" />
            <h3>Recommendations: How to Improve Behavioral Design Tools</h3>
            <p>Explanation for the recommendations goes here.</p>
          </div>
        </div>
      </div>

      {/* Section 3: Co-Designing Behaviour Change Interventions */}
      <div className="section-container">
        <h3 className="section-title">Co-Designing Behaviour Change Interventions</h3>
        <p className="section-subtitle">
          Co-designing with patients, caregivers, and families can help ensure the behaviour change
          interventions you design better meet people’s needs. The tools below offer guidance on how
          to maximize the value of co-design.
        </p>
        <div className="work-items">
          <div className="work-item">
            <img src="https://picsum.photos/300/200" alt="Playbook" />
            <h3>Playbook: Co-Design Process for Maximal Value</h3>
            <p>Explanation for the playbook goes here.</p>
          </div>
          <div className="work-item">
            <img src="https://picsum.photos/300/200" alt="Insights" />
            <h3>Insights: How Co-Design Adds Value</h3>
            <p>Explanation for the insights goes here.</p>
          </div>
        </div>
      </div>

      {/* Section 4: Strategic Behavioural Analysis */}
      <div className="section-container">
        <h3 className="section-title">Strategic Behavioural Analysis</h3>
        <p className="section-subtitle">
          Strategic Behavioural Analysis (SBA) offers a systematic way to review the literature using a
          behavioural science lens. The tools below offer guidance on how to conduct a SBA.
        </p>
        <div className="work-items">
          <div className="work-item">
            <img src="https://picsum.photos/300/200" alt="Playbook" />
            <h3>Playbook: Strategic Behavioural Analysis</h3>
            <p>Explanation for the playbook goes here.</p>
          </div>
        </div>
      </div>

      <Link to="/contact" className="updates-button">
        Contact Me!
      </Link>
    </div>
  );
};

export default ToolsandModels;
