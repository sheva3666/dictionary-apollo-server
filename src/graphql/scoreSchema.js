const { gql } = require("apollo-server");

const typeDefsScore = gql`
  type Query {
    score(userEmail: String!, language: String!): Score
  }

  type Mutation {
    updateScore(score: ScoreInput!): Score
  }

  type Score {
    userEmail: String
    score: Int
    language: String
  }

  input ScoreInput {
    userEmail: String!
    score: Int!
    language: String!
  }
`;

module.exports = typeDefsScore;
