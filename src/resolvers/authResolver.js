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
  },
};

module.exports = authResolver;
