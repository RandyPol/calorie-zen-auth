import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';

function NavBar() {
  return (
    <nav className="menu">
      <NavLink exact className="menu__item" activeClassName="menu__item_active" to="/diary">Diary</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/tips">Tips</NavLink>
    </nav>
  );
}

export default NavBar;