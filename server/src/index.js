const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
  interface Character {
    id: ID!
    name: String!
    friends: [Character]
  }

  type Human implements Character {
    id: ID!
    name: String!
    friends: [Character]
    weapon: String!
  }

  type Dragon implements Character {
    id: ID!
    name: String!
    friends: [Character]
    element: String!
  }

  type Query {
    characters: [Character]
  }
`;

const resolvers = {
  Query: {
    characters: () => {
      return [
        {
          id: 20190101,
          name: "Fluffykins",
          element: `fire`
        },
        {
          id: 20190102,
          name: "Varus",
          height: `1.8`,
          weapon: "Sword"
        }
      ];
    }
  },
  Character: {
    __resolveType: obj => (obj.element ? "Dragon" : "Human")
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log(`Server is running at http://localhost:4000`));
