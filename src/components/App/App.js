import react, {useEffect, useRefs} from 'react'
import MapC from '../Map/Map'
import "./App.css";
import React from 'react';

// https://landscapedatacommons.org/geoserver/wms?tiled=true

function App() {
   
    // nothing = run at initial render + after every rerender
    // empty array = initial render 
    // array w data = initial render + after data has changed
    return (
      <React.Fragment>
      <div className="ui equal width center aligned padded grid">
        <div className="row">
          <div className="c1 column">
          </div>
          <div id="mapid" className="c2 column">
            <MapC>
              oo
            </MapC>
          </div>
        </div>
      </div>
        
      </React.Fragment>
    );
}

export default App;
