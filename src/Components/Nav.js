import React from 'react';

function Nav(props) {
  return (
    <nav className={props.mode ? "nav dark-nav" : "nav"}>

      <ul className="logo-nav">
        <a href="/#sinara">SArliss</a>
        <div className="btn-mode" title="light or dark mode">
          <div className={props.mode ? "btn-icons btn-icons-dark" : "btn-icons"} onClick={props.handleMode}>
            <i className="fas fa-moon"></i>
            <div className={props.mode ? "btn-circle-new btn-circle" : "btn-circle"}></div>
            <i className="fas fa-sun"></i>
          </div>
        </div>
      </ul>

      <ul className="ul-nav">
        <a href="/#about" className="nav-item"><li>About</li></a>
        <a href="/#skills" className="nav-item"><li>Skills</li></a>
        <a href="/#projects" className="nav-item"><li>Projects</li></a>
        <a href="/#resume" className="nav-item"><li>Resume</li></a>
        <a href="/#contact" className="nav-item"><li>Contact</li></a>
      </ul>

    </nav>
  )
}

export default Nav;