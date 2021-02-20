import "./SearchBar.css";
import React from "react";

export const SearchBar = () => {
  return (
    <div class="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <button class="SearchButton">SEARCH</button>
    </div>
  );
};
