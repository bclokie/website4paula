import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Academic Articles</a>
      </div>
    </nav>
  );
};

export default Navbar;
