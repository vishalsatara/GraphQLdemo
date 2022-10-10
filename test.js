const { ApolloServer , gql} = require("apollo-server");

const typeDefs = require('./schema')
const resolvers = require('./resolvers.js');

console.log(typeDefs.module);

const server = new ApolloServer(
    {
        typeDefs,
        resolvers
    });
server
    .listen({port : process.env.PORT || 5000})
    .then((url)=>{console.log(`this is test server running url`+{url})})
     