import React from 'react';
import './App.css';

//Custom Components
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Hamburger from './Components/Hamburger';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Resume from './Components/Resume';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: JSON.parse(localStorage.getItem("Mode"))
    }
  }

  handleMode = () => {
    if (JSON.parse(localStorage.getItem("Mode")) === true) {
      this.setState({ mode: false }, () => {
        localStorage.setItem("Mode", JSON.stringify(false));
      })
    } else {
      this.setState({ mode: true }, () => {
        localStorage.setItem("Mode", JSON.stringify(true));
      })
    }
  }

  render() {
    return (
      <div className={this.state.mode ? "dark-app app" : "app"} id="home">

        <Nav mode={this.state.mode} handleMode={this.handleMode} />
        <Hamburger mode={this.state.mode} />
        <Hero mode={this.state.mode} />

        <div className="Content">
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </div>

        <Footer />

      </div>

    )
  }
}

export default App;
