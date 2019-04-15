import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
          <form className="signup-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                name="email"
                placeholder="my@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="*****"
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="*****"
                required
              />
            </div>
            <Link
              to="/profile"
              className="signup-btn btn"
              onClick={this.props.login}
            >
              Sign Up
            </Link>
          </form>
        </section>
        <section class="modal-overlay" id="modal-overlay" />
      </div>
    );
  }
}

export default Signup;
