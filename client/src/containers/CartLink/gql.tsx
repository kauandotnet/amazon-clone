/*
 * GQL
 * A JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.
 */

import gql from 'graphql-tag';

export const GET_CART_LINK = gql`
  query {
    getCartLink {
      id
      task
      checked
    }
  }
`;

export const CREATE_CART_LINK = gql`
  mutation CreateCartLink($task: String!, $checked: Boolean!) {
    createCartLink(task: $task, checked: $checked) {
      id
      task
      checked
    }
  }
`;

export const DELETE_CART_LINK = gql`
  mutation DeleteCartLink($id: ID!) {
    deleteCartLinkById(id: $id) {
      task
    }
  }
`;

export const UPDATE_CART_LINK = gql`
  mutation UpdateCartLink($task: String!, $id: ID!, $checked: Boolean!) {
    updateCartLinksById(task: $task, id: $id, checked: $checked) {
      task
    }
  }
`;