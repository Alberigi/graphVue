const { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    registerUser(user: UserRegisterInput!): User!

    newUser(user: UserInput!): User!

    deleteUser(filter: UserFilter!): User

    updateUser(filter: UserFilter!, data: UserInput!): User

    newRole(role: String!): Role!

    deleteRole(filter: RoleFilter!): Role

    updateRole(filter: RoleFilter!, role: String!): Role
  }
` 

