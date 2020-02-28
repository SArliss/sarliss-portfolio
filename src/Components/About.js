import React from 'react';
import Sinara from '../Images/Sinara.jpg'

function About() {
  return (
    <div id="about" className="section-wrapper">
      <div className="about-inner-wrapper">
        <h3>About Me</h3>
        <section id="about-sinara">
          <img src={Sinara} id="sinara-photo" alt="Sinara avatar" />
          <p>Hello, my name is Sinara. I'm a curious and goal-oriented software engineer who loves problem solving,
            and the process of converting pseudocode into fully functional web applications.
            <br></br> <br></br>
            With a background in Computer Science and Information Systems, I'm passionate
            about coding and I'm always striving to master new skills. I have lived abroad and I speak
            English and Portuguese fluently.
            <br></br> <br></br>
            I enjoy traveling and learning about new cultures, new languages
            and new ways of thinking. It has made me a very empathetic and open-minded individual.
            I'm excited to connect with companies and colleagues that inspire me!</p>
        </section>
      </div>
    </div>
  )
}

export default About