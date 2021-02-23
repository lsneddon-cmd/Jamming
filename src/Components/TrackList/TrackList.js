import "./TrackList.css";
import React from "react";
import { Track } from '../Track/Track';

const hardCodedTracks = [
  {
    title: "Lamentation for a lost life",
    artist: "Max Richter",
    album: "Voyager: Essential Max Richter",
    isRemoval: false
  },
  {
    title: "Comptine d'un autre ete, l'apres midi",
    artist: "Yann Tierson",
    album: "L'histoire fabuloux d'Amelie Poulin",
    isRemoval: false
  },
  {
    title: "Moonlight sonata",
    artist: "Ludwig van Beethoven",
    album: "Beethoven Symphonies",
    isRemoval: false
  }
];

const mapTracksToTrack = (track) => {
  return (
    <Track 
      title={track.title} 
      artist={track.artist}
      album={track.album}
      key={track.id}
    />
  )
}

export const TrackList = (props) => {
  return (
    <div className="TrackList">
      {hardCodedTracks.map(mapTracksToTrack)}
      <Track stuff={props.data} />
    </div>
  );
}
