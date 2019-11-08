import state from './state.js';
import views from './views.js';


function handleAboutClick() {
  $('body').on('click', '.nav-about-btn', event => {
    state.nav = 'about';
    views.render();
  });
}

function handlePortClick() {
  $('body').on('click', '.nav-port-btn', event => {
    state.nav = 'projects';
    views.render();
  });
}

function handleContactClick() {
  $('body').on('click', '.nav-contact-btn', event => {
    state.nav = 'contact';
    views.render();
  });
}

function handlePrevProjectClick() {
  $('body').on('click', '.prev-project-btn', event => {
    if (state.currentProjectIndex === 0) {
      let index = state.projects.length - 1;
      state.setCurrentProject(index);
    } else {
      let index = state.currentProjectIndex - 1;
      state.setCurrentProject(index);
    }
  });
}

function handleNextProjectClick() {
  $('body').on('click', '.next-project-btn', event => {
    if (state.currentProjectIndex === state.projects.length - 1) {
      let index = 0;
      state.setCurrentProject(index);
    } else {
      let index = state.currentProjectIndex + 1;
      state.setCurrentProject(index);
    }
  });
}


function main() {
  handleAboutClick();
  handlePortClick();
  handleContactClick();
  handlePrevProjectClick();
  handleNextProjectClick();
  views.render();
}

main();
