import React from 'react';
import { Route } from 'react-router-dom';
import TitleCard from './TitleCard'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function Content(props) {
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

  const contentRoutes = (
    <>
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
            width={props.width}
          /> }}
      />
      <Route
        path="/contact"
        component={Contact}
      />
    </>
  )

  return (
    <main>
      {titleCardRoutes}
      {contentRoutes}
    </main>
  )
}
