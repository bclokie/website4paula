import React from 'react';
import { Link } from 'react-router-dom'; 
import './MyWork.css';

const MyWork = () => {
  return (
    <div className="my-work-container">
      <div className="work-title">
        <h2>My Work</h2>
      </div>
      <div className="work-items">
        <Link to="/tools+models" className="work-item">
          <img src="/work-image1.png" alt="Work 1" />
          <h3>Tools and Models</h3>
          <p>See the tools and models I use for my research</p>
        </Link>
        <Link to="/publications" className="work-item">
          <img src="/work-image2.png" alt="Work 2" />
          <h3>Publications</h3>
          <p>Look through my published articles</p>
        </Link>
        <Link to="/talks+workshops" className="work-item">
          <img src="/work-image3.png" alt="Work 3" />
          <h3>Talks and Workshops</h3>
          <p>Here are some other resources to look through</p>
        </Link>
      </div>
    </div>
  );
};

export default MyWork;
