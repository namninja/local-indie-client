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
          <nav className="menu">
            <Link
              to={`/profile/${props.user.loggedInUser._id}`}
              className="home-links btn"
            >
              Profile
            </Link>
            <Link
              to={`/edit-profile/${props.user.loggedInUser._id}`}
              className="home-links btn"
            >
              Edit Profile
            </Link>
            <Link to="/post-event" className="home-links btn">
              Post Event
            </Link>
            <Link
              to="/"
              className="home-links btn"
              onClick={e => {
                e.preventDefault();
                props.user.logout();
              }}
            >
              Logout
            </Link>
          </nav>
        ) : (
          <nav className="menu">
            <Link
              to="/find-event"
              className="home-links btn"
              events={props.events}
            >
              Find an Event
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
