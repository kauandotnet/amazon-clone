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
import AuthDropdown from '../index';
import { GET_AUTH_DROPDOWN, CREATE_AUTH_DROPDOWN, DELETE_AUTH_DROPDOWN, UPDATE_AUTH_DROPDOWN } from '../gql'

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
            <AuthDropdown {...defaultComponentProps} {...componentProps} />
          </ThemeProvider>
        </QueryParamProvider>
      </Router>
    </MockedProvider>
  );

describe("<AuthDropdown />", () => {
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
        query: GET_AUTH_DROPDOWN,
        variables: {
          accessToken: mockToken,
        },
      },
      result: {
        data: {
          getAuthDropdown: {
            id: 'someId',
            task: 'someTask',
            checked: true
          },
        },
      },
    }
    const mutationMock = {
      request: {
        query: CREATE_AUTH_DROPDOWN,
        variables: {
          task: 'someTask',
          checked: false
        },
      },
      result: {
        data: {
          createAuthDropdown: {
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
