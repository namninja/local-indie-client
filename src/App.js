import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";

import HomeNav from "./components/HomeNav";
import Landing from "./components/Landing";

import FindShows from "./components/FindShows";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BrowseArtists from "./components/BrowseArtists";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  login() {
    this.setState({ loggedIn: true });
  }

  logout() {
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <Router>
        <HomeNav
          {...this.state}
          login={() => this.login()}
          logout={() => this.logout()}
        />
        <main>
          <Route exact path="/" component={Landing} />
          <Route exact path="/find-shows" component={FindShows} />
          <Route exact path="/browse-artists" component={BrowseArtists} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </main>
      </Router>
    );
  }
}

export default App;
