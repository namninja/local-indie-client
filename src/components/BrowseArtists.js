import React, { Component } from "react";
import "./BrowseArtists.css";
import SearchResults from "./SearchResults";

class BrowseArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // function searchState(events) {
    //   let select = "";
    //   for (let i = 0; i < events.length; i++) {
    //     select +=
    //       '<option class="state-option" val=' +
    //       events[i].state +
    //       ">" +
    //       events[i].state +
    //       "</option>";
    //   }
    //   return select;
    // }
    const results = ``;
    return (
      <section className="find-artists">
        <div className="find-artists-title">
          <h1>Browse artists</h1>
        </div>
        <form role="search" className="artists-search-form">
          <section id="artists-search-state" className="artists-form-group">
            <label className="search-artists-label" for="search-states">
              Select a State
            </label>
            <div className="search-form-items">
              <select name="search-states" className="artists-form-control">
                <option class="state-option" val="CA">
                  CA
                </option>
              </select>
              <button id="selected-state" className="search-btn">
                Submit State
              </button>
            </div>
          </section>
          <section id="artists-search-city" className="artists-form-group">
            <label className="search-artists-label" for="search-cities">
              Select a City
            </label>
            <div className="search-form-items">
              <select name="search-cities" className="artists-form-control">
                <option class="city-option" val="Los Angeles">
                  Los Angeles
                </option>
                <option class="city-option" val="San Diego">
                  San Diego
                </option>
              </select>
              <button id="selected-city" className="search-btn">
                Submit City
              </button>
            </div>
          </section>
        </form>
        <SearchResults />
      </section>
    );
  }
}

export default BrowseArtists;
