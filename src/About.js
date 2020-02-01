import React from 'react';
import headShot from './headshot.jpg'

export default function About(props) {

  return (
    <div className="padding-container">
      <section className="profile-row row">
        <div className="pic-column column">
          <img src={headShot} alt="head shot" />
        </div>
        <div className="bio-column column">
          <div className="row">
            <span className="bio-header">DOSSIER</span>
          </div>
          <div className="row">
            <span className="label">Full Name:</span>
            <span>Kent, Daniel Jacob</span>
          </div>
          <div className="row">
            <span className="label">Species:</span>
            <span>Human (unverified)</span>
          </div>
          <div className="row">
            <span className="label">Sex:</span>
            <span>Male</span>
          </div>
          <div className="row">
            <span className="label">Place of residence:</span>
            <span>Denver, CO, Earth</span>
          </div>
          <div className="row">
            <span className="label">Occupation:</span>
            <span>Engineer, Software</span>
          </div>
        </div>
      </section>
      <section className="full-bio column">
        <p>
          Having a passion for learning new things and gaining new skills, Daniel has developed a varied and diverse skillset. He has recieved a master's degree in muisc performance, earned a black belt in Danzan Ryu Jujitsu, built most of the furniture in his home by hand, and is an above average player of the board game, go.
        </p>
        <p>He also makes some pretty cool web apps.</p>
        <p>
          Daniel loves to solve problems through programming by developing useful, pragmatic applications. His favorite technologies are Ruby and React, and he loves to design layouts with flexbox (inspect this webpage for proof). Daniel likes to work on teams of skilled developers, where he can learn from those with more experience, as well as help those with less.
        </p>
      </section>
    </div>
  );
}