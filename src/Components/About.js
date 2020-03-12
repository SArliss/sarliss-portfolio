import React from 'react';
import Sinara from '../Images/Sinara.jpg'

function About() {
  return (
    <div id="about" className="section-wrapper">
      <div className="about-inner-wrapper">
        <h3>About Me</h3>
        <section id="about-sinara">

        <div className="about-sinara-photo-wrapper">
          <img src={Sinara} id="sinara-photo" alt="Sinara avatar" />
          </div>
          
          <div className="about-sinara-summary">
            <p>
              Hello, my name is Sinara. I am a curious and self-driven software engineer,
              who loves problem solving and the process of converting pseudocode into fully functional web applications.
          </p>
            <p>
              With a Master’s in Computer Science and over five years of experience in the Information Technology field,
              I am passionate about coding and I am continuously striving to acquire new skills.
              I love being a developer because I can extend my creativity and passion on developing eloquently designed applications.
          </p>
            <p>
              I have lived abroad and I speak English and Portuguese fluently. I enjoy traveling and learning about new cultures,
              new languages and new ways of thinking. It has made me a highly empathetic and open-minded individual,
              who can quickly adapt to changes in the work environment.
            </p>
            <p>I am excited to connect with companies and colleagues that inspire me!</p>
          </div>

        </section>
      </div>
    </div>
  )
}

export default About