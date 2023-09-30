const userResolver = {
  Query: {
    user: (_, { user }, { dataSources }) => {
      return dataSources.dictionaryAPI.getUser(user);
    },
  },
  Mutation: {
    createUser: (_, { user }, { dataSources }) => {
      return dataSources.dictionaryAPI.createUser(user);
    },

    updateUser: (_, { user }, { dataSources }) => {
      return dataSources.dictionaryAPI.updateUser(user);
    },

    updatePassword: (_, { user, password, newPassword }, { dataSources }) => {
      return dataSources.dictionaryAPI.updatePassword(
        user,
        password,
        newPassword
      );
    },
  },
};

module.exports = userResolver;
