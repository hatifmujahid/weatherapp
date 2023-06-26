import { gql } from "@apollo/client";

const LOCATION_QUERY = gql`
  query ($lat:Float!, $lon:Float!){
    getWeather(lat:$lat, lon:$lon){
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
export default LOCATION_QUERY;
