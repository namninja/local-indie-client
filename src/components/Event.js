import React, { Component } from "react";
import "./Event.css";

class Event extends Component {
  render() {
    return (
      <div className="event-container">
        <h3 className="event-titles">Insert Event Name</h3>
        <section className="artist-event">
          <section className="event-img-container">
            <img
              className="event-img"
              src={require("../images/default-avatar.png")}
            />
          </section>
          <section className="event-details">
            <p>
              <span className="categories">Venue:</span>
            </p>
            <p>Some Bar or something</p>
            <p>
              <span className="categories">Date:</span>
            </p>
            <p>4/15/19</p>

            <p>
              <span className="categories">Address:</span>
            </p>
            <p>Address line 1</p>
            <p>Address line 2</p>
            <p>
              <span className="categories">City, State:</span>
            </p>
            <p>Brooklyn, NY</p>
            <p>
              <span className="categories">From:</span>
            </p>
            <p>8pm - 2am</p>
          </section>
        </section>

        <section className="event-about">
          <h3>
            <span className="categories">Additonal Details:</span>
          </h3>
          <p className="about-content">Details</p>
        </section>
      </div>
    );
  }
}

export default Event;
