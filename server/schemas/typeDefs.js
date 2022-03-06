const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    title: String!
    nominees: [String]
  }

  type Nominee {
    _id: ID
    nominee: String
    money: Int
  }

  type User {
    _id: ID
    userName: String
    email: String!
    password: String!
    accountBalance: Int
    Choices: [Nominee]
    Friends: [User]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    users: [User]
    friends(_id: ID!): User
    userBalance: User
    picture: Category
    director: Category
    actor: Category
    actress: Category
    supportingactor: Category 
    supportingactress: Category
    animatedfeaturefilm: Category
    animatedshortfilm: Category
    cinematography: Category
    costumedesign: Category
    documentaryfeature: Category
    documentaryshortsubject: Category
    filmediting: Category
    internationalfeaturefilm: Category
    liveactionshortfilm: Category
    makeup: Category
    originalscore: Category
    originalsong: Category
    productiondesign: Category
    sound: Category
    visualeffects: Category
    adaptedscreenplay: Category
    originalscreenplay: Category
    addFunds: User
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    addCategory(title: String!): Category
    addNominee(nominee: String!): Nominee
    betMoney(_id: ID!, bet: Int!): Nominee
    addFriend(_id: ID!): User
    pickNominee(_id: ID!): User
    addToBalance(_id: ID!, amount: Int!): User
    reduceBalance(_id: ID!, amount: Int!): User
    withdrawBalance( _id: ID!): User
    updateCategory: Category
    deleteUser(_id: ID!): User
  }
`;

module.exports = typeDefs;
