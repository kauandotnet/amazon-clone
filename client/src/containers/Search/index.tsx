/**
 * Search
 */

import React from 'react';
import { SC } from './styled';
import { SearchProps } from './interfaces';
import { useHistory } from 'react-router-dom';

// Add value to url param and redirect to result paginated page

const Search: React.FC<SearchProps> = ({ ...props }) => {
  const history = useHistory();
  return <SC.Search {...props} enterButton />;
};

export default Search;
