import React, { Component } from "react";
import "./FindEvent.css";
import SearchResults from "./SearchResults";

class FindEvent extends Component {
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
              <select name="search-states" className="event-form-control">
                <option class="state-option" val="CA">
                  CA
                </option>
              </select>
              <button id="selected-state" className="search-btn">
                Submit State
              </button>
            </div>
          </section>
          <section id="event-search-city" className="event-form-group">
            <label className="search-event-label" for="search-cities">
              Select a City
            </label>
            <div className="search-form-items">
              <select name="search-cities" className="event-form-control">
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
          <section id="event-search-date" className="event-form-group">
            <label className="search-event-label" for="search-cities">
              Select a Date
            </label>
            <div className="search-form-items">
              <select name="search-dates" className="event-form-control">
                <option class="date-option" val="4/17/19">
                  4/17/19
                </option>
                <option class="date-option" val="4/18/19">
                  4/18/19
                </option>
              </select>
              <button id="selected-date" className="search-btn">
                Get Results
              </button>
            </div>
          </section>
        </form>
        <SearchResults />
      </section>
    );
  }
}

export default FindEvent;
