import React from 'react';
import { fallDown as Menu } from 'react-burger-menu';

function Hamburger(props) {
  const stylesLight = {
    bmBurgerButton: {
      position: 'fixed',
      width: '2.1em',
      height: '1.9em',
      right: '2vw',
      top: '2vw',
      outlineStyle: 'none'
    },
    bmCrossButton: {
      height: '2em',
      width: '2em'
    },
    bmCross: {
      background: '#8ba1c5'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '50%',
      width: '100%'
    },
    bmMenu: {
      background: '#f0f0f0',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflow: 'hidden'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'flex',
      borderRadius: '0.1em',
      paddingLeft: '0.5em',
      listStyleType: 'none',
      textDecoration: 'none',
      marginBottom: '1em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0)'
    }
  }

  const stylesDark = {
    bmBurgerButton: {
      position: 'fixed',
      width: '2.1em',
      height: '1.9em',
      right: '2vw',
      top: '2vw',
      outlineStyle: 'none'
    },
    bmCrossButton: {
      height: '2em',
      width: '2em'
    },
    bmCross: {
      background: '#8ba1c5'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '50%',
      width: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflow: 'hidden'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'flex',
      borderRadius: '0.1em',
      paddingLeft: '0.5em',
      listStyleType: 'none',
      textDecoration: 'none',
      marginBottom: '1em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0)'
    }
  }

  return (
    <div className="hamburger-menu">
      {props.mode ?
      <Menu styles={stylesDark} disableAutoFocus >
        <a href="/#about" className="menu-item"><li>About</li></a>
        <a href="/#skills" className="menu-item"><li>Skills</li></a>
        <a href="/#projects" className="menu-item"><li>Projects</li></a>
        <a href="/#resume" className="menu-item"><li>Resume</li></a>
        <a href="/#contact" className="menu-item"><li>Contact</li></a>
        </Menu>
        :
        <Menu styles={stylesLight} disableAutoFocus >
        <a href="/#about" className="menu-item"><li>About</li></a>
        <a href="/#skills" className="menu-item"><li>Skills</li></a>
        <a href="/#projects" className="menu-item"><li>Projects</li></a>
        <a href="/#resume" className="menu-item"><li>Resume</li></a>
        <a href="/#contact" className="menu-item"><li>Contact</li></a>
        </Menu>
      }
    </div>
  )
}

export default Hamburger;