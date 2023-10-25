import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src="/logo.png" alt="Logo" /> {/* Logo Image */}
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/publications">Publications</a>
        <a href="/tools+models">Tools & Models</a>
        <a href="/blog+reports">Blog & Reports</a>
      </div>
    </nav>
  );
};

export default Navbar;
