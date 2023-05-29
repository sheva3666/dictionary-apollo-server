const { gql } = require("apollo-server");

const typeDefsUser = gql`
  type Query {
    auth(userEmail: String!): UserAuth
  }

  type Mutation {
    loginUser(email: String!, password: String!): UserAuth
    updateAuth(email: String!, auth: UserAuthInput!): UserAuth
  }

  type UserAuth {
    userEmail: String
    userAuth: Boolean
    language: String
    languageForLearn: String
  }

  input UserAuthInput {
    userEmail: String
    userAuth: Boolean
    language: String
    languageForLearn: String
  }
`;

module.exports = typeDefsUser;
