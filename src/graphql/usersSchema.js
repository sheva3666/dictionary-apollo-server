const { gql } = require("apollo-server");

const typeDefsUser = gql`
  type Query {
    user(user: String!): UserVisibleData
  }

  type Mutation {
    createUser(user: UserInput!): String!
    updateUser(user: UpdateUserInput!): User
    updatePassword(
      user: String!
      password: String!
      newPassword: String!
    ): Boolean
  }

  type User {
    id: String!
    email: String
    password: String
    language: String
    languageForLearn: String
  }

  type UserVisibleData {
    email: String
    language: String
    languageForLearn: String
  }

  input UpdateUserInput {
    email: String
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
