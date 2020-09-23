import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import About from './About'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Home />
        <Profile />
        <About />
      </div>
    );
  }
}

export default App;
