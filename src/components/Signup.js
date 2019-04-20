import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Signup.css";
import UserContext from "../contexts/UserContext";
import classnames from "classnames";
const { API_BASE_URL } = require("../config");

class Signup extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      profileName: "",
      email: "",
      city: "",
      state: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      profileName: this.state.profileName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      city: this.state.city,
      state: this.state.state
    };
    //console.log(newUser);
    fetch(`${API_BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(data => {
        if (data.message === "Signup successful") {
          this.context.login(data.user);
          window.localStorage.setItem("Bearer", data.user.token);
          this.context.loggedIn = true;
          this.props.history.push(`/profile/${data.user._id}`);
        }
      })
      .catch(err => {
        this.setState({ errors: err });
      });
  };

  render() {
    const { errors } = this.state;
    const showHideClassName = this.props.showSignUp
      ? "modal-signup display-flex"
      : "modal-signup display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-signup-main">
          <div className="signup-header">
            <Link to="/" className="close" onClick={this.props.handleClose}>
              <i class="fa fa-times" />
            </Link>
            <h2>
              <i class="fas fa-lock" /> Sign Up
            </h2>
          </div>
          <form className="signup-form" noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Profile Name</label>
              <input
                id="profileName"
                type="text"
                className="form-control"
                name="profileName"
                placeholder="My Band"
                required
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                className="form-control"
                name="email"
                placeholder="my@email.com"
                required
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                className="form-control"
                name="city"
                placeholder="New York"
                required
                onChange={this.onChange}
                value={this.state.city}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                maxlength="2"
                id="state"
                type="text"
                className="form-control"
                name="state"
                placeholder="CA"
                required
                onChange={this.onChange}
                value={this.state.state}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className="form-control"
                name="password"
                placeholder="*****"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                className="form-control"
                name="password"
                placeholder="*****"
                required
              />
            </div>
            <button
              to="/profile"
              className="signup-btn btn"
              onClick={this.props.login}
            >
              Sign Up
            </button>
          </form>
        </section>
        <section className="modal-overlay" id="modal-overlay" />
      </div>
    );
  }
}

export default withRouter(Signup);
