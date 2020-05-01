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
              Clicking on a news headline brings up a modal that shows an avatar with additional info and a link to the full article.
              The modal window was built from scratch, no packages. The modal puts an overlay over the rest of the page when it's active.
              Clicking the modal "close button" closes the modal and returns page to the original view.
              Clicking outside the modal has the same effect as clicking the "close button".
              </p>

              <p>Technologies:</p>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>

              <div className="project-links">
                  <a href="http://america-top-news.surge.sh/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg> 
                    Demo / Live version
                  </a>
                  <a href="https://github.com/SArliss/usa-top-headlines" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View repo on Github
                  </a>
              </div>

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
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>

              <div className="project-links">
                  <a href="http://peterpan.surge.sh/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg> 
                    Demo / Live version
                  </a>
                  <a href="https://github.com/SArliss/peter-pan" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View repo on Github
                  </a>
              </div>

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
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SVG</li>
                <li>AWS</li>
              </ul>

              <div className="project-links">
                  <a href="http://doodles-art-gallery.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg> 
                    Demo / Live version
                  </a>
                  <a href="https://github.com/SArliss/doodling-art-gallery" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View repo on Github
                  </a>
              </div>

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
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>

              <div className="project-links">
                  <a href="http://nasaimages.surge.sh/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg> 
                    Demo / Live version
                  </a>
                  <a href="https://github.com/SArliss/nasa-images" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View repo on Github
                  </a>
              </div>
              
            </div>
          </section>
        </section>

      </div>
    </div>
  )
}

export default Projects