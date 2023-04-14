const { ApolloServer } = require("apollo-server");
const resolvers = require("./src/resolvers/resolvers");

const DictionaryAPI = require("./src/dataSources/dictionaryApi");

const typeDefs = require("./src/graphql/schema");

const server = new ApolloServer({
  typeDefs,
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
