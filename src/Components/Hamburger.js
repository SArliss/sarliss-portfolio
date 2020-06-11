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
    },
    bmCrossButton: {
      height: '2em',
      width: '2em',
      margin: '0.2em -0.4em',
      padding: '0.5em',
      textAlign: "center"
    },
    bmCross: {
      background: '#8ba1c5',
      height: '0.2em',
      width: '1.5em',
      right: '0.2em',
      top: '1.3em'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '55%',
      width: '100%',
      right: '0',
      top: '-0.5em',
    },
    bmMenu: {
      background: 'linear-gradient(-180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflow: 'hidden',
      boxShadow: '0 0.3em 0.5em -0.1em rgba(0,0,0,.2)',
      boxSizing: 'border-box'
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
      background: 'rgba(0, 0, 0, 0.05)'
    }
  }

  const stylesDark = {
    bmBurgerButton: {
      position: 'fixed',
      width: '2.1em',
      height: '1.9em',
      right: '2vw',
      top: '2vw',
    },
    bmCrossButton: {
      height: '2em',
      width: '2em',
      margin: '0.2em -0.4em',
      padding: '0.5em',
      textAlign: "center"
    },
    bmCross: {
      background: '#8ba1c5',
      height: '0.2em',
      width: '1.5em',
      right: '0.2em',
      top: '1.3em'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '55%',
      width: '100%',
      right: '0',
      top: '-0.5em',
    },
    bmMenu: {
      background: 'linear-gradient(-180deg, rgba(38, 38, 48, 1), rgba(38, 38, 48, 1), rgba(38, 38, 48, 0.95), rgba(38, 38, 48, 0.9))',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflow: 'hidden',
      boxShadow: '0 0.3em 0.5em -0.1em rgba(0,0,0,.2)',
      boxSizing: 'border-box'
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
      background: 'rgba(0, 0, 0, 0.05)'
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