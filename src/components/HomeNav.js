import React, { Component } from "react";
import "./HomeNav.css";
import { Link, Redirect } from "react-router-dom";

const HomeNav = props => {
  {
    return (
      <header role="banner" className="header">
        <Link to="/" className="logo">
          local indie
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span class="navicon" />
        </label>

        {props.loggedIn ? (
          <Link
            to="/"
            className="home-links btn"
            onClick={e => {
              e.preventDefault();
              props.logout();
            }}
          >
            Logout
          </Link>
        ) : (
          <nav className="menu">
            <Link to="/find-shows" className="home-links btn">
              Find a show
            </Link>
            <Link to="/browse-artists" className="home-links btn">
              Browse Artists
            </Link>
            <Link
              to="/login"
              className="home-links btn"
              onClick={props.showLoginModal}
            >
              Log In
            </Link>

            <Link
              to="/signup"
              className="home-links btn"
              onClick={props.showSignUpModal}
            >
              Sign Up
            </Link>
          </nav>
        )}
      </header>
    );
  }
};

export default HomeNav;
