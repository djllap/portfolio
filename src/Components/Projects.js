import React, { useState } from 'react';
import Thumbnails from './Thumbnails';
import projects from '../projectData';

export default function Projects(props) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];

  const nextProject = () => {
    let newIndex = (currentProjectIndex + 1 < projects.length) ? 
      currentProjectIndex + 1 : 0;
    setCurrentProjectIndex(newIndex);
  }

  const prevProject = () => {
    let newIndex = (currentProjectIndex + 1 < projects.length) ? 
      currentProjectIndex + 1 : 0;
      setCurrentProjectIndex(newIndex);
  }

  return (
    <div className="padding-container">
      <section className="project-container column">
        <div className="project-img">
          <Thumbnails 
            currentProjectIndex={currentProjectIndex} 
            setIndex={setCurrentProjectIndex}
          />
          <header className="project-title">
            <h2>{currentProject.title} 
            </h2>
            <div className="project-subtitle">
              {currentProject.subtitle}
            </div>
          </header>
          <img 
            src={currentProject.imgSrc} 
            alt={currentProject.imgAlt}
          />
        </div>
        <nav className="project-nav row">
          <button 
            className="ui-btn prev-project-btn white" 
            onClick={prevProject}
          >
            Previous Project
          </button>
          <button 
            className="ui-btn next-project-btn white"
            onClick={nextProject}
          >
            Next Project
          </button>
        </nav>
        
        <div className="project-details">
          <p>
            <span className="label">STACK:</span>
            {currentProject.stack}
          </p>
          <p>
            <span className="label">DESCRIPTION:</span>
            {currentProject.desc}
          </p>
          <div className="project-link-row row">
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
              Source Code
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


