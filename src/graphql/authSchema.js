const { gql } = require("apollo-server");

const typeDefsUser = gql`
  type Query {
    auth(userEmail: String!): UserAuth
  }

  type UserAuth {
    userEmail: String
    userAuth: Boolean
  }
`;

module.exports = typeDefsUser;
