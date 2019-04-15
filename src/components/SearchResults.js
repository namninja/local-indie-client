import React from "react";
import "./SearchResults.css";
const SearchResults = props => {
  return (
    <div className="search-results">
      <h2 className="results-title">Results</h2>
      <section className="search-result-items">
        <a className="search-result-links" href="#">
          4/17/17 - Album release Party - Venue: Board Bar - Cost: $5 - Start:
          8pm
        </a>
        <a className="search-result-links" href="#">
          4/17/17 - Album release Party - Venue: Board Bar - Cost: $5 - Start:
          8pm
        </a>
      </section>
    </div>
  );
};

export default SearchResults;
