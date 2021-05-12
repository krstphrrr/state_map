import React, {useState, useRef} from "react";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

// import "https://js.arcgis.com/4.19/@arcgis/core/assets/esri/themes/dark/main.css";

const map = new Map({
  basemap: "arcgis-topographic" // Basemap layer service
});

const view = new MapView({
  map: map,
  center: [-118.805, 34.027], // Longitude, latitude
  zoom: 13, // Zoom level
  container: "viewDiv" // Div element
});

const MapWrapper = (props) => {
  
  return (
  <div id="viewDiv">

  </div>
)
}

export default MapWrapper