import React, { useState, useRef, useEffect } from 'react';


const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  const handleMenuItemClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="menu-bar">
      <ul>
        <li onClick={() => handleMenuItemClick('pertestimation')}>PertEstimation</li>
        <li onClick={() => handleMenuItemClick('about')}>Appbout</li>
        <li onClick={() => handleMenuItemClick('contact')}>Wheels</li>
        <li onClick={() => handleMenuItemClick('gears')}>Gears</li>
        <li onClick={() => handleMenuItemClick('shafts')}>Shafts</li>
        <li onClick={() => handleMenuItemClick('wheels')}>Wheels</li>
      </ul>
      {activeMenu && (
        <div className="popout-menu" ref={menuRef}>
          {/* Content for the active menu */}
          {activeMenu === 'PertEstimation' && <div>PertEstimation </div>}
          {activeMenu === 'about' && <div>About </div>}
          {activeMenu === 'contacts' && <div>Contacts </div>}
          {activeMenu === 'gears' && <div>Gears </div>}
          {activeMenu === 'shafts' && <div>Shafts</div>}
          {activeMenu === 'wheels' && <div>Wheels</div>}
        </div>
      )}
    </div>
  );
};

export default MenuBar;

