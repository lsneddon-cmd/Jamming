import "./SearchResults.css";
import React from "react";
import { TrackList } from "../TrackList/TrackList";

export const SearchResults = (props) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={props.searchResults} data={props.data} />
    </div>
  );
};
