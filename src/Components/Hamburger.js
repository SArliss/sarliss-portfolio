import React from 'react';
import { fallDown as Menu } from 'react-burger-menu';

class Hamburger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {

    const stylesLight = {
      bmBurgerButton: {
        position: 'fixed',
        width: '2.1em',
        height: '1.9em',
        right: '2vw',
        top: '2vw',
        zIndex: '3000'
      },
      bmCrossButton: {
        display: 'none'
      },
      bmMenuWrap: {
        position: 'fixed',
        height: 'auto',
        width: '100%',
        right: '0',
        top: '0',
        paddingTop: '3vw'
      },
      bmMenu: {
        background: 'linear-gradient(-180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.9))',
        padding: '2.5em 1.3em 0',
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
        listStyleType: 'none',
        textDecoration: 'none',
        marginBottom: '1em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }

    const stylesDark = {
      bmBurgerButton: {
        position: 'fixed',
        width: '2.1em',
        height: '1.9em',
        right: '2vw',
        top: '2vw',
        zIndex: '3000'
      },
      bmCrossButton: {
        display: 'none'
      },
      bmMenuWrap: {
        position: 'fixed',
        height: 'auto',
        width: '100%',
        right: '0',
        top: '0',
        paddingTop: '3vw'
      },
      bmMenu: {
        background: 'linear-gradient(-180deg, rgba(38, 38, 48, 1), rgba(38, 38, 48, 1), rgba(38, 38, 48, 1), rgba(38, 38, 48, 0.9))',
        padding: '2.5em 1.3em 0',
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
        listStyleType: 'none',
        textDecoration: 'none',
        marginBottom: '1em'
      },
      bmOverlay: {
        background: 'rgba(50, 50, 50, 0.3)'
      }
    }

    return (
      <div className="hamburger-menu">
        {this.props.mode ?
          <Menu
            styles={stylesDark}
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            disableAutoFocus >
            <a onClick={() => this.closeMenu()} href="/#about" className="menu-item"><li>About</li></a>
            <a onClick={() => this.closeMenu()} href="/#skills" className="menu-item"><li>Skills</li></a>
            <a onClick={() => this.closeMenu()} href="/#projects" className="menu-item"><li>Projects</li></a>
            <a onClick={() => this.closeMenu()} href="/#resume" className="menu-item"><li>Resume</li></a>
            <a onClick={() => this.closeMenu()} href="/#contact" className="menu-item"><li>Contact</li></a>
          </Menu>
          :
          <Menu
            styles={stylesLight}
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            disableAutoFocus >
            <a onClick={() => this.closeMenu()} href="/#about" className="menu-item"><li>About</li></a>
            <a onClick={() => this.closeMenu()} href="/#skills" className="menu-item"><li>Skills</li></a>
            <a onClick={() => this.closeMenu()} href="/#projects" className="menu-item"><li>Projects</li></a>
            <a onClick={() => this.closeMenu()} href="/#resume" className="menu-item"><li>Resume</li></a>
            <a onClick={() => this.closeMenu()} href="/#contact" className="menu-item"><li>Contact</li></a>
          </Menu>
        }
      </div>
    )
  }
}

export default Hamburger;