const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    users: [User]
    login(data: UserLoginInput!): User
    user(filter: UserFilter!): User
    roles: [Role]
    role(filter: RoleFilter!): Role
  }
`   
