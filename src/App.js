import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";

import UserContext from "./contexts/UserContext";

import HomeNav from "./components/HomeNav";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import FindEvent from "./components/FindEvent";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EditProfile from "./components/EditProfile";
import PostEvent from "./components/PostEvent";
import BrowseArtists from "./components/BrowseArtists";
import Event from "./components/Event";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      showLogin: false,
      showSignUp: false,
      user: {
        loggedInUser: null,
        login: user => {
          let oldUser = this.state.user;
          oldUser.loggedInUser = user;
          this.setState({ user: oldUser, showLogin: false, showSignUp: false });
        },
        logout: () => {
          let oldUser = this.state.user;
          oldUser.loggedInUser = null;
        }
      }
    };
  }

  showLoginModal = () => {
    this.setState({ showLogin: true });
  };
  hideLoginModal = () => {
    this.setState({ showLogin: false });
  };
  showSignUpModal = () => {
    this.setState({ showSignUp: true });
  };
  hideSignUpModal = () => {
    this.setState({ showSignUp: false });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <Router>
          <HomeNav
            {...this.state}
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
            <Route exact path="/edit-profile" component={EditProfile} />
            <Route exact path="/post-event" component={PostEvent} />
            <Route path="/event" component={Event} />
          </main>
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
