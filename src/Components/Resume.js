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
          <a href="https://www.docdroid.net/L36CDzl/arliss-resume.pdf" target="_blank" rel="noopener noreferrer">
            <img src={File} id="resume-icon" alt="Sinara resume" />
          </a>
        </div>

      </div>
    </div>

  )
}

export default Resume