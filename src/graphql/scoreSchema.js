const { gql } = require("apollo-server");

const typeDefsScore = gql`
  type Query {
    score(userEmail: String!): Score
  }

  type Mutation {
    updateScore(score: ScoreInput!): Score
  }

  type Score {
    userEmail: String
    score: Int
  }

  input ScoreInput {
    userEmail: String
    score: Int
  }
`;

module.exports = typeDefsScore;
