import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

export default function TitleCard(props) {

  const transition = useSpring({
    from: {transform: 'translate(100%, 0)'},
    transform: 'translate(0, 0)'
  })

  return <>
    <animated.div style={transition}>
      <h1>{props.title}</h1>
    </animated.div>
    <div className="row">
      <span className="thin-nub left-nub"></span>
      <span className="thin-bar"></span>
      <span className="thin-nub right-nub"></span>
    </div>
  </>
}

TitleCard.propTypes = {
  title: PropTypes.string.isRequired
}