import React from 'react';
import downArrow from '../Images/downarrow.png'

function Hero() {
  return (
    <div className="hero-section">

      <a href="/#about" className="nav-item">
        <header>
          <h1>Sinara Arliss</h1>
          <h2>Software Engineer</h2>
        </header>
      </a>

      <div className="arrow-section">
        <a href="/#about">
          <img className="down-arrow-img bounce" src={downArrow} />
        </a>
      </div>

    </div>
  )
}

export default Hero