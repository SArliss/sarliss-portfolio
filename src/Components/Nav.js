import React from 'react';

function Nav() {
  return (
    <nav>
      <ul id="ul-nav">
        <a href="/#about" className="nav-item"><li>About</li></a>
        <a href="/#skills" className="nav-item"><li>Skills</li></a>
        <a href="/#projects" className="nav-item"><li>Projects</li></a>
        <a href="/#resume" className="nav-item"><li>Resume</li></a>
        <a href="/#contact" className="nav-item"><li>Contact</li></a>
      </ul>
    </nav>
  )
}

export default Nav