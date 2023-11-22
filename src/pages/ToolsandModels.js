// ToolsAndMethods.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ToolsandModels.css';

const ToolsandModels = () => {
  return (
    <div className="tools-methods-container">
      <div className="work-title-container">
        <h2 className="work-title">Tools and Methods</h2>
        <div className="header-line"></div>
      </div>
      <div className="work-items">
        <div className="work-item">
          <img src="https://picsum.photos/300/200" alt="Tool 1" />
          <h3>Tool 1 Title</h3>
          <p>Tool 1 description goes here.</p>
        </div>
        <div className="work-item">
          <img src="https://picsum.photos/300/200" alt="Tool 2" />
          <h3>Tool 2 Title</h3>
          <p>Tool 2 description goes here.</p>
        </div>
        <div className="work-item">
          <img src="https://picsum.photos/300/200" alt="Tool 3" />
          <h3>Tool 3 Title</h3>
          <p>Tool 3 description goes here.</p>
        </div>
      </div>
      <Link to="/contact" className="updates-button">
        Contact Me!
      </Link>
    </div>
  );
};

export default ToolsandModels;
