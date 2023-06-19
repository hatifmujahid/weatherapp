// import modules
require("dotenv").config();
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const  {ApolloServerPluginDrainHttpServer} = require('@apollo/server/plugin/drainHttpServer');
const http =require('http');
const cors =require('cors');
const { json } =require('body-parser');
const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();
app.use(helmet());
app.use(express.json());
const httpServer = http.createServer(app);

async function myfunc(){

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    });
    await server.start();
    app.use(
        '/', 
        cors(),
        json(), 
        expressMiddleware(server, {
            context: async  ({req}) => {
                token = req.headers.authorization || '';
            }
        }));
        
    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/`);
}
myfunc();

