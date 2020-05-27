import React from 'react';

function Nav() {
  return (
    <nav>

      <ul className="logo-nav">
        <a href="/#sinara"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 26 24"><path d="M17.5 12.5c0 .828-.56 1.5-1.25 1.5s-1.25-.672-1.25-1.5.56-1.5 1.25-1.5 1.25.672 1.25 1.5zm-7.75-1.5c-.69 0-1.25.672-1.25 1.5s.56 1.5 1.25 1.5 1.25-.672 1.25-1.5-.56-1.5-1.25-1.5zm3.25 8.354c2.235 0 3-2.354 3-2.354h-6s.847 2.354 3 2.354zm13-6.75c0 2.865-.791 5.778-1.933 8.243-.542 1.169-1.163 2.238-1.817 3.153l-3.796-1.917c-1.556 1.187-3.37 1.917-5.454 1.917-1.993 0-3.825-.749-5.408-1.941l-3.842 1.941c-.654-.915-1.275-1.984-1.817-3.153-1.142-2.465-1.933-5.378-1.933-8.243 0-7.59 5.281-12.604 13-12.604s13 5.014 13 12.604zm-5.669 4.285c.123-.202.313-.354.536-.43 2.106-.713 2.57-3.529 1.802-4.746-6.576-.39-10.89-3.363-12.669-6.322-2.257 5.063-5.078 6.628-6.863 6.795-.482 1.714.322 3.706 1.996 4.273.224.076.413.228.536.43 1.708 2.83 4.015 5.111 7.331 5.111 3.318 0 5.624-2.284 7.331-5.111z" fill="rgb(60, 131, 136" /></svg>
          <li>SArliss</li>
        </a>
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

export default Nav