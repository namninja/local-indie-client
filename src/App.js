import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";

import HomeNav from "./components/HomeNav";
import About from "./components/About";
import Landing from "./components/Landing";

import FindShows from "./components/FindShows";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BrowseArtists from "./components/BrowseArtists";

class App extends Component {
  render() {
    return (
      <Router>
        <HomeNav />
        <main>
          <Route exact path="/find-shows" component={FindShows} />
          <Route exact path="/browse-artists" component={BrowseArtists} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Landing />
          <About />
        </main>
      </Router>
    );
  }
}

export default App;
