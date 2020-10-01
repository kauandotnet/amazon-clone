/*
 * GQL
 * A JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.
 */

import gql from 'graphql-tag';

export const GET_AUTH_DROPDOWN = gql`
  query {
    getAuthDropdown {
      id
      task
      checked
    }
  }
`;

export const CREATE_AUTH_DROPDOWN = gql`
  mutation CreateAuthDropdown($task: String!, $checked: Boolean!) {
    createAuthDropdown(task: $task, checked: $checked) {
      id
      task
      checked
    }
  }
`;

export const DELETE_AUTH_DROPDOWN = gql`
  mutation DeleteAuthDropdown($id: ID!) {
    deleteAuthDropdownById(id: $id) {
      task
    }
  }
`;

export const UPDATE_AUTH_DROPDOWN = gql`
  mutation UpdateAuthDropdown($task: String!, $id: ID!, $checked: Boolean!) {
    updateAuthDropdownsById(task: $task, id: $id, checked: $checked) {
      task
    }
  }
`;