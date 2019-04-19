import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

class Signup extends Component {
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
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
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
                class="form-control"
                name="profileName"
                placeholder="My Band"
                required
                onChange={this.onChange}
                value={this.state.profileName}
                error={errors.profileName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                class="form-control"
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
                class="form-control"
                name="city"
                placeholder="New York"
                required
                onChange={this.onChange}
                value={this.state.city}
                error={errors.city}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                maxlength="2"
                id="state"
                type="text"
                class="form-control"
                name="state"
                placeholder="CA"
                required
                onChange={this.onChange}
                value={this.state.state}
                error={errors.state}
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
        <section class="modal-overlay" id="modal-overlay" />
      </div>
    );
  }
}

export default Signup;
