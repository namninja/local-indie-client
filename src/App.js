import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";
import UserContext from "./contexts/UserContext";
import "./App.css";
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

const { API_BASE_URL } = require("./config");

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
          this.setState({
            user: oldUser,
            showLogin: false,
            showSignUp: false,
            loggedIn: true
          });
          window.localStorage.setItem("Bearer", user.token);
          window.localStorage.setItem("id", user._id);
        },
        logout: () => {
          let oldUser = this.state.user;
          oldUser.loggedInUser = null;
          localStorage.removeItem("id");
          localStorage.removeItem("Bearer");
          window.location.href = "/";
          this.setState({
            loggedIn: false
          });
        }
      }
    };
  }
  componentDidMount() {
    // check to see if ID is set
    // in local and this state user null
    // api call with pass token
    const id = window.localStorage.getItem("id");
    const token = window.localStorage.getItem("Bearer");
    if (id && token) {
      fetch(`${API_BASE_URL}/api/validate`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.statusText);
        })
        .then(data => {
          const oldUser = this.state.user;
          oldUser.loggedInUser = data.user;
          oldUser.loggedInUser.token = token;
          this.setState({
            loggedIn: true,
            user: oldUser
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
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
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/edit-profile/:id" component={EditProfile} />
            <Route exact path="/post-event/:id" component={PostEvent} />
            <Route path="/event" component={Event} />
          </main>
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
