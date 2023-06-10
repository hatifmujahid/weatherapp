require("dotenv").config();
fetch = require('node-fetch');

const resolvers = {
    Query: {
        getWeather: async(_,{lat,lon}) =>{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`);
            return response.json();
        },    
    }
};
module.exports = resolvers;