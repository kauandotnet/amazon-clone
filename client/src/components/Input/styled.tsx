/*
 * Styling using styled components
 */

import styled from 'styled-components';
import { Input as AntdInput } from 'antd';
import { InputProps } from 'antd/lib/input';
import { transparentize } from 'polished';

const Input = styled(AntdInput)<InputProps>`
  &:hover,
  :focus {
    border-color: ${p => p.theme.colors.amazonorange};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${p => transparentize(0.5, p.theme.colors.amazonorange)};
  }
`;

export const SC = {
  Input,
};
