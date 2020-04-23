import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import { animated, useTransition} from 'react-spring';
import TitleCard from './TitleCard'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import '../styles/Content.css'

export default function Content(props) {
  const { location } = useContext(__RouterContext);
  const bodyTranstitions = useTransition(location, location => location.pathname, {
    from: { transform: 'translateY(100vh)',  },
    enter: { transform: 'translateY(0)' },
    leave: { display: 'none' }
  })

  const titleCardRoutes = (
      <Switch>
        <Route
          exact
          path="/"
          component={() => <TitleCard title="PERSONNEL FILE: DANIEL KENT" />}
        />
        <Route
          exact
          path="/projects"
          component={() => <TitleCard title="PROJECTS" />}
        />
        <Route
          exact
          path="/contact"
          component={() => <TitleCard title="CONTACT INFORMATION" />}
        />
      </Switch>
  )

  const contentRoutes = bodyTranstitions.map(({item, props, key}) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>
        <Route
          exact
          path="/"
          component={About}
        />
        <Route
          path="/projects"
          component={ () => {
            return <Projects 
              projects={props.projects} 
              setProject={props.setProject}
            /> }}
        />
        <Route
          path="/contact"
          component={Contact}
        />
      </Switch>
    </animated.div>

  ))
  

  return (
    <main>
      {titleCardRoutes}
      <div className="content-container">
        {contentRoutes} 
      </div>
    </main>
  )
}
