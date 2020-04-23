import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import { animated, useTransition} from 'react-spring';
import TitleCard from './TitleCard'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function Content(props) {
  const { location } = useContext(__RouterContext);
  const bodyTranstitions = useTransition(location, location => location.pathname, {
    from: { transform: 'translateX(100%)', opacity: 1 },
    enter: { transform: 'translateX(0)', opacity: 1 },
    leave: { transform: 'translateX(-100%)', opacity: 0, position: 'absolute', zIndex: '-1' }
  })

  const titleCardRoutes = (
    <>
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
    </>
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
      <div>
        {contentRoutes} 
      </div>
    </main>
  )
}
