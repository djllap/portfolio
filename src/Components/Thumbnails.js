import React from 'react';
import { Flipped } from 'react-flip-toolkit';
import projects from '../projectData';
import '../styles/Thumbnails.css';

export default function Thumbnails(props) {

  return (
    <nav className="thumbnail-row">
      {projects.map((p, i) => {
               
        return (props.currentProjectIndex !== i) ? 
          <div className="thumbnail-container" key={i} >
              <Flipped flipId={`current-${i}`}>
                <img 
                  src={p.imgSrc}
                  alt={p.imgAlt + ' thumbnail'}
                  className="thumbnail-img"
                  onClick={() => props.setIndex(i)}
                />
              </Flipped>
          </div> : '';
      })}
    </nav>
  )
}