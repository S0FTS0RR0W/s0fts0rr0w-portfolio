import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

interface NavigationBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="test-navbar">
      <div className="test-navbar-container">
        <Link to="/" className="test-navbar-brand" onClick={handleLinkClick}>
          s0fts0rr0w.com
        </Link>
        <button className="test-burger-button" onClick={toggleMenu} aria-expanded={isMenuOpen}>
          <div className={`test-burger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`test-burger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`test-burger-line ${isMenuOpen ? 'open' : ''}`}></div>
        </button>
        <div className={`test-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="test-nav-list">
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            <li>
              <button onClick={toggleDarkMode} className="theme-toggle-button">
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
