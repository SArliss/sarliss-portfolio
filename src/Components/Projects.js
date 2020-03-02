import React from 'react';
import donut from '../Images/donut.png'
import nasa from '../Images/nasa.png'
import numbers from '../Images/numbers.png'
import quizly from '../Images/quizly.png'



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
                <li><a href="https://github.com/SArliss/peter-pan" target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
            </div>
          </section>
        </section>

        
        <section className="single-project">
          <section className="single-project-left">
            <div className="project-image">
              <a href="http://quizly.surge.sh/" target="_blank" rel="noopener noreferrer">
                <img src={quizly} alt="Quizly game" />
              </a>
            </div>
          </section>

          <section className="single-project-right">
          <div className="project-title">
              <h4>
                <a href="http://quizly.surge.sh/" target="_blank" rel="noopener noreferrer">Quizly</a>
              </h4>
            </div>

            <div className="project-description">
              <p> A collaborative full-stack quiz game site that tracks high-scores and allows for user submissions. Admin accounts can approve, edit and delete user submitted questions and answers before entering into the game.</p>

              <h5>Technologies:</h5>
              <ul>
                <li>React</li>
                <li>Express</li>
                <li>Sequelize/Postgres</li>
                <li>HTML/CSS</li>
                <li><a href="https://github.com/Tambini/quizly" target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
            </div>
          </section>
        </section>

        
      
        <section className="single-project">
          <section className="single-project-left">
            <div className="project-image">
              <a href="http://numbersandfacts.surge.sh/" target="_blank" rel="noopener noreferrer">
                <img src={numbers} alt="Numbers and facts" />
              </a>
            </div>
          </section>

          <section className="single-project-right">
          <div className="project-title">
              <h4>
                <a href="http://numbersandfacts.surge.sh/" target="_blank" rel="noopener noreferrer">Number Facts</a>
              </h4>
            </div>

            <div className="project-description">
              <p>This webpage uses a third party API to access and render interesting facts about numbers.</p>
              <h5>Technologies:</h5>
              <ul>
                <li>React</li>
                <li>HTML/CSS</li>
                <li><a href="https://github.com/SArliss/number-facts" target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
            </div>
          </section>
        </section>

        
        
        <section className="single-project">
          <section className="single-project-left">
            <div className="project-image">
              <a href="http://nasaimages.surge.sh/" target="_blank" rel="noopener noreferrer">
                <img src={nasa} alt="Nasa search" />
              </a>
            </div>
          </section>

          <section className="single-project-right">
          <div className="project-title">
              <h4>
                <a href="http://nasaimages.surge.sh/" target="_blank" rel="noopener noreferrer">NASA Image Gallery</a>
              </h4>
            </div>

            <div className="project-description">
              <p>This webpage uses a third party API to access the NASA database and allows the user to perform a search for images. It also features a different astronomy and space science related image or video each day, along with a brief explanation written by a professional astronomer.</p>
              <h5>Technologies:</h5>
              <ul>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li><a href="https://github.com/SArliss/nasa-images" target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
            </div>
          </section>
        </section>

      </div>
    </div>
  )
}

export default Projects