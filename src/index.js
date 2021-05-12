import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppComponent from './components/App/App';
import { ChakraProvider } from "@chakra-ui/react"
// import '@arcgis/core/assets/esri/themes/light/main.css';





ReactDOM.render(
    <ChakraProvider>  
      <AppComponent />
    </ChakraProvider>,
  document.getElementById('root')
);


