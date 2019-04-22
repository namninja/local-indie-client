import React, { Component } from "react";
import "./ArtistSearchResults.css";
import ArtistLink from "../components/ArtistLink";

class ArtistSearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const artists = this.props.artists.map((artist, index) => (
      <ArtistLink key={index} index={index} {...artist} />
    ));
    return (
      <div className="artist-results">
        <h3 className="artist-results-title">Artists</h3>
        <section className="artist-result-items">{artists}</section>
      </div>
    );
  }
}

export default ArtistSearchResults;
