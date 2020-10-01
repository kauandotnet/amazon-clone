/**
 * Header
 */

import React from 'react';
import { GET_HEADER, CREATE_HEADER } from './gql';
import styled from 'styled-components';
import { SC } from './styled';
import Navbar from 'components/Navbar';
import Search from 'containers/Search';
import AuthDropdown from 'containers/AuthDropdown';
import amazonWhiteImg from 'resources/img/a-white.png';

const Header: React.FC = () => {
  return (
    <Navbar>
      <SC.Logo src={amazonWhiteImg} />
      <SC.HeaderCenter>
        <Search />
      </SC.HeaderCenter>
      <div>
        <AuthDropdown />
      </div>
    </Navbar>
  );
};

export default Header;
