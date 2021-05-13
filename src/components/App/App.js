import react, {useEffect} from 'react'
import MapC from '../Map/Map'
import "./App.css";
import React from 'react';
import { Box,Flex } from "@chakra-ui/react"
import Sidebar from '../sidebar/sidebar'

// https://landscapedatacommons.org/geoserver/wms?tiled=true

function App({Component}) {
   
    // nothing = run at initial render + after every rerender
    // empty array = initial render 
    // array w data = initial render + after data has changed
    return (
      <Flex flexDir="column" minH={0} h="100%" w="100%" overflow="hidden">
        {/* sidebar component */}
        <Sidebar></Sidebar>
        {/* map component */}
        <MapC></MapC>
      </Flex>
        // <React.Fragment>
        //   <div className="ui equal width center aligned padded grid">
        //     <div className="row">
        //       <div className="c1 column">
        //       </div>
        //       <div id="mapid" className="c2 column">
        //         <MapC>
        //           oo
        //         </MapC>
        //       </div>
        //     </div>
        //   </div>
        // </React.Fragment>

    );
}

export default App;
