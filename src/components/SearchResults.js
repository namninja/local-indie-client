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
    console.log(this.state.events);
    fetch(`${API_BASE_URL}/artist/events/${this.props.userID}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(events => {
        this.setState({ events: events });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let events = [];
    if (this.state.events.length > 0) {
      events = this.state.events.map((event, index) => (
        <EventLink key={index} index={index} {...event} />
      ));
    }
    return (
      <div className="search-results">
        <h3 className="results-title">Upcoming Events</h3>
        <section className="search-result-items">{events}</section>
      </div>
    );
  }
}

export default SearchResults;
