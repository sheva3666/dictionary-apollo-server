const wordsResolver = {
  Query: {
    words: (_, { user, language, translateLanguage }, { dataSources }) => {
      return dataSources.dictionaryAPI.getWords(
        user,
        language,
        translateLanguage
      );
    },
  },
};

module.exports = wordsResolver;
