import "./TrackList.css";
import React from "react";
import { Track } from '../Track/Track';

const hardCodedTracks = {
  trackOne: {
    title: "Lamentation for a lost life",
    artist: "Max Richter",
    album: "Voyager: Essential Max Richter",
    isRemoval: false
  },
  trackTwo: {
    title: "Comptine d'un autre ete, l'apres midi",
    artist: "Yann Tierson",
    album: "L'histoire fabuloux d'Amelie Poulin",
    isRemoval: false
  },
  trackThree: {
    title: "Moonlight sonata",
    artist: "Ludwig van Beethoven",
    album: "Beethoven Symphonies",
    isRemoval: false
}
};

export const TrackList = () => {
  return (
    <div className="TrackList">
      <Track data={hardCodedTracks.trackOne} />
      <Track data={hardCodedTracks.trackTwo} />
      <Track data={hardCodedTracks.trackThree} />
    </div>
  );
}
