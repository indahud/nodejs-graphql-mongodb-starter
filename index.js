const express = require('express');
const connectMongo = require('./lib/mongoConnect');

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
require('dotenv').config()

connectMongo();

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen(process.env.PORT, () => {
    console.log('🔥🔥 app running ON http://localhost:1337/graphql');
  });
}

startApolloServer()
