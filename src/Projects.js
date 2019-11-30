import React from 'react';
import PropTypes from 'prop-types';

export default function Projects(props) {
  const currentProject = props.projects[props.currentProjectIndex]

  return (
    <div className="padding-container">
      <section class="project-container column">
        <div class="project-img">
          <header class="project-title">
            <h2>{currentProject.title} 
            </h2>
            <div class="project-subtitle">
              {currentProject.subtitle}
            </div>
          </header>
          <img src={require(`${currentProject.imgSrc}`)} alt={currentProject.imgAlt} />
        </div>
        <nav class="project-nav row">
          <button 
            class="ui-btn prev-project-btn white" 
            onClick={() => props.setProject(-1)}
          >
            Previous Project
          </button>
          <button 
            class="ui-btn next-project-btn white"
            onClick={() => props.setProject(1)}
          >
            Next Project
          </button>
        </nav>
        
        <div class="project-details">
          <p>
            <span class="label">STACK:</span>
            ${currentProject.stack}
          </p>
          <p>
            <span class="label">DESCRIPTION:</span>
            ${currentProject.desc}
          </p>
          <div class="project-link-row row">
            <a 
              href={currentProject.liveUrl} 
              class="link-btn blue" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live App
            </a>
            
            <a 
              href={currentProject.sourceUrl} 
              class="link-btn yellow" 
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