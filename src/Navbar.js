import React, { useState } from 'react';
import './Navbar.css';
import SocialMediaIcons from './SocialMediaIcons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        Paula Voorheis, PhD 
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="/about">About</a>
        <a href="/my-work">My Work</a>
        <a href="/recent-updates">Recent Updates</a>
        <a href="/contact">Contact</a>
      </div>
      <SocialMediaIcons />
    </nav>
  );
};

export default Navbar;
