import "./SearchResults.css";
import React from "react";
import { TrackList } from "./TrackList/TrackList";

export const SearchResults = () => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList />
    </div>
  );
};
