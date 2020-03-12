import React from 'react';
import File from '../Images/file.png'


function Resume() {
  return (
    <div id="resume" className="section-wrapper">
      <div className="resume-inner-wrapper">

        <div>
          <h3>Resume</h3>
        </div>

        <div>
          <a href="https://drive.google.com/file/d/180xKRBOB3OUKdmQ1yjIxTo8ItZzAZ7-A/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img src={File} id="resume-icon" alt="Sinara resume" />
          </a>
        </div>

      </div>
    </div>

  )
}

export default Resume