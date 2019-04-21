import React, { Component } from "react";
import "./SearchResults.css";
import EventLink from "../components/EventLink";
const { API_BASE_URL } = require("../config");

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    fetch(`${API_BASE_URL}/events/${this.props.profileID}`, {
      method: "GET"
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(events => {
        this.setState({ events: events });
      })
      .catch(err => {
        this.setState({ errors: err });
      });
  }

  render() {
    const events = this.state.events.map((event, index) => (
      <EventLink key={index} index={index} {...event} />
    ));
    return (
      <div className="search-results">
        <h3 className="results-title">Upcoming Events</h3>
        <section className="search-result-items">{events}</section>
      </div>
    );
  }
}

export default SearchResults;
