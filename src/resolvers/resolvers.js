const wordsResolver = require("./wordsResolver");
const userResolver = require("./userResolver");

const resolvers = {
  ...wordsResolver,
  ...userResolver,
};

module.exports = resolvers;
