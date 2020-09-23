import React, { Component } from "react";
import "../styles/App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import About from "./About";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <switch>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/profile" Component={Profile} />
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
