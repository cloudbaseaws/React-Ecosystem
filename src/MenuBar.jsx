import React, { useState, useRef, useEffect } from 'react';


const MenuBar = () => {
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
        <li onClick={() => handleMenuItemClick('home')}>Home</li>
        <li onClick={() => handleMenuItemClick('about')}>About</li>
        <li onClick={() => handleMenuItemClick('contact')}>Contact</li>
      </ul>
      {activeMenu && (
        <div className="popout-menu" ref={menuRef}>
          {/* Content for the active menu */}
          {activeMenu === 'home' && <div>Home </div>}
          {activeMenu === 'about' && <div>About</div>}
          {activeMenu === 'contact' && <div>Contact</div>}
        </div>
      )}
    </div>
  );
};

export default MenuBar;

