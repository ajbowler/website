import Blazy from 'blazy';
import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/About-Me';
import Header from './components/Header';
import Contact from './components/Contact';

class App extends Component {
  componentDidMount = () => {
    new Blazy();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <AboutMe />
        </div>
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
