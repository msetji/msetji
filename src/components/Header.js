// src/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
            <div className="nav-left">
                <li className="nav-item">
                    <a href="#home" className="nav-link">Home</a>
                </li>
            </div>
          <div className="nav-right">
            <li className="nav-item">
              <a href="#about" className="nav-link">About Me</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link">Experience</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
