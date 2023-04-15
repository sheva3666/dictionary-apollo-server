const { gql } = require("apollo-server");

const typeDefsUser = gql`
  type Query {
    user(user: String!, password: String!): User
  }

  type Mutation {
    createUser(user: UserInput!): String!
    updateUser(id: ID!, user: UpdateUserInput!): String
  }

  type User {
    id: String!
    name: String
    email: String
    password: String
    language: String
    languageForLearn: String
  }

  input UpdateUserInput {
    name: String
    email: String
    password: String
    language: String
    languageForLearn: String
  }

  input UserInput {
    name: String
    email: String
    password: String
    language: String
    languageForLearn: String
  }
`;

module.exports = typeDefsUser;
