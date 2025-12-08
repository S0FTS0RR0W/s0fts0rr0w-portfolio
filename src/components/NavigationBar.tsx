import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faDesktop } from '@fortawesome/free-solid-svg-icons'; // Import faDesktop for system theme

interface NavigationBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { darkMode, themePreference, setThemePreference } = useTheme();
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsThemeMenuOpen(false); // Close theme menu if burger menu is toggled
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
    setIsThemeMenuOpen(false); // Close theme menu on link click
  };

  const toggleThemeMenu = () => {
    setIsThemeMenuOpen(prev => !prev);
  };

  const handleThemeSelect = (preference: 'light' | 'dark' | 'system') => {
    setThemePreference(preference);
    setIsThemeMenuOpen(false); // Close menu after selection
  };

  const getCurrentThemeIcon = () => {
    if (themePreference === 'system') {
      return faDesktop;
    }
    return darkMode ? faMoon : faSun;
  };

  return (
    <nav className="test-navbar">
      <div className="test-navbar-container">
        <Link to="/" className="test-navbar-brand" onClick={handleLinkClick}>
          s0fts0rr0w.com
        </Link>
        <div className="navbar-controls">
          <div className="theme-menu-container">
            <button onClick={toggleThemeMenu} className="theme-toggle-button">
              <FontAwesomeIcon icon={getCurrentThemeIcon()} />
            </button>
            {isThemeMenuOpen && (
              <div className="theme-dropdown-menu">
                <button onClick={() => handleThemeSelect('light')} className={themePreference === 'light' ? 'active' : ''}>
                  <FontAwesomeIcon icon={faSun} /> Light
                </button>
                <button onClick={() => handleThemeSelect('dark')} className={themePreference === 'dark' ? 'active' : ''}>
                  <FontAwesomeIcon icon={faMoon} /> Dark
                </button>
                <button onClick={() => handleThemeSelect('system')} className={themePreference === 'system' ? 'active' : ''}>
                  <FontAwesomeIcon icon={faDesktop} /> System
                </button>
              </div>
            )}
          </div>
          <button className="test-burger-button" onClick={toggleMenu} aria-expanded={isMenuOpen}>
            <div className={`test-burger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`test-burger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`test-burger-line ${isMenuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
        <div className={`test-menu ${isMenuOpen ? 'open' : ''}`} role="region" aria-hidden={!isMenuOpen}>
          <ul className="test-nav-list">
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            <li><Link to="/discord-bot" onClick={handleLinkClick}>Summurai Discord Bot</Link></li>
          </ul>
        </div>
        {isMenuOpen && (
          <div className="menu-backdrop" onClick={() => setIsMenuOpen(false)} aria-hidden="true"></div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
