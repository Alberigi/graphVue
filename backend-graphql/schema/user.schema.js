const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: Int
    name: String!
    email: String!
    token: String
    role: String
  }

  input UserRegisterInput {
    name: String!
    email: String!
    password: String!
  }

  input UserLoginInput {
    email: String!
    password: String!
  }

  input UserInput {
    name: String
    email: String
    password: String
    role: String
  }

  input UserFilter {
    id: Int
    email: String
  }

  type Role {
    id: Int
    type: String!
    users: [User]
  }

  input RoleFilter {
    id: Int
    type: String
  }
`
