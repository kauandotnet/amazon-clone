import { Button as AntdButton } from 'antd';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { ButtonProps } from 'antd/lib/button';

const Button = styled(AntdButton)<ButtonProps>`
  &&& {
    background-color: ${p => p.theme.colors.amazonorange};
    border-color: ${p => p.theme.colors.amazonorange};

    &:hover,
    :focus,
    :active {
      color: black;
      background-color: ${p => transparentize(0.3, p.theme.colors.amazonorange)};
      border-color: ${p => transparentize(0.3, p.theme.colors.amazonorange)};
    }
  }
`;

export const SC = {
  Button,
};
