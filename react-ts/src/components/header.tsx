import React from 'react';
import { Link } from 'react-router-dom';

class HeaderClass extends React.Component {
  constructor(prop: string) {
    super(prop);
  }
  render(): React.ReactNode {
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
      </header>
    );
  }
}
export default HeaderClass;
