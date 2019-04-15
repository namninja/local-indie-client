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
import Profile from "./components/Profile";
import FindEvent from "./components/FindEvent";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BrowseArtists from "./components/BrowseArtists";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      showLogin: false,
      showSignUp: false,
      events: [
        {
          title: "Big Foot Little Dick Album release",
          venue: "Bar Bar",
          date: "4/17/19",
          address: "1234 five street",
          city: "San Diego",
          state: "CA",
          zipcode: "92124",
          cost: "$10",
          start: "8pm",
          end: "2am",
          details:
            "Album release for Big Foot Little Dick. Opening bands Ponzi Schemers, Pocohontas's ghost, and Jerry Atric and the Gerriatrics"
        },
        {
          title: "Similar Techno",
          venue: "Club Black light",
          date: "4/17/19",
          address: "567 eigth street",
          city: "Brooklyn",
          state: "NY",
          zipcode: "11234",
          cost: "Free",
          start: "10pm",
          end: "2am",
          details:
            "5 Djs spinning the latest house songs but you willb e too drunk to really tell the difference"
        }
      ]
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
          <Route exact path="/find-event" component={FindEvent} />
          <Route exact path="/browse-artists" component={BrowseArtists} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/:id" component={Profile} />
        </main>
      </Router>
    );
  }
}

export default App;
