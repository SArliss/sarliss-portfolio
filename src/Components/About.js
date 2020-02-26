import React from 'react';
import Sinara from '../Images/Sinara.jpg'

function About() {
  return (
    <div id="about" className="section-wrapper">
      <div className="about-inner-wrapper">
      <h3>About Me</h3>
        <section id="about-sinara">
        <img src={Sinara} id="sinara-photo" alt="Sinara avatar" />
          <p>I am a curious and goal-oriented software engineer who loves problem solving,
            and the process of converting pseudocode into fully functional web applications.
            With a background in Computer Science and Information Systems, I'm passionate
            about coding and I'm always striving to master new skills. I have lived abroad and I speak 
            English and Portuguese fluently. I enjoy traveling and learning about new cultures, new languages 
            and new ways of thinking. It has made me a very empathetic and open-minded individual. 
            I'm excited to connect with companies and colleagues that inspire me!</p>
        </section>
        <section>
          <h3>Skills</h3>
          <ul id="skills">
            <li>JavaScript/ES6</li>
            <li>React</li>
            <li>HTML/HTML5</li>
            <li>CSS</li>
            <li>Git/GitHub</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>SQLite</li>
            <li>Sequelize</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Ruby</li>
            <li>Rails</li>
            <li>Python</li>
            <li>RESTful APIs</li>
            <li>JSON</li>
            <li>Responsive Web Design</li>
            <li>Model-View-Controller</li>
            <li>Photoshop</li>
          </ul>
        </section>
        <section id="resume">
          <h3>Resume</h3>
          <a href="https://www.docdroid.net/L36CDzl/arliss-resume.pdf" target="_blank" rel="noopener noreferrer">Click here to access Resume</a>
        </section>
      </div>
    </div>
  )
}

export default About