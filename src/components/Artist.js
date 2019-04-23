import React, { Component } from "react";
import "./Artist.css";
import SearchResults from "./SearchResults";
const { API_BASE_URL } = require("../config");

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      user: "",
      imgURL: "",
      profileName: "",
      genre: "",
      website: "",
      city: "",
      state: "",
      about: "",
      soundCloud: ""
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${API_BASE_URL}/artist/${id}`, {
      method: "GET"
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(data => {
        this.setState(data);
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let alt = `Picture of ${this.state.profileName}`;
    let location = `${this.state.city}, ${this.state.state}`;
    let soundCloudExtract = this.state.soundCloud.split(/src="(.*)"/);
    let soundCloudSRC = soundCloudExtract[1];
    return (
      <div className="profile-container">
        <h3 className="profile-titles">Artist Profile</h3>
        <section className="artist-profile">
          <section className="profile-img">
            <img className="artist-img" src={this.state.imgURL} alt={alt} />
          </section>
          <section className="profile-details">
            <p>
              <span className="categories">Name:</span>
            </p>
            <p>{this.state.profileName}</p>
            <p>
              <span className="categories">Genre:</span>
            </p>
            <p>{this.state.genre}</p>

            <p>
              <span className="categories">Website:</span>
            </p>
            <p>
              <a href={this.state.website}>{this.state.website}</a>
            </p>
            <p>
              <span className="categories">From:</span>
            </p>
            <p>{location}</p>
          </section>
        </section>

        <section className="profile-about">
          <h3>
            <span className="categories">About:</span>
          </h3>
          <p className="about-content">{this.state.about}</p>
        </section>
        <section className="profile-audio">
          <h3>
            <span className="categories">Music Sample:</span>
          </h3>
          <iframe
            width="75%"
            height="150"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={soundCloudSRC}
          />
        </section>
        <section className="profile-events">
          <SearchResults userID={this.props.match.params.id} />
        </section>
      </div>
    );
  }
}

export default Artist;
