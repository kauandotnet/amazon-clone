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
import { ThemeProvider } from 'styled-components';
import { render } from "@testing-library/react";
import { MockedProvider, MockedProviderProps } from "@apollo/react-testing";
import { theme } from 'styles';
import Input from "../index";

const defaultProps = {};

const renderComponent = (props: any) =>
  render(
    <ThemeProvider theme={theme}>
      <Input {...defaultComponentProps} {...props} />
    </ThemeProvider>
  );

describe("<Input />", () => {
  it("should render on load", () => {
    const {} = renderComponent({});
    expect(true).toBe(true);
  });
});
