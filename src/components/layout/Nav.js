import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Nav = ({ title, icon }) => {
  
  return (
    <nav className="navbar bg-primary">
      <Link to='/'>
      <h1 >
          <i className={icon}></i> {title} 
      </h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}


Nav.defaultProps = {
  title: 'User Finder',
  icon: 'fab fa-github'
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Nav;
