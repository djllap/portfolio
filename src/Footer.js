import React from 'react';

export default function Footer(props) {
  const leftElement = props.width < props.breakpoints[0] ?
    <div class="nub left-nub" /> : <div class="elbow bottom-left-elbow" />

  return (
    <footer>
      {leftElement}
      <div class="bar"></div>
      <div class="nub right-nub"></div>
    </footer>
  );
}