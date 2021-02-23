import "./Track.css";
import React from "react";

// const renderAction = (props) => {
//   return props.isRemoval ? '-' : '+';
// }

export const Track = (props) => {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.title}</h3>
        <p> {props.artist} | {props.album}</p>
      </div>
      <button className="Track-action">
        {/* {renderAction(props.data)} */}
        +
        </button>
    </div>
  );
};
