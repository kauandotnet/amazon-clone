/*
 * GQL
 * A JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.
 */

import gql from 'graphql-tag';

export const GET_SEARCH = gql`
  query {
    getSearch {
      id
      task
      checked
    }
  }
`;

export const CREATE_SEARCH = gql`
  mutation CreateSearch($task: String!, $checked: Boolean!) {
    createSearch(task: $task, checked: $checked) {
      id
      task
      checked
    }
  }
`;

export const DELETE_SEARCH = gql`
  mutation DeleteSearch($id: ID!) {
    deleteSearchById(id: $id) {
      task
    }
  }
`;

export const UPDATE_SEARCH = gql`
  mutation UpdateSearch($task: String!, $id: ID!, $checked: Boolean!) {
    updateSearchsById(task: $task, id: $id, checked: $checked) {
      task
    }
  }
`;