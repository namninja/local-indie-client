import React from "react";
import "./HomeNav.css";
import { Link } from "react-router-dom";

function HomeNav(props) {
  return (
    <header role="banner" className="header">
      <div className="search">
        <Link to="/find-shows" className="home-links btn">
          Find a show
        </Link>
        <Link to="/browse-artists" className="home-links btn">
          Browse Artists
        </Link>
      </div>
      <div className="auth">
        <Link to="/login" className="home-links btn">
          Log In
        </Link>
        <Link to="/signup" className="home-links btn">
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default HomeNav;
