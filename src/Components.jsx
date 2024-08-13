import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PertEstimation from './Pert'; // Import your PERT estimation component
import ThreePointEstimation from './ThreePointEstimation';
const MenuBar = () => {
  const [isPertOpen, setIsPertOpen] = useState(false);

  const handlePertClick = () => {
    setIsPertOpen(true);
  };

  const handleClosePert = () => {
    setIsPertOpen(false);
  };

  return (
    <nav className="menu-bar">
      {/* ... other menu items */}
      <li onClick={handlePertClick}>PERT Estimation</li>
      {isPertOpen && <PertEstimation onClose={handleClosePert} />}

      <ul>
        <li>
          <Link to="/" className="menu-item">PertEstimation</Link>
        </li>
        <li>
          <Link to="/about" className="menu-item">About</Link>
          </li>
        <li>
          <Link to="/contact" className="menu-item">Contact</Link>
          </li>
          <li>
          <Link to="/Gears" className="menu-item">Gears</Link>
        </li>
        <li>
          <Link to="/shafts" className="menu-item">Shafts</Link>
          </li>
        <li>
          <Link to="/wheels" className="menu-item">Wheels</Link>
          </li>
      </ul>
    </nav>
  );
};

export default MenuBar;

