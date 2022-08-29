require('dotenv').config();
const { ApolloServer} = require('apollo-server');
const resolvers = require('./resolvers');
const context = require('./config/context');

const schemaPath = require('./schema');
const server = new ApolloServer({
    typeDefs: schemaPath,
    resolvers,
    context: context,
});

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
});