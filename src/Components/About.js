import React from 'react';
import Sinara from '../Images/Sinara.jpg'

function About() {
  return (
    <div id="about" className="section-wrapper">
      <div className="about-inner-wrapper">
        <h3>About Me</h3>
        <section id="about-sinara">

          <div className="about-sinara-photo-wrapper">
            <img src={Sinara} id="sinara-photo" alt="Sinara avatar"/>
          </div>

          <div className="about-sinara-summary">

            <p>Software Engineer | Solutions Engineer | Full-Stack Web Developer</p>
            
            <p>Hello world,</p>
             
            <p>I'm Sinara Arliss, a self-driven software engineer with a master’s in computer science and over five years of work experience in the information technology industry.</p>
            
            <p> I see myself as a full-stack web developer with a strength in the front-end and I'm passionate about clean code and great UI/UX. I love being a developer because I can combine my creativity and analytical traits to break down complex problems and solve them efficiently. 
            I develop fully responsive web applications, and write high-quality code that is scalable and maintainable.
            I believe that creating eloquently designed tools and applications can be an enormous driver in improving and growing an organization.</p>

            <p>I live in New Jersey, USA, near the beatiful Navesink river and I have easy access to the Highlands-NYC Seastreak ferry. I was born in Brazil and I speak English and Portuguese fluently. I enjoy traveling and learning about new cultures, new languages and new ways of thinking. It has made me an empathetic and open-minded individual,
              who can quickly adapt to changes in the work environment.</p>

            <p>I'm excited to connect with companies and colleagues that inspire me!</p>
          
          </div>

        </section>
      </div>
    </div>
  )
}

export default About