import rangeWizardPic from './imgs/rangeWizard.png';
import flexNotebookPic from './imgs/Flex-notebook-small.png';
import langLearnPic from './imgs/lang-learn.png';

export default [
  {
    title: 'RANGE WIZARD',
    subtitle: 'Poker hand range manager',
    imgSrc: rangeWizardPic,
    imgAlt: 'Range Wizard capture',
    stack: 'Node/Express, React',
    desc: 'Range Wizard allows you to organize related ranges into a single, color-coded chart. The interface is simple and intuitive, so even those without much experience with computers can use Range Wizard without difficulty.',
    liveUrl: 'https://www.range-wizard.com/',
    sourceUrl: 'https://github.com/djllap/range-wizard-client'
  },
  { 
    title: 'FLEX NOTEBOOK',
    subtitle: 'A notebook app for martial arts',
    imgSrc: flexNotebookPic,
    imgAlt: 'Flex Notebook capture',
    stack: 'Ruby on Rails, React',
    desc: 'Flex notebook arose from a need in Daniel\'s own life. In his jujitsu dojo, he was required to keep a notebook of all the techniques he had learned. Many of these techniques are included in formal \'lists\'. Some techniques fit into multiple categories. Some seemed to belong everywhere and nowwhere. Flex Notebook was designed to make storing and finding these techniques simple and effective.',
    liveUrl: 'http://www.flex-notebook.com/',
    sourceUrl: 'https://github.com/djllap/kata'
  },
  { title: 'Lang-Learn',
    subtitle: 'Learning through spaced repetition',
    imgSrc: langLearnPic,
    imgAlt: 'Lang-Learn capture',
    stack: 'Node/Express, React with hooks',
    desc: 'Lang-Learn is a language learning tool that uses the popular spaced repetition strategy. It uses a scoring algorithm and linked lists to determine the sequence of words to be reviewed. Daniel was the principal front-end developer, with Javier Zapien developing the API.',
    liveUrl: 'https://lang-learn.now.sh/',
    sourceUrl: 'https://github.com/djllap/lang-learn'
  }
]