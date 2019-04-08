import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Router>
        <main className="home" />
      </Router>
    );
  }
}

export default Home;
