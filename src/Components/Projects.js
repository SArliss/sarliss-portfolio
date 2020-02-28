import React from 'react';
import donut from '../Images/donut.png'

function Projects() {
  return (
    <div id="projects" className="section-wrapper">
      <div className="projects-wrapper">

        <h3>Projects</h3>

        <section className="single-project">

          <section className="single-project-left">
            <div className="project-image">
              <a href="http://peterpan.surge.sh/" target="_blank" rel="noopener noreferrer">
                <img src={donut} alt="Peter Pan Donut Shop" />
              </a>
            </div>
          </section>

          <section className="single-project-right">
          <div className="project-title">
              <h4>
                <a href="http://peterpan.surge.sh/" target="_blank" rel="noopener noreferrer">Peter Pan Donuts</a>
              </h4>
            </div>

            <div className="project-description">
              <p> A collaborative project with UX designers to redesign the website of the nationally 
                renowned Brooklyn donut shop, Peter Pan Donuts. You can also see the original website <a href="http://peterpandonuts.com/" target="_blank" rel="noopener noreferrer">here</a> for comparison.</p>

              <h5>Technologies:</h5>
              <ul>
                <li>React</li>
                <li>HTML/CSS</li>
                <li><a href="https://github.com/SArliss/peter-pan" target="_blank">Github</a></li>
              </ul>
            </div>
          </section>

        </section>

      </div>
    </div>
  )
}

export default Projects