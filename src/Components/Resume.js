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
          <a href="https://drive.google.com/uc?id=1SuMlYmqtU-cZ6nW0oekHo5pPxMC7Gq2f&export=download" target="_blank" rel="noopener noreferrer">
            <img src={File} id="resume-icon" alt="Sinara resume" />
          </a>
        </div>

      </div>
    </div>

  )
}

export default Resume