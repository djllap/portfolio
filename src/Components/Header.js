import React from 'react';

export default function Header(props) {
  
  return (
    <header>
      <div className="elbow top-left-elbow large-only"></div>
      <div className="nub left-nub small-only"></div>
      <div className='bar'></div>
      <div className="header-text">
      <span className="title-block">DANIEL KENT</span>
      <span className="title-block dot"></span>
      <span className="title-block">FULL STACK DEVELOPER</span>
      </div>
      <div className="nub right-nub"></div>
    </header>
  );
}