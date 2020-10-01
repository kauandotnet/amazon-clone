/**
 * Migration of apollo-link-state after v2.5> deprecated
 * https://www.apollographql.com/docs/react/data/local-state/#migrating-from-apollo-link-state
 */

import { InMemoryCache } from '@apollo/client';
import { userVar } from './user';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user: {
          read() {
            return userVar();
          },
        },
      },
    },
  },
});
