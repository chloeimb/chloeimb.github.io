import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Art Portfolio</h1>
        {/* Add any additional header content, like navigation links, here */}
      </header>

      <main className="App-main">
        <h2>Welcome to My Art Gallery</h2>
        {/* Add your art content here */}
        <p>This is where you can showcase your artwork and provide some information about yourself.</p>
      </main>

      <footer className="App-footer">
        &copy; 2023 Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
