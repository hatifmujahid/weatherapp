// import modules
require("dotenv").config();
const { ApolloServer } = require('@apollo/server');
const {startStandaloneServer} = require('@apollo/server/standalone');

// import schema
const typeDefs = require('./schema');

// import resolvers
const resolvers = require('./resolvers');

// create server
async function startApolloServer() {
    const server = new ApolloServer({typeDefs,resolvers});
    const port = process.env.PORT || 4000;
    const {url} = await startStandaloneServer(server, {listen:{port}});
    console.log(`Server ready at ${url}`);
}
startApolloServer();


