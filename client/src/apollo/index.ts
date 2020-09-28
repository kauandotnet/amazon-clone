import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { cache } from 'apollo/cache';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: SERVER_URL,
    headers: {
      authorization: `Bearer ${localStorage.getItem('x-token') || ''}`,
    },
    // For server with different domain use "include"
    // credentials: 'same-origin',
  }),
});

export default client;
