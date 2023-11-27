// NavigationMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = ({ isOpen, toggleMenu }) => (
  <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
    <div className="overlay" onClick={toggleMenu}></div>
    <div className="menu-content">
      <Link to="/" onClick={toggleMenu}>Home</Link>
      <Link to="/art-gallery" onClick={toggleMenu}>Art Gallery</Link>
      {/* Add more navigation links as needed */}
    </div>
  </div>
);

export default NavigationMenu;
