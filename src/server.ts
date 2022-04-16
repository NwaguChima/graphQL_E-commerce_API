import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';
import { Product } from './resolvers/Product';
import { Category } from './resolvers/Category';
import { categories, products, reviews } from './db';

const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Product,
    Category,
  },
  context: {
    categories,
    products,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log('Server running at ' + url);
});
