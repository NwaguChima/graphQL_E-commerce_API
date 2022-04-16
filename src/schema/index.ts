import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
    products(filter: productsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryinput): Category!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: productsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input productsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryinput {
    name: String!
  }
`;

export default typeDefs;
