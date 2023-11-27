// Home.js
import React from 'react';

const Home = () => (
  <main 
    className="App-main"
    style={{
        backgroundImage: 'url("images/darkbackground.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    }}
    >
    <h2>Welcome to LavaVamp</h2>
    <p>This is the homepage. Add your homepage content here.</p>
  </main>
);

export default Home;