import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-main">TETR</span>
            <span className="title-sub">Play Tetris Online</span>
          </h1>
          <p className="hero-description">
            Experience the classic puzzle game with modern graphics, 
            competitive multiplayer, and global leaderboards.
          </p>
          <div className="hero-buttons">
            <Link to="/play" className="btn-primary">
              Play Now
            </Link>
            <Link to="/leaderboard" className="btn-secondary">
              View Leaderboard
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="tetris-preview">
            <div className="grid-container">
              {Array.from({ length: 200 }).map((_, i) => (
                <div key={i} className="grid-cell"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎮</div>
              <h3 className="feature-title">Smooth Gameplay</h3>
              <p className="feature-description">
                Optimized controls and responsive design for the best gaming experience.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">Global Rankings</h3>
              <p className="feature-description">
                Compete with players worldwide and climb the leaderboards.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Fast & Modern</h3>
              <p className="feature-description">
                Built with cutting-edge technology for lightning-fast performance.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Multiple Modes</h3>
              <p className="feature-description">
                Play solo, compete in multiplayer, or challenge yourself with special modes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Players</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50M+</div>
              <div className="stat-label">Games Played</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Daily Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

