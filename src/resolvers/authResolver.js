const authResolver = {
  Query: {
    auth: (_, { userEmail }, { dataSources }) => {
      return dataSources.dictionaryAPI.getAuth(userEmail);
    },
  },
  Mutation: {
    loginUser: (_, { email, password }, { dataSources }) => {
      return dataSources.dictionaryAPI.loginUser(email, password);
    },
    updateAuth: (_, { email, auth }, { dataSources }) => {
      return dataSources.dictionaryAPI.updateAuth(email, auth);
    },
  },
};

module.exports = authResolver;
