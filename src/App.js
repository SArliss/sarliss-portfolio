import React from 'react';
import './App.css';

//Custom Components
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Resume from './Components/Resume';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        
        <Nav />
        <Hero />
        

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
