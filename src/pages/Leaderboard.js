import React from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const mockData = [
    { rank: 1, username: 'TetrisMaster', score: 1250000, lines: 150, level: 20 },
    { rank: 2, username: 'BlockKing', score: 980000, lines: 120, level: 18 },
    { rank: 3, username: 'PuzzlePro', score: 875000, lines: 110, level: 17 },
    { rank: 4, username: 'GridGuru', score: 750000, lines: 95, level: 15 },
    { rank: 5, username: 'LineLegend', score: 680000, lines: 85, level: 14 },
    { rank: 6, username: 'StackStar', score: 590000, lines: 75, level: 13 },
    { rank: 7, username: 'BlockBuster', score: 520000, lines: 65, level: 12 },
    { rank: 8, username: 'TetrisTitan', score: 480000, lines: 60, level: 11 },
    { rank: 9, username: 'PuzzlePower', score: 420000, lines: 55, level: 10 },
    { rank: 10, username: 'GridGenius', score: 380000, lines: 50, level: 10 },
  ];

  return (
    <div className="leaderboard-page">
      <div className="leaderboard-container">
        <h1 className="page-title">Global Leaderboard</h1>
        <div className="leaderboard-filters">
          <button className="filter-btn active">All Time</button>
          <button className="filter-btn">Today</button>
          <button className="filter-btn">This Week</button>
          <button className="filter-btn">This Month</button>
        </div>
        <div className="leaderboard-table">
          <div className="table-header">
            <div className="header-cell rank">Rank</div>
            <div className="header-cell username">Username</div>
            <div className="header-cell score">Score</div>
            <div className="header-cell lines">Lines</div>
            <div className="header-cell level">Level</div>
          </div>
          <div className="table-body">
            {mockData.map((player) => (
              <div key={player.rank} className={`table-row ${player.rank <= 3 ? 'top-three' : ''}`}>
                <div className="table-cell rank">
                  <span className={`rank-number ${player.rank === 1 ? 'gold' : player.rank === 2 ? 'silver' : player.rank === 3 ? 'bronze' : ''}`}>
                    {player.rank}
                  </span>
                </div>
                <div className="table-cell username">{player.username}</div>
                <div className="table-cell score">{player.score.toLocaleString()}</div>
                <div className="table-cell lines">{player.lines}</div>
                <div className="table-cell level">{player.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

