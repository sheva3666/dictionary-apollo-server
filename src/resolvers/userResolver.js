const userResolver = {
  Query: {
    user: (_, { user, password }, { dataSources }) => {
      return dataSources.dictionaryAPI.getUser(user, password);
    },
  },
  Mutation: {
    createUser: (_, { user }, { dataSources }) => {
      return dataSources.dictionaryAPI.createUser(user);
    },

    updateUser: (_, { user }, { dataSources }) => {
      return dataSources.dictionaryAPI.updateUser(user);
    },
  },
};

module.exports = userResolver;
