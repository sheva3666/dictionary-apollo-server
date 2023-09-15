const wordsResolver = {
  Query: {
    translatedWords: (
      _,
      { user, languageForLearn, language },
      { dataSources }
    ) =>
      dataSources.dictionaryAPI.getTranslatedWords(
        user,
        languageForLearn,
        language
      ),
  },
};

module.exports = wordsResolver;
