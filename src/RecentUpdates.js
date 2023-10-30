import React from 'react';
import './RecentUpdates.css'; // Import the RecentUpdates.css file for styling

const RecentUpdates = () => {
  return (
    <div className="recent-updates-container">
      <div className="recent-updates-info">
        <h2>Recent Updates</h2>
        <img src="/recent-updates.png" alt="Recent Updates" />
      </div>
      <div className="update-container">
        <div className="update">
          <h3>Update 1</h3>
          <p>Description of Update 1.</p>
        </div>
        <div className="update">
          <h3>Update 2</h3>
          <p>Description of Update 2.</p>
        </div>
        <div className="update">
          <h3>Update 3</h3>
          <p>Description of Update 3.</p>
        </div>
      </div>
    </div>
  );
};

export default RecentUpdates;
