import React from 'react';
import PropTypes from 'prop-types';

export default function TitleCard(props) {
  

  return (
    <>
      <h1>{props.title}</h1>
      <div className="row">
        <span className="thin-nub left-nub"></span>
        <span className="thin-bar"></span>
        <span className="thin-nub right-nub"></span>
      </div>
    </>
  )
}

TitleCard.propTypes = {
  title: PropTypes.string.isRequired
}