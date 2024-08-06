import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './Components'; // Import the MenuBar component

function App() {
  return (
    <Router>
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      {/* Rest of your app content */}
    </div>
    </Router>
  );
}

export default App;

