import './App.css';
import React from 'react';
import WeatherData from './components/currentLocation';
import FullPageSearchBox from './components/search';
import Buttons from './components/buttons';
import {BrowserRouter, Route, Routes} from 'react-router-dom';





function App() {
  const [lat, setLat] = React.useState(0);
  const [lon, setLon] = React.useState(0);  
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    })
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Buttons/>}/>
        <Route path="/weather" element={<WeatherData lat={lat} lon={lon}/>}/>
        <Route path="/search" element={<FullPageSearchBox/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
