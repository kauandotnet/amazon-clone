/**
 *
 * Tests
 * React testing library with React Apollo
 * @see https://www.apollographql.com/docs/react/development-testing/testing/
 * @see https://github.com/styled-components/jest-styled-components
 *
 */

import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import 'jest-styled-components';
import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { QueryParamProvider } from 'use-query-params';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';
import { render } from '@testing-library/react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { MockedProvider, MockedProviderProps } from '@apollo/react-testing';
import localResolvers from 'apollo/resolvers';
import CartLink from '../index';
import { GET_CART_LINK, CREATE_CART_LINK, DELETE_CART_LINK, UPDATE_CART_LINK } from '../gql'

const defaultComponentProps = {};

const renderComponent = ({
  cache,
  mocks,
  resolvers = localResolvers,
  addTypename = false,
  componentProps,
}: MockedProviderProps & {
  componentProps?: any;
}) =>
  render(
    <MockedProvider cache={cache} mocks={mocks} resolvers={resolvers} addTypename={addTypename}>
      <Router history={history}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <ThemeProvider theme={theme}>
            <CartLink {...defaultComponentProps} {...componentProps} />
          </ThemeProvider>
        </QueryParamProvider>
      </Router>
    </MockedProvider>
  );

describe("<CartLink />", () => {
  it("should render on load", () => {
    // @dev for testing with initial cache, 
    // we initialise our cache with the data we want to write
    const cache = new InMemoryCache(),
    const initialCache = {
      data: {
        user: {
          accessToken: 'someToken'
        }
      }
    }
    cache.writeData(initialCache)
    const mockToken = 'fakeToken'
    const queryMock = {
      request: {
        query: GET_CART_LINK,
        variables: {
          accessToken: mockToken,
        },
      },
      result: {
        data: {
          getCartLink: {
            id: 'someId',
            task: 'someTask',
            checked: true
          },
        },
      },
    }
    const mutationMock = {
      request: {
        query: CREATE_CART_LINK,
        variables: {
          task: 'someTask',
          checked: false
        },
      },
      result: {
        data: {
          createCartLink: {
            id: 'someId',
            task: 'someTask',
            checked: false
          },
        },
      },
    }
    const mocksProp = [queryMock,mutationMock]
    const mockComponentProps = {
      someProp: 'hey'
    }

    const {} =  renderComponent({ cache, mocks: mocksProp, componentProps: mockComponentProps });
    expect(true).toBe(true);
  });
});
