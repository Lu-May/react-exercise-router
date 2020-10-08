import React, { Component } from "react";
import "../styles/App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import About from "./About";
import Header from "./Header";
import Products from "./Products"
import Product from "./Product/Product"
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:id" component={Product} />
          {/* <Redirect from="/goods" to="/products"></Redirect> */}
          <Route exact path="/" component={Home} />
          {/* <Redirect form="/:any(.*)" to="/"></Redirect> */}
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
