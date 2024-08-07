import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import './App.css'
import MenuBar from './Components';
import Home from './Home';
import About from './About'; // Import your About component
import Contact from './Contact'; // Import your Contact component 
function App() {
  return (
    <Router>
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Rest of your app content */}
    </div>
    </Router>
  );
}

export default App;

