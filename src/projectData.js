import rangeWizardPic from './imgs/rangeWizard.png';
import flexNotebookPic from './imgs/Flex-notebook-small.png';
import langLearnPic from './imgs/lang-learn.png';
import digiDoodlePic from './imgs/digi-doodle.png';

export default [
  {
    title: 'RANGE WIZARD',
    subtitle: 'Poker hand range manager',
    imgSrc: rangeWizardPic,
    imgAlt: 'Range Wizard capture',
    stack: 'Node/Express, React',
    desc: 'Range Wizard allows you to organize related ranges into a single, color-coded chart. The intuitive interface makes creating and editing charts a breeze, enabling you to create, edit, and delete multiple ranges with a single form submit.',
    liveUrl: 'https://www.range-wizard.com/',
    sourceUrl: 'https://github.com/djllap/range-wizard-client',
    serverUrl: 'https://github.com/djllap/range-wizard-api'
  },
  { 
    title: 'FLEX NOTEBOOK',
    subtitle: 'A notebook app for martial arts',
    imgSrc: flexNotebookPic,
    imgAlt: 'Flex Notebook capture',
    stack: 'Ruby on Rails, React',
    desc: 'Flex notebook arose from a need in Daniel\'s own life. In his jujitsu dojo, he was required to keep a notebook of all the techniques he had learned. Many of these techniques are included in formal \'lists\'. Some techniques fit into multiple categories. Some seemed to belong everywhere and nowhere. Flex Notebook was designed to make storing and finding these techniques simple and effective.',
    liveUrl: 'http://www.flex-notebook.com/',
    sourceUrl: 'https://github.com/djllap/kata',
  },
  { title: 'LANG-LEARN',
    subtitle: 'Learning through spaced repetition',
    imgSrc: langLearnPic,
    imgAlt: 'Lang-Learn capture',
    stack: 'Node/Express, React with hooks',
    desc: 'Lang-Learn is a language learning tool that uses the popular spaced repetition strategy. It uses a scoring algorithm and linked lists to determine the sequence of words to be reviewed.',
    liveUrl: 'https://lang-learn.now.sh/',
    sourceUrl: 'https://github.com/djllap/lang-learn'
  },
  { title: 'DIGI-DOODLE',
    subtitle: 'Online Pictionary',
    imgSrc: digiDoodlePic,
    imgAlt: 'digi-doodle capture',
    stack: 'Node/Express, React, Socket.io',
    desc: 'Play Pictionary online with your friends! After choosing a username, you are directed into the first available game lobby, where you take turns drawing and guessing with as many as five other players. Powered by websockets and the HTML5 canvas. Digi-doodle uses cookies to identify players, so if you want to test it by yourself, make sure to use your browser\'s private mode or a different browser for each player.',
    liveUrl: 'https://digi-doodle.now.sh/',
    sourceUrl: 'https://github.com/djllap/digi-doodle-client',
    serverUrl: 'https://github.com/djllap/digi-doodle-server'
  }
]