const wordsResolver = {
  Query: {
    words: (_, { user, language, translateLanguage }, { dataSources }) =>
      dataSources.dictionaryAPI.getWords(user, language, translateLanguage),
  },
  Mutation: {
    addWord: (_, { word }, { dataSources }) => {
      return dataSources.dictionaryAPI.addWord(word);
    },
  },
};

module.exports = wordsResolver;
