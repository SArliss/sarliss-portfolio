import React from 'react'
import github from '../Images/github.svg'
import linkedin from '../Images/linkedin.svg'


function Contact() {
  return (
    <div id="contact" className="section-wrapper">
      <div className="social-media"> 
        <h3>Let's Connect</h3>
        <div>
          <p>Email: <a href="mailto: sinaraarliss@gmail.com" target="_blank" rel="noopener noreferrer">sinaraarliss@gmail.com</a></p>

          <div className="social-media">
            <a href="https://www.linkedin.com/in/sinaraarliss/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/SArliss" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" />
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact