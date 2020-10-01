/**
 * Search
 */

import React from 'react';
import { SC } from './styled';
import { useHistory } from 'react-router-dom';
import { Routes } from 'enums/Routes';
import { UrlParams } from 'enums/UrlParams';

const Search: React.FC = ({ ...props }) => {
  const history = useHistory();

  const onSearch = (value: string) =>
    history.push({
      pathname: Routes.SEARCH,
      search: `?${UrlParams.QUERY}=${value}`,
    });

  return <SC.Search onSearch={onSearch} enterButton />;
};

export default Search;
