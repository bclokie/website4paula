import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import SocialMediaIcons from './pages/SocialMediaIcons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [setActiveLink] = useState('/');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" onClick={() => { setActiveLink('/'); handleLinkClick(); }}>
        <img src='./logo.svg' alt="Logo" />
      </NavLink>
      <div className={`menu-icon ${isOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <NavLink to="/about" onClick={() => { setActiveLink('/about'); handleLinkClick(); }} activeClassName="active-link">
          About
        </NavLink>
        <NavLink to="/my-work" onClick={() => { setActiveLink('/my-work'); handleLinkClick(); }} activeClassName="active-link">
          My Work
        </NavLink>
        <NavLink to="/contact" onClick={() => { setActiveLink('/contact'); handleLinkClick(); }} activeClassName="active-link">
          Contact
        </NavLink>
      </div>
      <SocialMediaIcons />
    </nav>
  );
};

export default Navbar;