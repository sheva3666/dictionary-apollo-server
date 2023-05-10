const wordsResolver = {
  Query: {
    words: (_, { user, language, translateLanguage }, { dataSources }) =>
      dataSources.dictionaryAPI.getWords(user, language, translateLanguage),
  },
};

module.exports = wordsResolver;
