const wordsResolver = {
  Query: {
    words: (_, { user, language, translateLanguage }, { dataSources }) =>
      dataSources.dictionaryAPI.getWords(user, language, translateLanguage),
    randomWord: (_, { user, language, translateLanguage }, { dataSources }) => {
      return dataSources.dictionaryAPI.getRandomWord(
        user,
        language,
        translateLanguage
      );
    },
  },
  Mutation: {
    addWord: (_, { word }, { dataSources }) => {
      return dataSources.dictionaryAPI.addWord(word);
    },
  },
};

module.exports = wordsResolver;
