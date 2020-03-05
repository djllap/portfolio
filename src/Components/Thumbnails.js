import React from 'react';
import projects from '../projectData';
import '../styles/Thumbnails.css';

export default function Thumbnails(props) {

  return (
    <div className="thumbnail-row">
      {projects.map((p, i) => {
        if (props.currentProjectIndex !== i) {
          return <div className="thumbnail-container" key={i}>
            <img 
              src={p.imgSrc}
              alt={p.imgAlt + ' thumbnail'}
              className="thumbnail-img"
              onClick={() => props.setIndex(i)}
            />
          </div>
        }
        return ''
      })}
    </div>
  )
}