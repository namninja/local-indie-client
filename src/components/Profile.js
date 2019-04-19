import React, { Component } from "react";
import "./Profile.css";
import SearchResults from "./SearchResults";
class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <h3 className="profile-titles">Artist Profile</h3>
        <section className="artist-profile">
          <section className="profile-img">
            <img
              className="artist-img"
              src={require("../images/default-avatar.png")}
            />
          </section>
          <section className="profile-details">
            <p>
              <span className="categories">Name:</span>
            </p>
            <p>JQuery Eye for the Straight Guy</p>
            <p>
              <span className="categories">Genre:</span>
            </p>
            <p>Rap</p>

            <p>
              <span className="categories">Website:</span>
            </p>
            <p>Soundcloud or something</p>
            <p>
              <span className="categories">From:</span>
            </p>
            <p>Brooklyn, NY</p>
          </section>
        </section>

        <section className="profile-about">
          <h3>
            <span className="categories">About:</span>
          </h3>
          <p className="about-content">
            We are gay programmers that rap about API calls muthafucka.
          </p>
        </section>
        <section className="profile-audio">
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/568327059&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
        </section>
        <section className="profile-events">
          <SearchResults />
        </section>
      </div>
    );
  }
}

export default Profile;
