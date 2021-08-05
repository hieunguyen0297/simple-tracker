import React from "react";

export default function LocationVolcano(props) {
  return (
    <div>
      <div className="marker" onClick={() => props.onClick()}>
        <div className="smoke">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img
          src="https://img.icons8.com/emoji/48/000000/volcano-emoji.png"
          alt="volcano"
        />
      </div>
    </div>
  );
}
