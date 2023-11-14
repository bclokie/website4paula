import React from 'react';
import './RecentUpdates.css'; // Import the RecentUpdates.css file for styling

const RecentUpdates = () => {
  return (
    <div className="recent-updates-container">
      {/* Header Details */}
      <div className="contact-header">
        <h1>Recent Updates</h1>
        <div className="header-line"></div>
      </div>

      {/* Recent Updates Content */}
      <div className="recent-updates-info">
        <img src="/recent-updates.png" alt="Recent Updates" />
      </div>

      <div className="update-container">
        <div className="update">
          <h3>Update 1</h3>
          <p>Here is the content for the first update. Waiting for Paula to update the update</p>
        </div>
        <div className="update">
          <h3>Update 2</h3>
          <p>Here is the content for the second update. Waiting for Paula to update the update</p>
        </div>
        <div className="update">
          <h3>Update 3</h3>
          <p>Here is the content for the third update. Waiting for Paula to update the update</p>
        </div>
      </div>
    </div>
  );
};

export default RecentUpdates;
