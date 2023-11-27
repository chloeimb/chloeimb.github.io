// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import your components/pages
import Home from './Home';
import ArtGallery from './ArtGallery';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>LavaVamp</h1>
          {/* Add any additional header content, like navigation links, here */}
        </header>

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
