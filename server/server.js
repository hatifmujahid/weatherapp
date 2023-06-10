// import modules
require("dotenv").config();
const { ApolloServer, gql } = require('@apollo/server');
const {startStandaloneServer} = require('@apollo/server/standalone');

// import schema
const typeDefs = require('./schema');

// import resolvers
const resolvers = require('./resolvers');

// create server
async function startApolloServer() {
    const server = new ApolloServer({typeDefs,resolvers});
    const {url} = await startStandaloneServer(server);
    console.log(`Server ready at ${url}`);
}
startApolloServer();


