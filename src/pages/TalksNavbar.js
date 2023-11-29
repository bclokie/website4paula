// TalksNavbar.js
// This isn't being implemented, but I'm saving it here for future reference.

import React from 'react';
import { Link } from 'react-router-dom';
import './TalksNavbar.css'; // Create TalksNavbar.css for styling

const TalksNavbar = () => {
  return (
    <div className="talks-navbar">
      <Link to="/talks+workshops/academic-speaking-and-presenting">Presenting</Link>
      <Link to="/talks+workshops/co-design-workshops">Workshops</Link>
      <Link to="/talks+workshops/company-presentations">Presentations</Link>
      <Link to="/talks+workshops/teaching">Teaching</Link>
    </div>
  );
};

export default TalksNavbar;