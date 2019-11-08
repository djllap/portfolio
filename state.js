
let nav = 'about';
let mediaWidth = window.innerWidth;
let currentBreakpoint = '';
const projects = [
  { title: 'FLEX NOTEBOOK',
    subtitle: 'A notebook app for martial arts',
    imgSrc: 'resources/images/flex-notebook.png',
    stack: 'Ruby on Rails, React',
    desc: 'Flex notebook arose from a need in Daniel\'s own life. In his jujitsu dojo, he was required to keep a notebook of all the techniques he had learned. Many of these techniques are included in formal \'lists\'. Some techniques fit into multiple categories. Some seemed to belong everywhere and nowwhere. Flex Notebook was designed to make storing and finding these techniques simple and effective.',
    liveUrl: 'https://katabook.herokuapp.com/',
    sourceUrl: 'https://github.com/djllap/kata'
  },
  { title: 'MY BOOKMARKS',
    subtitle: 'Organize your favorite websites',
    imgSrc: 'resources/images/bookmarks.png',
    stack: 'jQuery with Webpack, RESTful API',
    desc: 'My Bookmarks is an app for organizing your website bookmarks with the options to leave a 1-5 star rating, and to leave comments for yourself for later. It is most useful when conducting research, allowing you to actually close some of your browser tabs.',
    liveUrl: 'https://thinkful-ei-iguana.github.io/daniel-bookmarks-app/src/',
    sourceUrl: 'https://github.com/thinkful-ei-iguana/daniel-bookmarks-app'
  }
];

let currentProject = projects[0];

export default {
  nav,
  mediaWidth,
  currentBreakpoint,
  projects,
  currentProject
};