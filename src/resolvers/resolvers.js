const { mergeResolvers } = require("@graphql-tools/merge");
const wordsResolver = require("./wordsResolver");
const userResolver = require("./userResolver");
const authResolver = require("./authResolver");
const translatedWordsResolver = require("./translatedWordsResolver");

const resolvers = {
  ...mergeResolvers([
    wordsResolver,
    userResolver,
    authResolver,
    translatedWordsResolver,
  ]),
};

module.exports = resolvers;
