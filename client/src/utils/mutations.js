import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser (
    $userName: String!
    $email: String!
    $password: String!
    $accountBalance: Int!
  ) {
    addUser(
      userName: $username
      email: $email
      password: $password
      accountBalance: $accountBalance
    ) {
      _id
      userName
      accountBalance
    }
  }
`;

export const BET_MONEY = gql `
  mutation betMoney ($_id: ID!, $bet: Int!){
    betMoney(_id: $_id, bet: $bet) {
      _id
      nominee
      money
    }
  }
`;

export const ADD_FRIEND = gql `
  mutation addFriend ($_id: ID!) {
    addFriend(_id: $_id) {
      _id
      username
      Choices{
        _id
        nominee
      }
    }
  }
`

export const PICK_NOMINEE = gql `
  mutation pickNominee ($_id: ID!) {
    pickNominee(_id: $_id) {
      _id
      nominee
      money
    }
  }
`;

export const ADD_BALANCE = gql `
  mutation addToBalance ($_id: ID!, $amount: Int!) {
    addToBalance(_id: $_id, amount: $amount) {
      _id
      accountBalance
    }
  }
`;

export const REDUCE_BALANCE = gql `
  mutation reduceBalance ($_id: ID!, $amount: Int!) {
    reduceBalance(_id: $_id, amount: $amount) {
      _id
      accountBalance
    }
  }
`;

export const WITHDRAW_BALANCE = gql `
  mutation withdrawBalance ($_id: ID!) {
    withdrawBalance(_id: $_id) {
      _id
      accountBalance
    }
  }
`;

// export const LOGIN = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//       }
//     }
//   }
// `;

// export const ADD_ORDER = gql`
//   mutation addOrder($products: [ID]!) {
//     addOrder(products: $products) {
//       purchaseDate
//       products {
//         _id
//         name
//         description
//         price
//         quantity
//         category {
//           name
//         }
//       }
//     }
//   }
// `;

// export const ADD_USER = gql`
//   mutation addUser(
//     $firstName: String!
//     $lastName: String!
//     $email: String!
//     $password: String!
//   ) {
//     addUser(
//       firstName: $firstName
//       lastName: $lastName
//       email: $email
//       password: $password
//     ) {
//       token
//       user {
//         _id
//       }
//     }
//   }
// `;
