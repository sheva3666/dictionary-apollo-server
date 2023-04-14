const { ApolloServer } = require("apollo-server");
const resolvers = require("./src/resolvers/resolvers");

const DictionaryAPI = require("./src/dataSources/dictionaryApi");

const typeDefsWords = require("./src/graphql/wordsSchema");
const typeDefsUser = require("./src/graphql/usersSchema");

const server = new ApolloServer({
  typeDefs: [typeDefsWords, typeDefsUser],
  resolvers,
  dataSources: () => {
    return {
      dictionaryAPI: new DictionaryAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});
