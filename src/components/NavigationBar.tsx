import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const TestBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu on link click
  };

  return (
    <nav className="test-navbar">
      <div className="test-navbar-container">
        <Link to="/" className="test-navbar-brand" onClick={handleLinkClick}>
          S0FTS0RR0W
        </Link>
        <button className="test-burger-button" onClick={toggleMenu} aria-expanded={isOpen}>
          <div className={`test-burger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`test-burger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`test-burger-line ${isOpen ? 'open' : ''}`}></div>
        </button>
        <div className={`test-menu ${isOpen ? 'open' : ''}`}>
          <ul className="test-nav-list">
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TestBurgerMenu;
