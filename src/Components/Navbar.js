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
      {props.page === 'about' ? 
        <div className={`nav-btn nav-about-btn ${aboutColor}`}>
          ABOUT
        </div>
        :
        <Link className={`nav-btn nav-about-btn ${aboutColor}`} to='/'>
          ABOUT
        </Link>
      }
      {props.page === 'projects' ?
        <div className={`nav-btn nav-port-btn ${portfolioColor}`}>
          PROJECTS
        </div>
        :
        <Link className={`nav-btn nav-port-btn ${portfolioColor}`} to='/projects'>
          PROJECTS
        </Link>
      }
      {props.page === 'contact' ?
        <div className={`nav-btn nav-contact-btn ${contactColor}`}>
          CONTACT
        </div>
        :
        <Link className={`nav-btn nav-contact-btn ${contactColor}`} to='/contact'>
          CONTACT
        </Link>
      }
      <div className="nav-btn empty-nav black large-only" />
      <div className="nav-bottom large-only" /> 
    </nav>
  );
}

Navbar.propTypes = {
  page: PropTypes.string.isRequired,
}