import React from "react";

export default function LocationStorm(props) {
  return (
    <div>
      <div className="marker" onClick={() => props.onClick()}>
        <img
          src="https://img.icons8.com/office/16/000000/storm.png"
          alt="storm"
        />
      </div>
    </div>
  );
}
