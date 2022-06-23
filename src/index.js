import { ApolloServer } from 'apollo-server';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, 'graphql', '**', '*.gql')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, 'graphql', '**', '*.js')));

const books = [
  {
    title: 'Clean Code',
    author: 'Robert Cecil Martin',
  },
  {
    title: 'The Clean Coder',
    author: 'Robert Cecil Martin',
  },
]

const server = new ApolloServer({
  typeDefs, resolvers
});
server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`))

export default books;