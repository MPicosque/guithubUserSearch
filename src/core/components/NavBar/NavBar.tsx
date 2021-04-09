import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  return (
    <nav className="main-nav"> 
      <div className="col_2">
        <Link to="/" className="nav-logo-text">
          <h4>Bootcamp DevSuperior</h4>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
