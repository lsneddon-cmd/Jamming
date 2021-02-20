import "./Playlist.css";
import React from "react";
import { TrackList } from "../TrackList/TrackList";

const defaultValue = 'New Playlist';

export const Playlist = () => {
  return (
    <div className="Playlist">
      <input value={defaultValue} />
      <TrackList />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};
