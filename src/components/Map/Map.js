import React, {useState, useRef, useEffect} from "react";
import * as L from 'leaflet'
import { MapContainer, TileLayer, useMapEvents,WMSTileLayer, FeatureGroup,LayerGroup, LayersControl,GeoJSON} from "react-leaflet";
import {Box,Flex,Spinner, Tooltip }from "@chakra-ui/react"
import "./Map.css";
import axios from "axios";
import hash from 'object-hash'

// -106.864014,32.551444,-106.188354,32.994843
const bounds = [
  [32.551444,-106.864014],
  [32.994843,-106.188354]
]

const testLayer = L.tileLayer.wms('https://landscapedatacommons.org/geoserver/wms?tiled=true');
const wmsURL = 'https://landscapedatacommons.org/geoserver/statemap/wms'
const tileURL = 'https://landscapedatacommons.org/geoserver/statemap/wfs'
const wmsOptions = {
  layers: 'statemap:jerstatemapsimple',
  format: 'image/png',
  // transparent: true,
  tiled: true,
  version: '2.0.0',
  // maxZoom: 20
}

 
const geoOptions = {
  outputFormat: 'application/json',
  count:6155,
  request: 'GetFeature',
  service: 'WFS',
  typeName: 'statemap:jerstatemapsimple',
  version: '2.0.0',
  srsName:'EPSG:4326'
};
// function testFunction() {
  
// }

 function MapComponent() {
  // intento de mapdraw control 
  const editRef = useRef()
  const [data, setData] = useState(null)
  const [geoHash, setgeoHash] = useState(null)

  useEffect(()=>{
    let gHash = setgeoHash(hash("bleh"))
    // let gHash = (gh) =>{console.log()}
    axios.get(tileURL,{params:geoOptions})
    .then(({data})=>{
      setData(data)
      console.log(data)
      // console.log(geoHash)
    })
    .catch(error=>console.log(error))
  },[])

  let style =  {
      // fillColor: '',
      weight: 1,
      opacity: 1,
      color: 'red',
      fillOpacity: .5
    };

  
  const handleClick = () => {
        
    //Edit this method to perform other actions
    console.log("oye")

    // if (!drawing) {
    //     editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.enable()
        
    // } else {
      

    //     editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.completeShape()
    //     editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.disable()
    // }
    // setDrawing(!drawing)
}
  return (
    <Box
      pos="fixed"
      top="0"
      right="0"
      bottom="0"
      left="0"
      w="100%"
      h="100%">
    <MapContainer 
      bounds={bounds} 
      // style={{height:"80vh"}}
      zoom={10}
      maxZoom={15}
      center={[32.66368, -106.68771]}
      className="map-styles"
      zoomControl={false}
      >
      
      {/* <TileLayer 
        zoom={5}
        url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
        maxZoom={15}
        subdomains={['mt0','mt1','mt2','mt3']}>

        </TileLayer> */}

        {/* <AddMarkerToClick></AddMarkerToClick> */}
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer checked name="google">
            <TileLayer
              subdomains={['mt0','mt1','mt2','mt3']}
              url="https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
            />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay  name="WFS test ">
          <LayerGroup>
            {/* <WMSTileLayer url={wmsURL} params={wmsOptions}>

            </WMSTileLayer> */}

            <GeoJSON key={geoHash} data={data} style={style}>

            </GeoJSON>
            
          </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="WMS test ">
          <LayerGroup>
            <WMSTileLayer url={wmsURL} params={wmsOptions}>

            </WMSTileLayer>

            {/* <GeoJSON key={geoHash} data={data} style={style}>

            </GeoJSON> */}
            
          </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
    </MapContainer>
    </Box>
    
  );
}
export default MapComponent