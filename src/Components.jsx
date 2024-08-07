import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <ul>
        <li>
          <Link to="/" className="menu-item">Home</Link>
        </li>
        <li>
          <Link to="/about" className="menu-item">About</Link>
          </li>
        <li>
          <Link to="/contact" className="menu-item">Contact</Link>
          </li>
      </ul>
    </nav>
  );
};

export default MenuBar;

