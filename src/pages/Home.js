// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Paula Voorheis, PhD</h1>
        <p>Driving Innovation through Behaviourally Informed Design Research</p>
        <Link to="/about" className="about-button">
          About Me
        </Link>
      </div>
      <div className="home-image">
        <img src="/home-paula.png" alt="Profile" />
      </div>
    </div>
  );
};

export default Home;