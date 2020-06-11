import React from 'react';

function Hero(props) {
  return (
    <div className="hero-section">

      <a href="/#about">
        <div className="hero-title">
          <h1>Sinara Arliss</h1>
          <h2>Software Engineer</h2>
        </div>
      </a>

      <div className="arrow-section">
        <a href="/#about">
          <svg className="down-arrow-img bounce" width="100%" height="80px" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 100 150 L 300 150 L 200 300 z"
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </a>
      </div>

    </div>
  )
}

export default Hero