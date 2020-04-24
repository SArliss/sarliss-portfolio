import React from 'react';
import donut from '../Images/donut.png'
import nasa from '../Images/nasa.png'
import doodling from '../Images/doodling.png'
import news from '../Images/news.png'


function Projects() {
  return (
    <div id="projects" className="section-wrapper">
      <div className="projects-wrapper">

        <h3>Projects</h3>

        <section className="single-project">
          <section className="single-project-left">
            <div className="project-image">
              <a href="http://america-top-news.surge.sh/" target="_blank" rel="noopener noreferrer">
                <img src={news} alt="America's Top News" />
              </a>
            </div>
          </section>

          <section className="single-project-right">
            <div className="project-title">
              <h4>
                <a href="http://america-top-news.surge.sh/" target="_blank" rel="noopener noreferrer">America's Top News</a>
              </h4>
            </div>

            <div className="project-description">
              <p>A fully responsive website built with create-react-app and powered by newsapi.org to display the 20 latest American news headlines. 
              Clicking on a news headline brings up a modal that shows an avatar with a larger picture, a title, a description and a link to the full article.
              The modal window was built from scratch, no packages. The modal puts an overlay over the rest of the page when it's active.
              Clicking the modal "close button" closes the modal and returns page to the original view.
              Clicking outside the modal has the same effect as clicking the "close button".
              </p>

              <p>Technologies:</p>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li><a href="https://github.com/SArliss/usa-top-headlines" target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
            </div>
          </section>
        </section>


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
                renowned Brooklyn donut shop, Peter Pan Donuts.
                You can also see the original website <a href="http://peterpandonuts.com/"
                  target="_blank" rel="noopener noreferrer">here</a> for comparison.
              </p>

              <p>Technologies:</p>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li><a href="https://github.com/SArliss/peter-pan" target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
            </div>
          </section>
        </section>


        <section className="single-project">
          <section className="single-project-left">
            <div className="project-image">
              <a href="http://doodles-art-gallery.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">
                <img src={doodling} alt="Doodling Art Gallery" />
              </a>
            </div>
          </section>

          <section className="single-project-right">
            <div className="project-title">
              <h4>
                <a href="http://doodles-art-gallery.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">Doodling Art Gallery</a>
              </h4>
            </div>

            <div className="project-description">
              <p>A full-stack basic desktop drawing app that renders Scalable Vector Graphics (SVG),
                and sends over the image coordinates path to a database developed with Ruby on Rails and Postgres.
                Users can draw an image, select a category, update the image title and delete their art in their personal gallery.
                Public gallery features all public art. The back-end is deployed with Heroku
                and the front-end is deployed with Amazon Web Services (AWS).
                Touchscreen is a feature currently under development for the mobile version.
              </p>

              <p>Technologies:</p>
              <ul>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>Postgres</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>SVG</li>
                <li><a href="https://github.com/SArliss/doodling-art-gallery" target="_blank" rel="noopener noreferrer">Github</a></li>
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
                <a href="http://nasaimages.surge.sh/" target="_blank" rel="noopener noreferrer">NASA Images</a>
              </h4>
            </div>

            <div className="project-description">
              <p>This webpage uses a third party API to access the NASA database and allows the user to perform a search for images.
                It also features a different astronomy science related image or video each day, along with a brief explanation
                written by a professional astronomer.
              </p>
              <p>Technologies:</p>
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