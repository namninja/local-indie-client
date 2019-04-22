import React, { Component } from "react";
import "./BrowseArtists.css";
import ArtistSearchResults from "./ArtistSearchResults";
const { API_BASE_URL } = require("../config");

class BrowseArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: [],
      cities: [],
      artists: []
    };
  }
  componentDidMount() {
    fetch(`${API_BASE_URL}/artists/states`, {
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
    fetch(`${API_BASE_URL}/artists/states/${e.target.value}`, {
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
    fetch(`${API_BASE_URL}/artists`, {
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
        this.setState({ artists: data });
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
    return (
      <section className="find-artists">
        <div className="find-artists-title">
          <h1>Browse artists</h1>
        </div>
        <form
          role="search"
          className="artists-search-form"
          onSubmit={this.onSubmit}
        >
          <section id="artists-search-state" className="artists-form-group">
            <label className="search-artists-label" for="search-states">
              Select a State
            </label>
            <div className="search-form-items">
              <select
                name="search-states"
                className="artists-form-control"
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
          <section id="artists-search-city" className="artists-form-group">
            <label className="search-artists-label" for="search-cities">
              Select a City
            </label>
            <div className="search-form-items">
              <select
                name="search-cities"
                className="artists-form-control state-select"
                type="submit"
                onChange={this.handleCityChange}
              >
                <option
                  id="selectedState"
                  className="state-option"
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
        <section className="artistSearchResults">
          <ArtistSearchResults artists={this.state.artists} />
        </section>
      </section>
    );
  }
}

export default BrowseArtists;
