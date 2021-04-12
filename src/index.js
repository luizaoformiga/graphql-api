import { ApolloServer } from 'apollo-server';
import graphql from './graphql';
import { UserCadasterServices } from '../src/graphql/services/usersCadasterServices';

const server = new ApolloServer({
    ...graphql, 
    context: () => {
        return {
            usersCadasterServices: UserCadasterServices
        }
    }
})

server.listen().then(({ url }) => console.log(`Server running to port: http://localhost:${url}`));