import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const token = '';

const authLink = setContext((_, { headers }: any) => {
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : null,
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(new HttpLink({ uri: 'https://api.github.com/graphql' })),
    cache: new InMemoryCache()
});

export default client