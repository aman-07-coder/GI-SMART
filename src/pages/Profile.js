import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <div className="avatar-circle">T</div>
          </div>
          <div className="profile-info">
            <h1 className="profile-username">Username</h1>
            <p className="profile-email">user@example.com</p>
            <div className="profile-stats">
              <div className="stat-box">
                <div className="stat-value">1,250</div>
                <div className="stat-label">Games Played</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">45,680</div>
                <div className="stat-label">Best Score</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">#125</div>
                <div className="stat-label">Global Rank</div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h2 className="section-heading">Recent Games</h2>
            <div className="games-list">
              {[1, 2, 3, 4, 5].map((game) => (
                <div key={game} className="game-item">
                  <div className="game-date">Today, {game}:00 PM</div>
                  <div className="game-details">
                    <span className="game-score">Score: {45000 - game * 1000}</span>
                    <span className="game-lines">Lines: {50 - game * 5}</span>
                    <span className="game-level">Level: {10 - game}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <h2 className="section-heading">Achievements</h2>
            <div className="achievements-grid">
              {['First Win', '100 Games', 'High Score', 'Speed Demon', 'Perfect Clear', 'Combo Master'].map((achievement, idx) => (
                <div key={idx} className="achievement-card">
                  <div className="achievement-icon">🏆</div>
                  <div className="achievement-name">{achievement}</div>
                  <div className="achievement-date">Unlocked</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

