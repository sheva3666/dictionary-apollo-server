const { gql } = require("apollo-server");

const typeDefsWords = gql`
  type Query {
    words(user: String!, language: String!, translateLanguage: String!): [Word]
  }

  # type Mutation {
  #   addFavourite(movie: MovieInput!): Movie!
  #   deleteFavourite(id: ID!): favouriteMovie!
  # }

  type Word {
    id: String
    translateId: String
    user: String
    word: String
    translate: String
    translateLanguage: String
    language: String
  }
`;

module.exports = typeDefsWords;
