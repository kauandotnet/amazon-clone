import styled from 'styled-components';
import { Input } from 'antd';
import { SearchProps as AntdSearchProps } from 'antd/lib/input';
const { Search: AntdSearch } = Input;

const Search = styled(AntdSearch)<AntdSearchProps>`
  .ant-input {
    border-color: ${p => p.theme.colors.amazonorange};

    &:hover {
      border-color: ${p => p.theme.colors.amazonorange};
    }
  }

  .ant-btn-primary {
    background-color: ${p => p.theme.colors.amazonorange};
    border-color: transparent;

    &:hover {
      border-color: ${p => p.theme.colors.amazonorange};
    }
  }
`;

export const SC = {
  Search,
};
