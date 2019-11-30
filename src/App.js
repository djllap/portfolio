import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  state = {
    page: 'about',
    breakpoints: [600],
    windowWidth: 0,
    windowHeight: 0,
    projects: [
      { 
        title: 'FLEX NOTEBOOK',
        subtitle: 'A notebook app for martial arts',
        imgSrc: './Flex-notebook-small.png',
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
    let newIndex;
    if (num > 0) {
      newIndex = num + 1 <= this.state.projects.length ? 
        num + 1 : 0;
    } else if (num < 0) {
      newIndex = num - 1 >= 0 ? 
        num - 1 : this.state.projects.length - 1;
    }
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
