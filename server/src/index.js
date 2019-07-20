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
          element: `frost`
        },
        {
          id: 20190102,
          name: "Darius",
          height: `1.8`,
          weapon: "sword"
        },
        {
          id: 20190103,
          name: "Garen",
          height: `1.8`,
          weapon: "Sword"
        },
        {
          id: 20190104,
          name: "Mayin",
          height: `1.8`,
          element: "Fire"
        },
        {
          id: 20190105,
          name: "Backwolf",
          height: `1.8`,
          weapon: "Dagger"
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
