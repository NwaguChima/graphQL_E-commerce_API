import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return 'World!';
    },
    products: () => {
      return [
        {
          name: 'Bike',
          description: 'Sport and recreation',
          quantity: 20,
          price: 999.99,
          onSale: false,
        },
      ];
    },
  },
};

const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log('Server running at ' + url);
});
