import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import { Query } from './resolvers/Query';
import { Product } from './resolvers/Product';
import { Category } from './resolvers/Category';
import { categories, products } from './db';

const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
  context: {
    categories,
    products,
  },
});

server.listen().then(({ url }) => {
  console.log('Server running at ' + url);
});
