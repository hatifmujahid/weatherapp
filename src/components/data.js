import React from "react";
import { useQuery } from "@apollo/client";
import CircularProgress from '@mui/joy/CircularProgress';
import { Card, CardContent, Typography } from "@mui/material";
import LOCATION_QUERY from "../queries/locationQuery";
import "./data.css";
import rain from "../images/rain.jpg"
import clear from "../images/sunny.jpg"
import haze from "../images/haze.jpg"
import cloudy from "../images/cloudy.jpg"

const WeatherData = (props) => {
  const { loading, error, data } = useQuery(LOCATION_QUERY, {
    variables: { lat: props.lat, lon: props.lon },
  });
  if (loading) return <CircularProgress size="lg" />;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  const weather = data.getWeather;
  const weatherType = weather.weather[0].main;

  if (weatherType === "Rain") {
    document.body.style.backgroundImage = `url(${rain})`;
    document.body.style.backgroundSize = "cover";
  } else if (weatherType === "Haze") {
    document.body.style.backgroundImage = `url(${haze})`;
    document.body.style.backgroundSize = "cover";

  }
  else if (weatherType === "Clear") {
    document.body.style.backgroundImage = `url(${clear})`;
    document.body.style.backgroundSize = "cover";
  }
  else if (weatherType === "Clouds") {
    document.body.style.backgroundImage = `url(${cloudy})`;
    document.body.style.backgroundSize = "cover";
  }
  return (
    <div className="weather-data">
      
      <Card className="weather-card">
        <CardContent>
        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" />
          <Typography variant="h5" component="div">
            {weather.name}
          </Typography>
          <Typography variant="body2">
            {weather.weather[0].main}
          </Typography>
          <Typography variant="body2">
            Temperature: {weather.main.temp}°C
          </Typography>
          <Typography variant="body2">
            Feels Like: {weather.main.feels_like}°C
          </Typography>
          <Typography variant="body2">
            Min Temperature: {weather.main.temp_min}°C
          </Typography>
          <Typography variant="body2">
            Max Temperature: {weather.main.temp_max}°C
          </Typography>
          <Typography variant="body2">
            Humidity: {weather.main.humidity}%
          </Typography>
          <Typography variant="body2">
            Wind Speed: {weather.wind.speed} mph
          </Typography>
          <Typography variant="body2">
            Wind Direction: {weather.wind.deg}°
          </Typography>
          <Typography variant="body2">
            Country: {weather.sys.country}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherData;