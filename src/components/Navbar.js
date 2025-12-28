import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">TETR</span>
        </Link>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/play" 
            className={`navbar-link ${isActive('/play') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Play
          </Link>
          <Link 
            to="/leaderboard" 
            className={`navbar-link ${isActive('/leaderboard') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Leaderboard
          </Link>
          <Link 
            to="/profile" 
            className={`navbar-link ${isActive('/profile') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </Link>
        </div>

        <div className="navbar-actions">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

