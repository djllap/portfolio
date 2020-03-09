import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import projects from '../projectData';

class App extends Component {
  state = {
    breakpoints: [600],
    windowWidth: 0,
    windowHeight: 0,
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
        <span id='preload-img-4' />
        <Header 
          breakpoints={this.state.breakpoints}
          width={this.state.windowWidth}
        />
        <div className="body-container">
          {NavbarRoutes}
          <Content 
            setProject={this.setProject}
            width={this.state.windowWidth}
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
