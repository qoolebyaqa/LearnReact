import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header__wrapper">
      <li className="header__list">
        <Link to="/" className={window.location.pathname === '/' ? 'active' : 'header__link'}>
          Home
        </Link>
      </li>
      <li className="header__list">
        <Link
          to="/about"
          className={window.location.pathname === '/about' ? 'active' : 'header__link'}
        >
          About Us
        </Link>
      </li>
      <li className="header__list">
        <Link
          to="/form"
          className={window.location.pathname === '/form' ? 'active' : 'header__link'}
        >
          Form
        </Link>
      </li>
    </header>
  );
}
export default Header;
