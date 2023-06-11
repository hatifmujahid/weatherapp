import './App.css';
import React from 'react';
import {Stack} from '@mui/material';


function App() {
  const [lat, setLat] = React.useState(0);
  const [lon, setLon] = React.useState(0);  
  console.log(lat,lon);
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    })
  }
  console.log(lat,lon);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
