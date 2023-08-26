const scoreResolver = {
  Query: {
    score: (_, { userEmail, language }, { dataSources }) => {
      return dataSources.dictionaryAPI.getScore(userEmail, language);
    },
  },
  Mutation: {
    updateScore: (_, { score }, { dataSources }) => {
      return dataSources.dictionaryAPI.updateScore(score);
    },
  },
};

module.exports = scoreResolver;
