import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
          <form className="log-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                name="email"
                placeholder="demo@demo.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="demo"
                required
              />
            </div>
            <button className="login-btn btn" onClick={this.props.login}>
              Login
            </button>
          </form>
        </section>
        <section class="modal-overlay" id="modal-overlay" />
      </div>
    );
  }
}

export default Login;
