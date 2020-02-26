import React from 'react';
import './App.css';

//Custom Components
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        
        <Nav />
        <Hero />
        

        <div className="Content">
          <About />
          <Projects />
          <Contact />
        </div>

        <Footer />

      </div>

    )
  }
}

export default App;
