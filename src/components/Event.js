import React, { Component } from "react";
import "./Event.css";
import Moment from "react-moment";
const { API_BASE_URL } = require("../config");

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      eventImg: "",
      eventName: "",
      eventDate: "",
      eventVenue: "",
      eventAddress: "",
      eventAddress2: "",
      eventCity: "",
      eventState: "",
      eventZip: "",
      eventCost: "",
      eventStart: "",
      eventEnd: "",
      eventDetails: ""
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${API_BASE_URL}/event/${id}`, {
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
        console.log({ errors: err });
      });
  }
  render() {
    let alt = `Picture of ${this.state.eventName}`;
    let location = `${this.state.eventCity}, ${this.state.eventState}`;
    return (
      <div className="event-container">
        <h3 className="event-titles">{this.state.eventName}</h3>
        <section className="artist-event">
          <section className="event-img-container">
            <img className="event-img" src={this.state.eventImg} alt={alt} />
          </section>
          <section className="event-details">
            <p>
              <span className="categories">Venue:</span>
            </p>
            <p>{this.state.eventVenue}</p>
            <p>
              <span className="categories">Date:</span>
            </p>
            <Moment className="event-link-items" format="ddd, MMM DD YYYY">
              <p>{this.state.eventDate}</p>
            </Moment>

            <p>
              <span className="categories">Address:</span>
            </p>
            <p>{this.state.eventAddress}</p>
            <p>{this.state.eventAddress2}</p>
            <p>
              <span className="categories">City, State:</span>
            </p>
            <p>{location}</p>
            <p>
              <span className="categories">From:</span>
            </p>
            <p>
              {this.state.eventStart}-{this.state.eventEnd}
            </p>
          </section>
        </section>

        <section className="event-about">
          <h3>
            <span className="categories">Additonal Details:</span>
          </h3>
          <p className="event-about-content">{this.state.eventDetails}</p>
        </section>
      </div>
    );
  }
}

export default Event;
