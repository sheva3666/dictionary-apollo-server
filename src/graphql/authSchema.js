const { gql } = require("apollo-server");

const typeDefsUser = gql`
  type Mutation {
    loginUser(email: String!, password: String!): Token
  }

  type Token {
    token: String!
  }
`;

module.exports = typeDefsUser;
