import React, { Component } from "react";
import "./FindEvent.css";
import EventLink from "../components/EventLink";
const { API_BASE_URL } = require("../config");

class FindEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: [],
      cities: [],
      events: []
    };
  }
  componentDidMount() {
    fetch(`${API_BASE_URL}/events/states`, {
      method: "GET"
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(data => {
        this.setState({ states: data });
      })

      .catch(err => {
        console.log(err);
      });
  }
  handleStateChange = e => {
    this.setState({ selectedState: e.target.value });
    fetch(`${API_BASE_URL}/events/states/${e.target.value}`, {
      method: "GET"
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(data => {
        this.setState({ cities: data });
      })

      .catch(err => {
        console.log(err);
      });
  };
  handleCityChange = e => {
    this.setState({ selectedCity: e.target.value });
    const searchData = {
      state: this.state.selectedState,
      city: e.target.value
    };
    fetch(`${API_BASE_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(searchData)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(data => {
        this.setState({ events: data });
      })

      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const states = this.state.states.sort().map((state, index) => (
      <option className="state-option" key={state} index={index} val={state}>
        {state}
      </option>
    ));
    const cities = this.state.cities.sort().map((city, index) => (
      <option className="city-option" key={city} index={index} val={city}>
        {city.toLowerCase()}
      </option>
    ));
    let events = [];
    if (this.state.events.length > 0) {
      events = this.state.events.map((event, index) => (
        <EventLink key={index} index={index} {...event} />
      ));
    }
    return (
      <section className="find-event">
        <div className="find-event-title">
          <h1>Find an Event</h1>
        </div>
        <form role="search" className="event-search-form">
          <section id="event-search-state" className="event-form-group">
            <label className="search-event-label" for="search-states">
              Select a State
            </label>
            <div className="search-form-items">
              <select
                name="search-states"
                className="event-form-control"
                onChange={this.handleStateChange}
              >
                <option
                  id="selectedState"
                  className="state-option"
                  key="chooseState"
                  val="chooseState"
                >
                  Select State
                </option>
                {states}
              </select>
            </div>
          </section>
          <section id="event-search-city" className="event-form-group">
            <label className="search-event-label" for="search-cities">
              Select a City
            </label>
            <div className="search-form-items">
              <select
                name="search-cities"
                className="event-form-control city-option"
                onChange={this.handleCityChange}
              >
                <option
                  id="selectedState"
                  className="city-option"
                  key="chooseState"
                  val="chooseState"
                >
                  Select City
                </option>
                {cities}
              </select>
            </div>
          </section>
        </form>
        <section className="eventSearchResults">
          <div className="search-results">
            <h3 className="results-title">Upcoming Events</h3>
            <section className="search-result-items">{events}</section>
          </div>
        </section>
      </section>
    );
  }
}

export default FindEvent;
