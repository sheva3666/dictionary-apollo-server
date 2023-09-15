const { gql } = require("apollo-server");

const typeDefsTranslatedWords = gql`
  type Query {
    translatedWords(
      user: String!
      languageForLearn: String!
      language: String!
    ): [TranslatedWord]
  }

  type TranslatedWord {
    id: String
    user: String
    word: String
    language: String
  }
`;

module.exports = typeDefsTranslatedWords;
