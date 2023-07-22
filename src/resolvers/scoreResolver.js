const scoreResolver = {
  Query: {
    score: (_, { userEmail }, { dataSources }) => {
      console.log(userEmail);
      return dataSources.dictionaryAPI.getScore(userEmail);
    },
  },
  Mutation: {
    updateScore: (_, { score }, { dataSources }) => {
      return dataSources.dictionaryAPI.updateScore(score);
    },
  },
};

module.exports = scoreResolver;
