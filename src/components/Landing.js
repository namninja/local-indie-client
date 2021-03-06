import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import About from "./About";

const Landing = () => {
  return (
    <div>
      <div className="home">
        <div className="muzieknootjes ">
          <div className="noot-1">&#9835; &#9833;</div>
          <div className="noot-2">&#9833;</div>
          <div className="noot-3">&#9839; &#9834;</div>
          <div className="noot-4">&#9834;</div>
        </div>
        <div className="arrow bounce">
          <a href="#about" className="arrow-icon-link">
            <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
          </a>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Landing;
