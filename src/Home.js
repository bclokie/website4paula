import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Paula Voorheis PhD</h1>
        <p>Driving Innovation through Behaviourally Informed Design Research</p>
      </div>
      <div className="home-image">
        <img src="/home-paula.png" alt="Profile" />      
      </div>
    </div>
  );
};

export default Home;
