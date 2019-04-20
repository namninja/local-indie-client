import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.css";
import UserContext from "../contexts/UserContext";
const { API_BASE_URL } = require("../config");

class Login extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(data => {
        this.context.login(data.user);
        window.localStorage.setItem("Bearer", data.user.token);
        this.context.loggedIn = true;
        this.props.history.push(`/profile/${data.user._id}`);
      })
      .catch(err => {
        this.setState({ errors: err });
      });
  };
  render() {
    const { errors } = this.state;
    const showHideClassName = this.props.showLogin
      ? "modal display-flex"
      : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="login-header">
            <Link to="/" className="close" onClick={this.props.handleClose}>
              <i class="fa fa-times" />
            </Link>

            <h2>
              <i class="fas fa-lock" /> Login
            </h2>
          </div>
          <form className="log-form" noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="text"
                class="form-control"
                name="email"
                placeholder="demo@demo.com"
                required
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
                placeholder="demo"
                required
              />
            </div>
            <button
              to="profile/"
              className="login-btn btn"
              onClick={this.props.login}
            >
              Login
            </button>
          </form>
        </section>
        <section class="modal-overlay" id="modal-overlay" />
      </div>
    );
  }
}

export default withRouter(Login);
