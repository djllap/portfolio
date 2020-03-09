import React, { useEffect } from 'react';
import projects from '../projectData';
import '../styles/Thumbnails.css';
export default function Thumbnails(props) {

  useEffect(() => {
    // console.log(props.imgRef.current.getBoundingClientRect().width);
  }, [props.imgRef])

  return (
    <nav className="thumbnail-row">
      {projects.map((p, i) => {
        const open = (props.currentProjectIndex !== i) ? "" : (
          <div className="bracket">
            <div className="top-left-bracket bracket-elbow" />
            <div className="middle-bracket" />
            <div className="bottom-left-bracket bracket-elbow" />
          </div>
        );
        const close = (props.currentProjectIndex !== i) ? "" : (
          <div className="bracket bracket-close">
            <div className="top-right-bracket bracket-elbow" />
            <div className="middle-bracket" />
            <div className="bottom-right-bracket bracket-elbow" />
          </div>
        );
        let selectedStyles;
        let imgStyles;
        if (props.currentProjectIndex === i && props.width >= 774) {
          selectedStyles = {maxWidth: '9rem'};
        } else if (props.currentProjectIndex === i && props.width < 774) {
          imgStyles = {
            paddingBottom: '6px', 
            borderBottom: '3px solid rgb(255, 153, 0)',
            marginBottom: '-9px'
          }
        }
        

        return <div className="thumbnail-container" key={i} style={selectedStyles}>
          {open}
          <img 
            src={p.imgSrc}
            alt={p.imgAlt + ' thumbnail'}
            className="thumbnail-img"
            onClick={() => props.setIndex(i)}
            style={imgStyles}
          />
          {close}
        </div>
      })}
    </nav>
  )
}