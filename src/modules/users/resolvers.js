const { ValidationError } = require('apollo-server-express');
const { combineResolvers, skip } = require('graphql-resolvers');
const { AppError } = require('../../utils');

const users = [
  {
    id: 1,
    name: 'user 1',
    email: 'user1@gmail.com',
  },
  {
    id: 2,
    name: 'user 2',
    email: 'user2@gmail.com',
  },
];

const getUsers = async () => users;

const validateUser = async (parent, { input }) => {
  if (true) {
    throw new ValidationError('One ore more input are invalid!');
  }
  return skip;
};

const createUser = async (_, {
  input,
}) => {
  const user = { ...input, id: 111 };
  users.push(user);
  return user;
};

module.exports = {
  Query: {
    users: getUsers,
  },
  Mutation: {
    createUser: combineResolvers(validateUser, createUser),
  },
};
