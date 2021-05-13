import React from "react"
import * as L from 'leaflet'

const testLayer = L.tileLayer.wms('https://landscapedatacommons.org/geoserver/wms?tiled=true', {
  layers: 'ldc2:tl_2017_us_county_wgs84',
  format: 'image/png',
  transparent: true,
  // tiled: true,
  version: '1.3.0',
  maxZoom: 20
});

const layerButton = (props) => {

  const handleClick=()=>{
    console.log(props.localito)
  }
  
  return(
    <div>
      <a onClick={()=>handleClick()}>layer placeholder 1</a>
    </div>
  )
}

export default layerButton