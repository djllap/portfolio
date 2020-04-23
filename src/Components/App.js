import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

export default function App() {
  const NavbarRoutes = (
    <Switch>
      <Route
        exact
        path="/"
        component={(props) => 
          <Navbar page="about" />
        }
      />
      <Route
        path="/projects"
        component={(props) => 
          <Navbar page="projects" />
        }
      />
      <Route
        path="/contact"
        component={(props) => 
          <Navbar page="contact" />
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
      <span id='preload-img-5' />
      <Header />
      <div className="body-container">
        {NavbarRoutes}
        <Content />
      </div>
      <Footer />
    </div>
  );
}
