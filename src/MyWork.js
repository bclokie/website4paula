import React from 'react';
import './MyWork.css'; // Import the MyWork.css file for styling

const MyWork = () => {
  return (
    <div className="my-work-container">
      <h2 className="work-title">My Work</h2>
      <div className="work-item">
        <img src="/work-image1.png" alt="Work 1" />
        <h3>Tools and Models</h3>
        <p>See the tools and models I use for my research</p>
      </div>
      <div className="work-item">
        <img src="/work-image2.png" alt="Work 2" />
        <h3>Publications</h3>
        <p>Look through my published articles</p>
      </div>
      <div className="work-item">
        <img src="/work-image3.png" alt="Work 3" />
        <h3>Talks and Workshops</h3>
        <p>Here are some other resources to look through</p>
      </div>
    </div>
  );
};

export default MyWork;
