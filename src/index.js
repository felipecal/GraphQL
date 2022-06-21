import  ApolloServer  from 'apollo-server';
import {fileLoader, mergeTypes, mergeResolvers} from 'merge-graphql-schemas';
import path from 'path';


const resolvers = mergeResolvers(fileLoader(`${__dirname}/graphql/**/*.js`));

const typesArray = fileLoader(path.join(__dirname, 'graphql', '**', '*.gql'));
const typeDefs = mergeTypes(typesArray);

const server = new ApolloServer({
  typeDefs,resolvers

  });
  
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
