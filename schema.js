const { gql }= require('apollo-server');
module.exports  =gql
`
type Query {
        persons:person
    }
   type person
   {
    id:ID
    Name:String
   } 
`