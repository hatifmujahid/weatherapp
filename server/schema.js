const {gql} = require('graphql-tag');

const typeDefs = gql`
    type Query{
        getWeather(lat:Float!,lon:Float!): Weather
    }
    type Weather{
        weather: [WeatherInfo!]
        main: Main!
        wind: Wind!
        name: String!
        sys: Sys!

    }
    type Coord{
        lon: Float!
        lat: Float!
    }
    type WeatherInfo{
        id: Int
        main: String
        description: String
        icon: String
    }
    type Main{
        temp: Float
        feels_like: Float
        temp_min: Float
        temp_max: Float
        humidity: Float
    }
    type Wind{
        speed: Float
        deg: Float
    }
    type Sys{
        country: String
    }

`;
module.exports = typeDefs;
