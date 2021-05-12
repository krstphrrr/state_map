import React, {useState, useRef} from "react";
// import L from 'leaflet'
import { MapContainer, TileLayer, useMapEvents, FeatureGroup} from "react-leaflet";
import {Box,Flex,Spinner, Tooltip }from "@chakra-ui/react"
import "./Map.css";

const bounds = [
  [51.0156176,-69.393794],
  [27.213765,-131.539653]
]

// function testFunction() {
  
// }

 function MapComponent() {
  // intento de mapdraw control 
  const editRef = useRef()
  const [drawing, setDrawing] = useState(false)

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
      center={[41.14269416, -108.721814]}
      className="map-styles"
      zoomControl={false}
      >
      
      <TileLayer 
        zoom={5}
        url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
        maxZoom={15}
        subdomains={['mt0','mt1','mt2','mt3']}>

        </TileLayer>

        {/* <AddMarkerToClick></AddMarkerToClick> */}
        <FeatureGroup >
     
          {/* <EditControl
            // ref={editRef}
            position='topright'
            onClicked={handleClick}
            //here you can specify your shape options and which handler you want to enable
            draw={{
                rectangle: false,
                circle: false,
                polyline: false,
                circlemarker: false,
                marker: false,
                polygon: {
                    allowIntersection: false,
                    shapeOptions: {
                        color: "#ff0000"
                    },
                }
            }}
                    /> */}
        </FeatureGroup>
    </MapContainer>
    </Box>
    
  );
}
export default MapComponent