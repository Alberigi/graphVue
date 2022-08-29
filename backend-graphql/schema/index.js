const { gql } = require('apollo-server');
const UserSchema = require('./user.schema');
const QuerySchema = require('./query.schema');
const MutationSchema = require('./mutation.schema');

module.exports = gql`
    ${UserSchema}
    ${QuerySchema}
    ${MutationSchema}
`