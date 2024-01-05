const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String!, email: String!): User
    deleteUser(id: ID!): User
  }
`;

module.exports = typeDefs;