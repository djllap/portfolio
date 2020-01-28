import React from 'react';

export default function Footer(props) {
  const leftElement = props.width < props.breakpoints[0] ?
    <div className="nub left-nub" /> : <div className="elbow bottom-left-elbow" />

  return (
    <footer>
      {leftElement}
      <div className="bar"></div>
      <div className="nub right-nub"></div>
    </footer>
  );
}