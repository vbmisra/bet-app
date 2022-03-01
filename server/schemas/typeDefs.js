const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    title: String!
    nominees: [String]
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Nominee {
    _id: ID
    nominee: String!
    money: Int
  }

  type User {
    _id: ID
    userName: String!
    email: String!
    password: String!
    accountBalance: Int
    Choices: [String]
    Friends: [String]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
