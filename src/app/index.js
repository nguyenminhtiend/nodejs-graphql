const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const loadSchema = require('./loadSchema');

const formatError = require('./formatError');
const context = require('./context');

const app = express();
const schema = loadSchema();

const server = new ApolloServer({
  schema,
  formatError,
  context,
  debug: false,
});

server.applyMiddleware({ app });

module.exports = app;
