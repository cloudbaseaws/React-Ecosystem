import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import './App.css'
import MenuBar from './Components';

import About from './About';
import Contact from './Contact';
import Gears from './Gears';
import Wheels from './Wheels';
import Shafts from './Shafts';
import PertEstimation from './Pert';
import PertEstimation from './ThreePointEstimation'; // Import your PERT estimation component

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Routes>
          <Route path="/" element={<PertEstimation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gears" element={<Gears />} />
          <Route path="/wheels" element={<Wheels />} />
          <Route path="/shafts" element={<Shafts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

