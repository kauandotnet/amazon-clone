/*
 * GQL
 * A JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.
 */

import gql from 'graphql-tag';

export const SIGN_UP = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    register(input: { username: $username, email: $email, password: $password }) {
      ok
    }
  }
`;
