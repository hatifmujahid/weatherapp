import './App.css';
import React from 'react';
import WeatherData from './components/data';

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
      <WeatherData lat={lat} lon={lon}/>
    </div>
  );
}

export default App;
