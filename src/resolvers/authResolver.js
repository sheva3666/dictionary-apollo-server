const authResolver = {
  Mutation: {
    loginUser: (_, { email, password }, { dataSources }) => {
      return dataSources.dictionaryAPI.loginUser(email, password);
    },
  },
};

module.exports = authResolver;
