import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Home />
      </div>
    );
  }
}

export default App;
