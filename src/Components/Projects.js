import React from 'react';
import donut from '../Images/donut.png'

function Projects() {
  return (
    <div id="projects" className="section-wrapper">


      <h3>Projects</h3>

      <div className="projects-wrapper">

        <div className="project-image">
          <a href="http://peterpan.surge.sh/" target="_blank" rel="noopener noreferrer">
            <img src={donut} alt="Peter Pan Donut Shop" />
          </a>          
        </div>

        <div className="project-title">
          <h4>
            <a href="http://peterpan.surge.sh/" target="_blank" rel="noopener noreferrer">Peter Pan Donuts</a>
          </h4>
        </div>

          <div className="project-description">
            <p> A collaborative project with UX designers to redesign the website of the nationally renowned Brooklyn donut shop,
               <a href="http://peterpan.surge.sh/" target="_blank" rel="noopener noreferrer">Peter Pan Donuts</a>.
              You can also see the original website
              <a href="http://peterpandonuts.com/" target="_blank" rel="noopener noreferrer">here</a> for comparison.</p>

            <h6>Technologies:</h6>
            <ul>
              <li>React</li>
            </ul>
          </div>

  
      </div>
    </div>
  )
}

export default Projects