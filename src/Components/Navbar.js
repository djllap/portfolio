import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  let aboutColor = 'white';
  let portfolioColor = 'white';
  let contactColor = 'white';
  
  switch (props.page) {
    case 'about':
      aboutColor = 'blue';
      break;
    case 'projects':
      portfolioColor = 'blue';
      break;
    case 'contact':
      contactColor = 'blue';
      break;
    default: break 
  }  

  return (
    <nav className="nav-bar">
      <div className="nav-label">MENU</div>
      <Link className={`nav-btn nav-about-btn ${aboutColor}`}
            to='/'
      >
        ABOUT
      </Link>
      <Link className={`nav-btn nav-port-btn ${portfolioColor}`}
            to='/projects'
      >
        PROJECTS
      </Link>
      <Link className={`nav-btn nav-contact-btn ${contactColor}`}
        to='/contact'
      >
        CONTACT
      </Link>
      <div className="nav-btn empty-nav black large-only" />
      <div className="nav-bottom large-only" /> 
    </nav>
  );
}

Navbar.propTypes = {
  page: PropTypes.string.isRequired,
}