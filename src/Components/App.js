import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import projects from '../projectData';

class App extends Component {
  state = {
    page: 'about',
    breakpoints: [600],
    windowWidth: 0,
    windowHeight: 0,
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
      newIndex = (currentIndex + 1 < projects.length) ? 
        currentIndex + 1 : 0;
    } else if (num < 0) {
      newIndex = (currentIndex - 1 > 0) ? 
        currentIndex - 1 : projects.length - 1;
    }
    this.setState({currentProjectIndex: newIndex});
  }

  render() {
    const NavbarRoutes = (
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => 
            <Navbar 
              page="about" 
              width={this.state.windowWidth} 
              breakpoints={this.state.breakpoints}  
            />
          }
        />
        <Route
          path="/projects"
          component={(props) => 
            <Navbar 
              page="projects" 
              width={this.state.windowWidth} 
              breakpoints={this.state.breakpoints} 
            />
          }
        />
        <Route
          path="/contact"
          component={(props) => 
            <Navbar 
              page="contact" 
              width={this.state.windowWidth} 
              breakpoints={this.state.breakpoints}   
            />
          }
        />
      </Switch>
    )

    return (
      <div className="App">
        <span id='preload-img-1' />
        <span id='preload-img-2' />
        <span id='preload-img-3' />
        <Header 
          breakpoints={this.state.breakpoints}
          width={this.state.windowWidth}
        />
        <div className="body-container">
          {NavbarRoutes}
          <Content 
            projects={projects}
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
