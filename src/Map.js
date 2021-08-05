import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationFire from "./components/LocationFire";
import InforBox from "./components/InforBox";
import LocationVolcano from "./components/LocationVolcano";
import LocationStorm from "./components/LocationStorm";
//create a google map using google api
//resource I use:
//https://github.com/google-map-react/google-map-react
//nasa API and google map API
export default function SimpleMap() {
  const [events, setEvents] = useState([]);
  const [infor, setInfor] = useState();

  useEffect(() => {
    //fetch data from nasa API
    const url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?status=open";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.events);
        // console.log(data.events);
        // console.log(data.events[0].categories[0].id)
      });
  }, []);

  //map event
  const eventList = events.map((event) => {
    if (event.categories[0].id === 8) {
      return (
        <LocationFire
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => {
            setInfor({
              id: event.id,
              title: event.title,
              date: event.geometries[0].date,
              lng: event.geometries[0].coordinates[0],
              lat: event.geometries[0].coordinates[1],
              sources: event.sources[0].url
            });
          }}
        />
      );
    } else if (event.categories[0].id === 12 && event.id !== "EONET_354") {
      return (
        <LocationVolcano
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => {
            setInfor({
              id: event.id,
              title: event.title,
              date: event.geometries[0].date,
              lng: event.geometries[0].coordinates[0],
              lat: event.geometries[0].coordinates[1],
              sources: event.sources[0].url
            });
          }}
        />
      );
    } else if (event.categories[0].id === 10) {
      return event.geometries.map((location) => {
        return (
          <LocationStorm
            lat={location.coordinates[1]}
            lng={location.coordinates[0]}
            onClick={() => {
              setInfor({
                id: event.id,
                title: event.title,
                date: location.date,
                lng: location.coordinates[0],
                lat: location.coordinates[1],
                sources: event.sources[0].url
              });
            }}
          />
        );
      });
    }
  });

  //create map
  const defaultProps = {
    center: {
      lat: 39.768402,
      lng: -98.134903
    },
    zoom: 4
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCoO0x8c_-fAVw23HqNpfDwJLUkKoo0QzQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {eventList}
      </GoogleMapReact>
      {infor && <InforBox infor={infor} setInfor={setInfor} />}
    </div>
  );
}
