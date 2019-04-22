import React from "react";
import "./ArtistLink.css";
import { Link } from "react-router-dom";

const { API_BASE_URL } = require("../config");

export default function ArtistLink(props) {
  return (
    <div id={props.id} className="artist-link-container">
      <Link to={`/artist/${props.id}`} className="artist-link">
        <img
          className="artist-thumbnail"
          src={props.imgURL}
          alt={`photo of ${props.profileName}`}
        />
        <p className="artist-link-items">{props.profileName}</p>
        <p className="artist-link-items">{props.genre}</p>
        <p className="artist-link-items">
          {props.city}, {props.state}
        </p>
      </Link>
    </div>
  );
}
