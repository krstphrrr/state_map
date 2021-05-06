import React, {useState, useRef} from "react";
import {Map} from "@esri/react-arcgis"


const MapWrapper = () => {

  return (
  <Map
  viewProperties={
    {
      constraints:{ snapToZoom:false},
      center: [-106.77,32.31],
      zoom:10
    }
  }>

  </Map>
)
}

export default MapWrapper