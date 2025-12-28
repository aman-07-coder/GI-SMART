import React from 'react';
import './Play.css';

const Play = () => {
  return (
    <div className="play-page">
      <div className="play-container">
        <div className="game-area">
          <div className="game-board">
            <div className="board-header">
              <h2>Game Board</h2>
              <div className="score-display">
                <div className="score-item">
                  <span className="score-label">Score</span>
                  <span className="score-value">0</span>
                </div>
                <div className="score-item">
                  <span className="score-label">Lines</span>
                  <span className="score-value">0</span>
                </div>
                <div className="score-item">
                  <span className="score-label">Level</span>
                  <span className="score-value">1</span>
                </div>
              </div>
            </div>
            <div className="tetris-grid">
              {Array.from({ length: 200 }).map((_, i) => (
                <div key={i} className="cell"></div>
              ))}
            </div>
            <div className="game-controls">
              <button className="control-btn">← Left</button>
              <button className="control-btn">↓ Soft Drop</button>
              <button className="control-btn">→ Right</button>
              <button className="control-btn">↑ Rotate</button>
              <button className="control-btn space">Space: Hard Drop</button>
            </div>
          </div>
          <div className="game-sidebar">
            <div className="next-piece">
              <h3>Next</h3>
              <div className="next-preview"></div>
            </div>
            <div className="hold-piece">
              <h3>Hold</h3>
              <div className="hold-preview"></div>
            </div>
            <div className="game-actions">
              <button className="action-btn primary">Start Game</button>
              <button className="action-btn">Pause</button>
              <button className="action-btn">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;

