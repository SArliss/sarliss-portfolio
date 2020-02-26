import React from 'react';

function Nav() {
  return (
    <div className="section-wrapper">
      <nav>
        <ul id="ul-nav">
          <a href="/#about" className="nav-item"><li>About</li></a>
          <a href="/#projects" className="nav-item"><li>Projects</li></a>
          <a href="/#contact" className="nav-item"><li>Contact</li></a>
        </ul>
      </nav>
    </div>
  )
}

export default Nav