const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    users: [User]
  }

  extend type Mutation {
    createUser(
      input: UserInput!
    ): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  input UserInput {
    name: String!
    email: String! @constraint(minLength: 5, format: "email")
  }
`;

module.exports = typeDefs;
