import views from './views.js';

let nav = 'about';
const breakpoints = [ 480, 600 ];
let screenWidth = $(window).width();
let currentBreakpoint = 0;

const projects = [
  { title: 'FLEX NOTEBOOK',
    subtitle: 'A notebook app for martial arts',
    imgSrc: 'resources/images/flex-notebook-small.png',
    imgAlt: 'Flex Notebook capture',
    stack: 'Ruby on Rails, React',
    desc: 'Flex notebook arose from a need in Daniel\'s own life. In his jujitsu dojo, he was required to keep a notebook of all the techniques he had learned. Many of these techniques are included in formal \'lists\'. Some techniques fit into multiple categories. Some seemed to belong everywhere and nowwhere. Flex Notebook was designed to make storing and finding these techniques simple and effective.',
    liveUrl: 'https://katabook.herokuapp.com/',
    sourceUrl: 'https://github.com/djllap/kata'
  },
  { title: 'MY BOOKMARKS',
    subtitle: 'Organize your favorite websites',
    imgSrc: 'resources/images/bookmarks.png',
    imgAlt: 'My Bookmarks app capture',
    stack: 'jQuery with Webpack, RESTful API',
    desc: 'My Bookmarks is an app for organizing your website bookmarks with options to leave a 1-5 star rating, and to leave comments for yourself for later. It is most useful when conducting research, allowing you to actually close some of your browser tabs without worry of forgtting when you don\'t want more permenant bookmarks.',
    liveUrl: 'https://thinkful-ei-iguana.github.io/daniel-bookmarks-app/src/',
    sourceUrl: 'https://github.com/thinkful-ei-iguana/daniel-bookmarks-app'
  }
];

let currentProjectIndex = 0;
let currentProject = projects[currentProjectIndex];

function setCurrentProject(index) {
  this.currentProjectIndex = index;
  this.currentProject = projects[index];
  views.render();
}

function setBreakpoint(width) {
  if (width < this.breakpoints[1] && this.currentBreakpoint !== this.breakpoints[0]) {
    this.currentBreakpoint = breakpoints[0];
    views.render();
  } else if (width >= this.breakpoints[1] && this.currentBreakpoint !== this.breakpoints[1]) {
    this.currentBreakpoint = breakpoints[1];
    views.render();
  }

}

export default {
  nav,
  currentBreakpoint,
  projects,
  currentProject,
  currentProjectIndex,
  setCurrentProject,
  breakpoints,
  setBreakpoint,
  screenWidth
};