import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import rangeWizardPic from '../imgs/rangeWizard.png'
import flexNotebookPic from '../imgs/Flex-notebook-small.png'
import langLearnPic from '../imgs/lang-learn.png'


class App extends Component {
  state = {
    page: 'about',
    breakpoints: [600],
    windowWidth: 0,
    windowHeight: 0,
    projects: [
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
    ],
    currentProjectIndex: 0,
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight})
  }

  setProject = (num) => {
    const currentIndex = this.state.currentProjectIndex;
    let newIndex;
    if (num > 0) {
      newIndex = (currentIndex + 1 < this.state.projects.length) ? 
        currentIndex + 1 : 0;
    } else if (num < 0) {
      newIndex = (currentIndex - 1 > 0) ? 
        currentIndex - 1 : this.state.projects.length - 1;
    }
    this.setState({currentProjectIndex: newIndex});
  }

  render() {
    const NavbarRoutes = (
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => {
            return <Navbar 
                      page="about" 
                      width={this.state.windowWidth} 
                      breakpoints={this.state.breakpoints}  
                    />
          }}
        />
        <Route
          path="/projects"
          component={(props) => {
            return <Navbar 
                      page="projects" 
                      width={this.state.windowWidth} 
                      breakpoints={this.state.breakpoints} 
                    />
          }}
        />
        <Route
          path="/contact"
          component={(props) => {
            return <Navbar 
                      page="contact" 
                      width={this.state.windowWidth} 
                      breakpoints={this.state.breakpoints}   
                    />
          }}
        />
      </Switch>
    )

    return (
      <div className="App">
        <Header 
          breakpoints={this.state.breakpoints}
          width={this.state.windowWidth}
        />
        <div className="body-container">
          {NavbarRoutes}
          <Content 
            projects={this.state.projects}
            currentProjectIndex={this.state.currentProjectIndex}
            setProject={this.setProject}
          />
        </div>
        <Footer 
          width={this.state.windowWidth} 
          breakpoints={this.state.breakpoints} 
        />
      </div>
    );
  }
}

export default App;
