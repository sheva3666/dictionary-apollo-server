const authResolver = {
  Query: {
    auth: (_, { userEmail }, { dataSources }) => {
      return dataSources.dictionaryAPI.getAuth(userEmail);
    },
  },
};

module.exports = authResolver;
