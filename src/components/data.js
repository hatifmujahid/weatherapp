import React from "react";
import { useQuery, gql } from "@apollo/client";
import CircularProgress from '@mui/joy/CircularProgress';
import { Card, CardContent, Typography } from "@mui/material";
import './data.css';

const WEATHER_QUERY = gql`
  query GetWeather($lat: Float!, $lon: Float!) {
    getWeather(lat: $lat, lon: $lon) {
      name
      weather {
        id
        main
        description
        icon
      }
      main {
        temp
        feels_like
        temp_min
        temp_max
        humidity
      }
      wind {
        speed
        deg
      }
      sys {
        country
      }
    }
  }
`;

const WeatherData = (props) => {
  const { loading, error, data } = useQuery(WEATHER_QUERY, {
    variables: { lat: props.lat, lon: props.lon },
  });

  if (loading) return <CircularProgress size="lg" />;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  const weather = data.getWeather;

  return (
    <Card className={"weather-card"}>
      <CardContent>
        <Typography variant="h5" component="div">
          {weather.name}
        </Typography>
        <Typography variant="body2">
          Temperature: {weather.main.temp}°F
        </Typography>
        <Typography variant="body2">
          Feels Like: {weather.main.feels_like}°F
        </Typography>
        <Typography variant="body2">
          Min Temperature: {weather.main.temp_min}°F
        </Typography>
        <Typography variant="body2">
          Max Temperature: {weather.main.temp_max}°F
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
  );
};

export default WeatherData;
