const { gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const {
  constraintDirective,
  constraintDirectiveTypeDefs,
} = require('graphql-constraint-directive');
const modules = require('../modules');

const root = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

module.exports = () => {
  const typeDefs = [root, constraintDirectiveTypeDefs];
  const resolvers = [];

  modules.forEach((module) => {
    typeDefs.push(module.typeDefs);
    resolvers.push(module.resolvers);
  });

  return makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaTransforms: [constraintDirective()],
  });
};
