import React from 'react';

export default function Header(props) {
  let leftElement = props.width >= props.breakpoints[0] ?
    <div className="elbow top-left-elbow"></div>
    :
    <div className="nub left-nub"></div>;
  
  return (
    <header>
      {leftElement}
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