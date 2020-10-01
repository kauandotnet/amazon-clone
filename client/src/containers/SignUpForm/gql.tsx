/*
 * GQL
 * A JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.
 */

import gql from 'graphql-tag';

export const USER_LOGIN = gql`
  mutation Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      _id
      email
      accessToken
      username
    }
  }
`;
