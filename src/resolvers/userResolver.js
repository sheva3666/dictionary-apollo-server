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

    updateUser: (_, { id, user }, { dataSources }) => {
      return dataSources.dictionaryAPI.updateUser(id, user);
    },
  },
};

module.exports = userResolver;
