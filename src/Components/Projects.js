import React from 'react';
import PropTypes from 'prop-types';

export default function Projects(props) {
  const currentProject = props.projects[props.currentProjectIndex]

  return (
    <div className="padding-container">
      <section className="project-container column">
        <div className="project-img">
          <header className="project-title">
            <h2>{currentProject.title} 
            </h2>
            <div className="project-subtitle">
              {currentProject.subtitle}
            </div>
          </header>
          <img src={currentProject.imgSrc} alt={currentProject.imgAlt} />
        </div>
        <nav className="project-nav row">
          <button 
            className="ui-btn prev-project-btn white" 
            onClick={() => props.setProject(-1)}
          >
            Previous Project
          </button>
          <button 
            className="ui-btn next-project-btn white"
            onClick={() => props.setProject(1)}
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

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentProjectIndex: PropTypes.number.isRequired,
  setProject: PropTypes.func.isRequired
};

