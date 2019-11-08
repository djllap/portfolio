
import state from './state.js';

function generateHeader() {
  
  
  return `
  <header>
  <div class="nub left-nub"></div>
  <div class='bar'></div>
  <div class="header-text">
  <span class="title-block">DANIEL KENT</span>
  <span class="title-block dot" value="''"></span>
  <span class="title-block">FULL STACK DEVELOPER</span>
  </div>
  <div class="nub right-nub"></div>
  </header>
  `;
}

function generateNavbar() {
  let aboutColor = 'white';
  let portfolioColor = 'white';
  let contactColor = 'white';
  
  switch (state.nav) {
  case 'about':
    aboutColor = 'blue';
    break;
  case 'projects':
    portfolioColor = 'blue';
    break;
  case 'contact':
    contactColor = 'blue';
    break;
  }

  return `
    <nav class="nav-bar">
      <button class="nav-btn nav-about-btn ${aboutColor}">ABOUT</button>
      <button class="nav-btn nav-port-btn ${portfolioColor}">PORTFOLIO</button>
      <button class="nav-btn nav-contact-btn ${contactColor}">CONTACT</button>
      <button class="nav-btn red engage">ENGAGE</button>
    </nav>
  `;
}

function generateFooter() {
  return `
    <footer>
      <div class="nub left-nub"></div>
      <div class="bar"></div>
      <div class="nub right-nub"></div>
    </footer>
  `;
}

function generateTitleCard() {
  let title;

  switch (state.nav) {
  case 'about':
    title = 'PERSONNEL FILE: DANIEL KENT';
    break;
  case 'projects':
    title = 'PROJECTS';
    break;
  case 'contact':
    title = 'CONTACT INFORMATION';
    break;
  }

  return `
    <h1>${title}</h1>
    <div class="row">
      <span class="thin-nub left-nub"></span>
      <span class="thin-bar"></span>
      <span class="thin-nub right-nub"></span>
    </div>
  `;
}

function generateAbout() {
  return `
    <section class="profile-row row">
      <div class="pic-column column">
      <img src="/resources/images/rocketDan.jpg" alt="Rocket Dan Image">
      </div>
      <div class="bio-column column">
        <div class="row">
          <span class="bio-header">DOSSIER</span>
        </div>
        <div class="row">
          <span class="label">Full Name:</span>
          <span>Kent, Daniel Jacob</span>
        </div>
        <div class="row">
          <span class="label">Species:</span>
          <span>Human (unverified)</span>
        </div>
        <div class="row">
          <span class="label">Sex:</span>
          <span>Male</span>
        </div>
        <div class="row">
          <span class="label">Place of residence:</span>
          <span>Denver, CO, Earth</span>
        </div>
        <div class="row">
          <span class="label">Occupation:</span>
          <span>Engineer, Software</span>
        </div>
      </div>
    </section>
    <section class="full-bio column">
      <p>
        Having a passion for learning new things and gaining new skills, Daniel has developed a varied and diverse skillset. He has recieved a master's degree in muisc performance, earned a black belt in Danzan Ryu Jujitsu, built most of the furniture in his home by hand, and is an above average player of the board game, go.
      </p>
      <p>He also makes some pretty cool web apps.</p>
    </section>`;
}

function generateProjects() {
  const project = state.currentProject;
  const live = state.currentProject.liveUrl;
  const source = state.currentProject.sourceUrl;

  return `
    <section class="project-container column">
      <div class="project-img">
        <header class="project-title">
          <h2>${project.title} 
            <span class="project-subtitle">
              ${project.subtitle}
            </span>
          </h2>
        </header>
        <img src=${project.imgSrc} alt=${project.imgAlt}>
      </div>
      <nav class="project-nav row">
        <button class="ui-btn prev-project-btn white">Previous Project</button>
        <button class="ui-btn next-project-btn white">Next Project</button>
      </nav>
      
      <div class="project-details">
        <p>
          <span class="label">STACK:</span>
          ${project.stack}
        </p>
        <p>
          <span class="label">DESCRIPTION:</span>
          ${project.desc}
        </p>
        <div class="project-link-row row">
          <a href=${live} class="link-btn blue" target="_blank">
            Live App
          </a>
          
          <a href=${source} class="link-btn yellow" target="_blank">
            View Source Code
          </a>
        </div>
      </div>
    </section>
  `;
}

function generateContact() {
  return `
    <section class="contact-section">
      <h2 class="contact-title">
        Subspace communication unavailable. Please initiate contact through the following means:
      </h2>
      <div class="column">
        <ul class="contact-links-list column">
          <li class="contact-link row">
            <span class="contact-btn-label white">Email:</span>
            <button class="contact-btn blue">Kentpercussion@gmail.com</button>
          </li>
          <li class="contact-link row">
            <span class="contact-btn-label white">Github:</span>
            <button class="contact-btn blue">github.com/djllap</button>
          </li>
          <li class="contact-link row">
            <span class="contact-btn-label white">LinkedIn:</span>
            <button class="contact-btn blue">linkedin.com/in/danielkent-j</button>
          </li>
        </ul>
      </div>
    </section>
  `;
}

function generateContent() {
  let content = '';

  switch (state.nav) {
  case 'about':
    content = generateAbout();
    break;
  case 'projects':
    content = generateProjects();
    break;
  case 'contact':
    content = generateContact();
    break;
  }
    
  return `
    <div class="padding-container">
      ${content}
    </div>
  `;
}

function generateMain() {
  return `
    <main>
      ${generateTitleCard()}
      ${generateContent()}
    </main>
  `;
}

function render() {
  let html = '';
  html += 
    generateHeader() +
    generateNavbar() +
    generateMain() +
    generateFooter();

  $('body').html(html);
}

export default {
  render
};
