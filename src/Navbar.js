import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import SocialMediaIcons from './pages/SocialMediaIcons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

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
        Paula Voorheis
      </NavLink>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <NavLink to="/about" onClick={() => { setActiveLink('/about'); handleLinkClick(); }} activeClassName="active-link">
          About
        </NavLink>
        <NavLink to="/my-work" onClick={() => { setActiveLink('/my-work'); handleLinkClick(); }} activeClassName="active-link">
          My Work
        </NavLink>
        <NavLink to="/recent-updates" onClick={() => { setActiveLink('/recent-updates'); handleLinkClick(); }} activeClassName="active-link">
          Updates
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