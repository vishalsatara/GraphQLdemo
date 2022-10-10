const { ApolloServer , gql} = require("apollo-server");
const { data   } =require('./datasource.json');
const { persondatapi  } = require("./fatchdata")

const API = require("./fatchdata");
API.FnshowFirstname();
var dat1a =API.funshowpersondatalist();
 
 //console.log(dat1a);

const typeDefs =gql
`
type Query {
        persons:person,
        personcontactlist:[personcontact]
    }
   type person
   {
    id:ID
    Name:String
    
   } 
   type personcontact
   {
    id:ID
    Name:String
    Contactno:String
   } 
`
const resolvers ={
    Query:{
        persons:()=> {
            return{
                "id":1,
                "Name":"vishal"
            }
        },
        personcontactlist:()=>{
          return API.funshowpersondatalist();
        }
    }
}
const server = new ApolloServer(
    {
        typeDefs,
        resolvers,
        dat1a
    });
server
    .listen({port : process.env.PORT || 4000})
    .then((url)=>{console.log(`this is server running url`+{url})})
     