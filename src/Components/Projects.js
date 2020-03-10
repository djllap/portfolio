import React, { useState, useRef } from 'react';
import Thumbnails from './Thumbnails';
import projects from '../projectData';

export default function Projects(props) {
  const imgRef = useRef(null);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];

  const nextProject = () => {
    let newIndex = (currentProjectIndex + 1 < projects.length) ? 
      currentProjectIndex + 1 : 0;
    setCurrentProjectIndex(newIndex);
  }

  const prevProject = () => {
    let newIndex = (currentProjectIndex - 1 >= 0) ? 
      currentProjectIndex - 1 : projects.length - 1;
      setCurrentProjectIndex(newIndex);
  }

  return (
    <section className="project-container column">
      <div className="project-img">
        <Thumbnails 
          currentProjectIndex={currentProjectIndex} 
          setIndex={setCurrentProjectIndex}
          imgRef={imgRef}
          width={props.width}
        />
        
        <img 
          ref={imgRef}
          className="curr-project-img"
          src={currentProject.imgSrc} 
          alt={currentProject.imgAlt}
        />
      </div>
      <nav className="project-nav row">
        <button 
          className="ui-btn prev-project-btn blue" 
          onClick={prevProject}
        >
          PREV
        </button>
        <header className="project-title white">
          <h2>{currentProject.title}</h2>
          {/* <div className="project-subtitle">
            {currentProject.subtitle}
          </div> */}
        </header>
        <button 
          className="ui-btn next-project-btn blue"
          onClick={nextProject}
        >
          NEXT
        </button>
      </nav>
      
      <div className="project-details">
        <p>
          <span className="label">SUMMARY:</span>
          {currentProject.subtitle}
        </p>
        <p>
          <span className="label">STACK:</span>
          {currentProject.stack}
        </p>
        <p>
          <span className="label">DESCRIPTION:</span>
          {currentProject.desc}
        </p>
        <div className="project-link-row">
          <a 
            href={currentProject.liveUrl} 
            className="link-btn blue" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Live App
          </a>
            <a 
              href={currentProject.sourceUrl} 
              className="link-btn yellow" 
              target="_blank"
              rel="noopener noreferrer"
            >
              {(!currentProject.serverUrl) ? 'Source Code' : 'Client Code'}
            </a>
            {(currentProject.serverUrl) ? (
              <a 
                href={currentProject.serverUrl}
                className='link-btn yellow'
                target="_blank"
                rel="noopener noreferrer"
              >
                Server Code
              </a>
            ) : ''}

        </div>
      </div>
    </section>
  );
}


