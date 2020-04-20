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

    const typeInterval = setInterval(() => {
      setStateFunc(stateString => stateString + finalString[finalStringIndex++]);
      if (finalStringIndex >= finalString.length) clearInterval(typeInterval);
    }, msDelay);
    return typeInterval;
  }

  useEffect(() => {
    // Typrewriter animation for Project Summary
    setProjectSummaryText('');
    setProjectStackText('');
    setProjectDescText('');
    const typeSummary = typeStateString(currentProject.subtitle, setProjectSummaryText, typingDelay);
    return () => clearInterval(typeSummary)
  }, [currentProject]);

  useEffect(() => {
    // Typewriter animation for Project Stack
    let typeStack;
    if (projectSummaryText === currentProject.subtitle) {
      typeStack = typeStateString(currentProject.stack, setProjectStackText, typingDelay);
    }
    return () => clearInterval(typeStack);
  }, [projectSummaryText, currentProject]);

  useEffect(() => {
    // Typewriter animation for Project Description
    let typeDesc;
    if (projectStackText === currentProject.stack) {
      typeDesc = typeStateString(currentProject.desc, setProjectDescText, typingDelay/2);
    }
    return () => clearInterval(typeDesc);
  }, [projectStackText, currentProject]);

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
    <Flipper flipKey={currentProjectIndex}>
      <section className="project-container column">
        <div className="project-img">
          <Thumbnails 
            currentProjectIndex={currentProjectIndex}
            setIndex={setCurrentProjectIndex}
          />
          <Flipped flipId={`current-${currentProjectIndex}`}>
            <img 
              className="curr-project-img"
              src={currentProject.imgSrc} 
              alt={currentProject.imgAlt}
            />
          </Flipped>
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
            <Flipped flipId='live-app'>
              <a 
                href={currentProject.liveUrl} 
                className="link-btn blue" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live App
              </a>
            </Flipped>
            <Flipped flipId="client-code">
              <a 
                href={currentProject.sourceUrl} 
                className="link-btn yellow" 
                target="_blank"
                rel="noopener noreferrer"
              >
                {(!currentProject.serverUrl) ? 'Source Code' : 'Client Code'}
              </a>
            </Flipped>
            {(currentProject.serverUrl) ? (
              <Flipped flipId="server-code">
                <a 
                  href={currentProject.serverUrl}
                  className='link-btn yellow'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Server Code
                </a>
              </Flipped>
            ) : ''}
          </div>
        </div>
      </section>
    </Flipper>
  );
}


