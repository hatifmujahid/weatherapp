import { gql } from "@apollo/client";

const CITY_QUERY = gql`
  query ($city: String!){
    getLocation(city: $city){
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
export default CITY_QUERY;
