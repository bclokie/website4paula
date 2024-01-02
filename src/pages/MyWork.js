// MyWork.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './MyWork.css';


const MyWork = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="my-work-container">
      <div className="my-work-title-container">
        <h2 className="my-work-title">My Work</h2>
        <div className="my-work-header-line"></div>
      </div>
      <div className="my-work-items">
        <div className="work-item" onClick={() => navigateTo('/tools+models')}>
          <img src="/work-image1.png" alt="Work 1" />
          <h3>Tools and Models</h3>
          <p>See the tools and models I use for my research</p>
        </div>
        <div className="work-item" onClick={() => navigateTo('/publications')}>
          <img src="/work-image2.png" alt="Work 2" />
          <h3>Publications</h3>
          <p>Look through my published articles</p>
        </div>
        <div className="work-item" onClick={() => navigateTo('/talks+workshops')}>
          <img src="/work-image3.png" alt="Work 3" />
          <h3>Talks and Workshops</h3>
          <p>Here are some other resources to look through</p>
        </div>
      </div>
      <Link to="/contact" className="my-updates-button">
        Contact Me!
      </Link>
      <div className="my-work-footer-line">-----------</div>
    </div>
  );
};

export default MyWork;