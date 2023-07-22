const { mergeResolvers } = require("@graphql-tools/merge");
const wordsResolver = require("./wordsResolver");
const userResolver = require("./userResolver");
const authResolver = require("./authResolver");
const translatedWordsResolver = require("./translatedWordsResolver");
const scoreResolver = require("./scoreResolver");

const resolvers = {
  ...mergeResolvers([
    wordsResolver,
    userResolver,
    authResolver,
    translatedWordsResolver,
    scoreResolver,
  ]),
};

module.exports = resolvers;
