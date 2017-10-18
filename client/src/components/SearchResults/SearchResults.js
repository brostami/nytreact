import React from "react";

const SearchResults = props =>
  <ul className="list-group search-results">
    {props.results.slice(0, 5).map(result =>
      <li key={result} className="list-group-item">
        <h3>{result}</h3>
      </li>
    )}
  </ul>;

export default SearchResults;
