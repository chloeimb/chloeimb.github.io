// Import necessary dependencies
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your components/pages
import Home from './Home';
import ArtGallery from './ArtGallery';
import NavigationMenu from './NavigationMenu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        {/* Hamburger Menu Button */}
        <button className="menu-button" onClick={toggleMenu}>
          &#9776; Menu
        </button>

        {/* Render the NavigationMenu component */}
        <NavigationMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art-gallery" element={<ArtGallery />} />
        </Routes>

        <footer className="App-footer">
          &copy; 2023 Chloe Imbusch. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
