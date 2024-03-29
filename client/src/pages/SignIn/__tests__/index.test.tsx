/**
 *
 * Tests
 * React testing library with React Apollo
 * @see https://www.apollographql.com/docs/react/development-testing/testing/
 * @see https://github.com/styled-components/jest-styled-components
 * @see https://www.apollographql.com/docs/react/development-testing/testing/
 *
 */

import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles' 
import { MockedProvider, MockedProviderProps } from "@apollo/react-testing";
import { SignIn } from "../index";

const defaultProps = {};

const renderComponent = ({
  mocks,
  props
}: MockedProviderProps & { props?: any }) =>
  render(
    <MockedProvider mocks={mocks}>
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <SignIn {...props} />
        </ThemeProvider>
      </MemoryRouter>
    </MockedProvider>
  );

describe("<SignIn />", () => {
  it("should render on load", () => {
    renderComponent({});
    expect(true).toBe(true);
  });
});
