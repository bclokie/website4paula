import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import MyWork from './pages/MyWork';
import RecentUpdates from './pages/RecentUpdates';
import Contact from './pages/Contact';
// import ToolsandModels from './pages/ToolsandModels';
// import Publications from './pages/Publications';
// import TalksandWorkshops from './pages/TalksandWorkshops';
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
            {/* <Route path="/tools+models" element={<ToolsandModels />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/talks+workshops" element={<TalksandWorkshops />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
