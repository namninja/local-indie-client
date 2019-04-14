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
      loggedIn: false,
      showLogin: false,
      showSignUp: false
    };
    this.login = this.login.bind(this);
  }
  showSignUpModal = () => {
    this.setState({ showSignUp: true });
  };

  hideSignUpModal = () => {
    this.setState({ showSignUp: false });
  };
  showLoginModal = () => {
    this.setState({ showLogin: true });
  };

  hideLoginModal = () => {
    this.setState({ showLogin: false });
  };
  login = () => {
    this.setState({ loggedIn: true });
    if (this.state.showLogin === true) {
      this.hideLoginModal();
    }
    if (this.state.showSignUp === true) {
      this.hideSignUpModal();
    }
  };

  logout = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    return (
      <Router>
        <HomeNav
          {...this.state}
          logout={this.logout}
          showLoginModal={e => this.showLoginModal()}
          showSignUpModal={e => this.showSignUpModal()}
        />
        <main>
          <Login
            showLogin={this.state.showLogin}
            handleClose={this.hideLoginModal}
            loggedIn={this.state.loggedIn}
            login={this.login}
          />
          <Signup
            showSignUp={this.state.showSignUp}
            handleClose={this.hideSignUpModal}
            loggedIn={this.state.loggedIn}
            login={this.login}
          />
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
