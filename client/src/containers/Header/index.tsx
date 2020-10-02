import React from 'react';
import { SC } from './styled';
import Navbar from 'components/Navbar';
import Search from 'containers/Search';
import AuthDropdown from 'containers/AuthDropdown';
import CartLink from 'containers/CartLink';
import amazonWhiteImg from 'resources/img/a-white.png';
import { useHistory } from 'react-router-dom';
import { Routes } from 'enums/Routes';

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <Navbar>
      <SC.Logo onClick={() => history.push(Routes.HOME)} src={amazonWhiteImg} />
      <SC.HeaderCenter>
        <Search />
      </SC.HeaderCenter>
      <SC.HeaderRight>
        <AuthDropdown />
        <CartLink />
      </SC.HeaderRight>
    </Navbar>
  );
};

export default Header;
