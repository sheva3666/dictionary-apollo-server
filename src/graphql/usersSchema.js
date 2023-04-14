const { gql } = require("apollo-server");

const typeDefsUser = gql`
  type Query {
    user(user: String!, password: String!): User
  }

  # type Mutation {
  #   addFavourite(movie: MovieInput!): Movie!
  #   deleteFavourite(id: ID!): favouriteMovie!
  # }

  type User {
    id: String
    name: String
    email: String
    password: String
    language: String
    languageForLearn: String
  }
`;

module.exports = typeDefsUser;
