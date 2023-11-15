import React from 'react';
import { Link } from 'react-router-dom';
import './TalksAndWorkshops.css';

const TalksAndWorkshops = () => {
  return (
    <div className="talks-and-workshops-container">
      <div className="work-title">
        <h2>Talks and Workshops</h2>
      </div>
      <div className="work-items">
        <Link to="/upcoming-talks" className="work-item">
          <img src="/talk-image1.png" alt="Talk 1" />
          <h3>Upcoming Talks</h3>
          <p>Find information about my upcoming talks</p>
        </Link>
        <Link to="/past-talks" className="work-item">
          <img src="/talk-image2.png" alt="Talk 2" />
          <h3>Past Talks</h3>
          <p>Explore details about my past presentations and talks</p>
        </Link>
        <Link to="/workshops" className="work-item">
          <img src="/workshop-image1.png" alt="Workshop 1" />
          <h3>Workshops</h3>
          <p>Discover the workshops I conduct and have conducted</p>
        </Link>
      </div>
    </div>
  );
};

export default TalksAndWorkshops;
