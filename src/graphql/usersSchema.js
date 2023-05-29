const { gql } = require("apollo-server");

const typeDefsUser = gql`
  type Query {
    user(user: String!, password: String!): UserAuth
  }

  type Mutation {
    createUser(user: UserInput!): String!
    updateUser(user: UpdateUserInput!): User
  }

  type User {
    id: String!
    email: String
    password: String
    language: String
    languageForLearn: String
  }

  type UserAuth {
    userEmail: String
    userAuth: Boolean
    language: String
    languageForLearn: String
  }

  input UpdateUserInput {
    email: String
    password: String
    language: String
    languageForLearn: String
  }

  input UserInput {
    email: String
    password: String
    language: String
    languageForLearn: String
  }
`;

module.exports = typeDefsUser;
