const { mergeResolvers } = require("@graphql-tools/merge");
const wordsResolver = require("./wordsResolver");
const userResolver = require("./userResolver");
const authResolver = require("./authResolver");

const resolvers = {
  ...mergeResolvers([wordsResolver, userResolver, authResolver]),
};

module.exports = resolvers;
