const authResolver = {
  Query: {
    user: (_, { user, password }, { dataSources }) => {
      return dataSources.dictionaryAPI.getUser(user, password);
    },
  },
};

module.exports = authResolver;
