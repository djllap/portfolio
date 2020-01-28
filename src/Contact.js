import React from 'react';

export default function Contact() {

  return (
    <div className="padding-container">
      <section className="contact-section">
        <h2 className="contact-title">
          Subspace communications are unavailable. Please initiate contact through the following means:
        </h2>
        <div className="column">
          <ul className="contact-links-list column">
            <li className="contact-link row">
              <span className="contact-btn-label white">Email:</span>
              <a className="contact-btn blue" href="mailto: Kentpercussion@gmail.com" target="blank">
                Kentpercussion@gmail.com
              </a>
            </li>
            <li className="contact-link row">
              <span className="contact-btn-label white">Github:</span>
              <a className="contact-btn blue" href="https://github.com/djllap" target="blank">
                github.com/djllap
              </a>
            </li>
            <li className="contact-link row">
              <span className="contact-btn-label white">LinkedIn:</span>
              <a className="contact-btn blue" href="http://linkedin.com/in/danielkent-j" target="blank">
                linkedin.com/in/danielkent-j
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}