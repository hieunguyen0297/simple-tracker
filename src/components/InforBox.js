import React from "react";

export default function InforBox(props) {
  return (
    /*
      get the date, id of the event, event name and
      coordinate from the props to display it on 
      the screen once it is clicked
    */
    <div className="openInforBox">
      <div
        className="xBtn"
        onClick={() => {
          props.setInfor();
        }}
      >
        <img
          src="https://img.icons8.com/color/100/000000/cancel--v1.png"
          alt="x"
        />
      </div>
      <h2>Details</h2>
      <div>Event Date and Time: </div>
      <div>{props.infor.date}</div>
      <p></p>
      <div>Event ID: {props.infor.id}</div>
      <p></p>
      <div>Description: </div>
      <div>{props.infor.title}</div>
      <p></p>
      <div>Location Coordinates:</div>
      <div className="coordinate">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/latitude.png"
          alt="lat"
        />
        <div>{props.infor.lat}</div>
      </div>
      <div className="coordinate">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/longitude.png"
          alt="long"
        />
        <div>{props.infor.lng}</div>
      </div>
      <p></p>
      <div>
        More details can be viewed
        <a className="linka" href={props.infor.sources} target="_blank">
          here
        </a>
      </div>
    </div>
  );
}
