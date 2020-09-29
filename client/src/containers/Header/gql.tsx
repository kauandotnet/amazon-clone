/*
 * GQL
 * A JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.
 */

import gql from 'graphql-tag';

export const GET_HEADER = gql`
  query {
    getHeader {
      id
      task
      checked
    }
  }
`;

export const CREATE_HEADER = gql`
  mutation CreateHeader($task: String!, $checked: Boolean!) {
    createHeader(task: $task, checked: $checked) {
      id
      task
      checked
    }
  }
`;

export const DELETE_HEADER = gql`
  mutation DeleteHeader($id: ID!) {
    deleteHeaderById(id: $id) {
      task
    }
  }
`;

export const UPDATE_HEADER = gql`
  mutation UpdateHeader($task: String!, $id: ID!, $checked: Boolean!) {
    updateHeadersById(task: $task, id: $id, checked: $checked) {
      task
    }
  }
`;