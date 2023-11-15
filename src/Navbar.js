import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // If you're using React Router
import './Navbar.css';
import SocialMediaIcons from './pages/SocialMediaIcons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" onClick={() => setActiveLink('/')}>
        Paula Voorheis, PhD
      </NavLink>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <NavLink to="/about" onClick={() => setActiveLink('/about')} activeClassName="active-link">
          About
        </NavLink>
        <NavLink to="/my-work" onClick={() => setActiveLink('/my-work')} activeClassName="active-link">
          My Work
        </NavLink>
        <NavLink to="/recent-updates" onClick={() => setActiveLink('/recent-updates')} activeClassName="active-link">
          Updates
        </NavLink>
        <NavLink to="/contact" onClick={() => setActiveLink('/contact')} activeClassName="active-link">
          Contact
        </NavLink>
      </div>
      <SocialMediaIcons />
    </nav>
  );
};

export default Navbar;