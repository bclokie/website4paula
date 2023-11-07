import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import MyWork from './MyWork';
import RecentUpdates from './RecentUpdates';
import Contact from './Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-work" element={<MyWork />} />
            <Route path="/recent-updates" element={<RecentUpdates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
