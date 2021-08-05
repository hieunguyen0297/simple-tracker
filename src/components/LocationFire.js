import React from "react";

export default function LocationFire(props) {
  return (
    /*
      give each icon a click, when it is clicked
      display the event information on the screen
    */
    <div>
      <div className="marker" onClick={() => props.onClick()}>
        <div className="smoke">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src="https://img.icons8.com/emoji/48/000000/fire.png" alt="fire" />
      </div>
    </div>
  );
}
