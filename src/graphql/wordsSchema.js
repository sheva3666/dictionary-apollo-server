const { gql } = require("apollo-server");

const typeDefsWords = gql`
  type Query {
    words(
      user: String!
      language: String!
      translateLanguage: String!
      page: Int
      searchString: String!
    ): Words
    randomWord(
      user: String!
      language: String!
      translateLanguage: String!
    ): Word
  }

  type Mutation {
    addWord(word: WordInput!): Word!
  }

  type Words {
    words: [Word]
    numberOfPages: Int
    currentPage: Int
  }

  type Word {
    id: String
    user: String
    word: String
    translate: String
    translateLanguage: String
    language: String
  }

  input WordInput {
    user: String
    word: String
    translate: String
    translateLanguage: String
    language: String
  }
`;

module.exports = typeDefsWords;
