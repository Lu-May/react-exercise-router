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
import Products from "./Products"
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/about" component={About} />
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
