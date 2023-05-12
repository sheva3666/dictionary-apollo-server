const wordsResolver = {
  Query: {
    translatedWords: (_, { language }, { dataSources }) =>
      dataSources.dictionaryAPI.getTranslatedWords(language),
  },
};

module.exports = wordsResolver;
