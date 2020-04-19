import React, { useState, useEffect } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Thumbnails from './Thumbnails';
import projects from '../projectData';

export default function Projects(props) {

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];
  const [projectSummaryText, setProjectSummaryText] = useState('');
  const [projectStackText, setProjectStackText] = useState('');
  const [projectDescText, setProjectDescText] = useState('');
  const typingDelay = 10;

  const typeStateString = (finalString, setStateFunc, msDelay) => {
    let finalStringIndex = 0;
    let stateString = '';
    setStateFunc(stateString);

    const typeInterval = setInterval(() => {
      stateString += finalString[finalStringIndex++];
      setStateFunc(stateString);
      if (finalStringIndex >= finalString.length) clearInterval(typeInterval);
    }, msDelay);
    return typeInterval;
  }

  useEffect(() => {
    // Typrewriter animation for Project Summary
    let typeSummary = typeStateString(currentProject.subtitle, setProjectSummaryText, typingDelay);
    return () => clearInterval(typeSummary)
  }, [currentProject.subtitle]);

  useEffect(() => {
    // Typewriter animation for Project Stack
    let typeStack;
    if (projectSummaryText === currentProject.subtitle) {
      typeStack = typeStateString(currentProject.stack, setProjectStackText, typingDelay);
    }
    return () => clearInterval(typeStack);
  }, [currentProject.stack, projectSummaryText]);

  useEffect(() => {
    // Typewriter animation for Project Description
    let typeDesc;
    if (projectStackText === currentProject.stack) {
      typeDesc = typeStateString(currentProject.desc, setProjectDescText, typingDelay);
    }
    return () => clearInterval(typeDesc);
  }, [currentProject.stack, projectStackText]);

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
        <Flipper flipKey={currentProjectIndex}>
          <div className="project-img">
            <Thumbnails 
              currentProjectIndex={currentProjectIndex}
              setIndex={setCurrentProjectIndex}
              width={props.width}
            />
              <Flipped flipId={`current-${currentProjectIndex}`}>
                <img 
                  className="curr-project-img"
                  src={currentProject.imgSrc} 
                  alt={currentProject.imgAlt}
                />
              </Flipped>
          </div>
        </Flipper>
      <nav className="project-nav row">
        <button 
          className="ui-btn prev-project-btn blue" 
          onClick={prevProject}
        >
          PREV
        </button>
        <header className="project-title white">
          <h2>{currentProject.title}</h2>
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
          {projectSummaryText}
        </p>
        <p>
          <span className="label">STACK:</span>
          {projectStackText}
        </p>
        <p>
          <span className="label">DESCRIPTION:</span>
          {projectDescText}
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


