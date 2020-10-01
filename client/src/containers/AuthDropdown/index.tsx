/**
 * AuthDropdown
 */

import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { Menu, Dropdown } from 'antd';
import { SC } from './styled';
import { userVar } from 'apollo/cache/user';
import { Routes } from 'enums/Routes';
import { useHistory } from 'react-router-dom';

const AuthDropdown: React.FC = () => {
  const history = useHistory();
  const user = useReactiveVar(userVar);
  const { username, email, accessToken } = user;
  const isLogin = !!accessToken;

  const handleLogOut = () => {
    localStorage.clear();
    userVar({ username: '', email: '', accessToken: '', isLogin: false });
  };

  const menu = () => {
    return (
      <Menu>
        {isLogin ? (
          <Menu.Item onClick={() => handleLogOut()} danger>
            Sign out
          </Menu.Item>
        ) : (
          <>
            <Menu.Item onClick={() => history.push(Routes.SIGNIN)}>Sign in</Menu.Item>
            <Menu.Item onClick={() => history.push(Routes.SIGNUP)}>Sign up</Menu.Item>
          </>
        )}
      </Menu>
    );
  };

  const Content = () => {
    return (
      <div>
        Hello, {accessToken && username ? username : accessToken && email ? email : 'Sign in'}
        <br />
        <b>Account & Lists</b>
      </div>
    );
  };

  return (
    <Dropdown overlay={menu}>
      <SC.AuthDropdownConainer>
        <Content />
      </SC.AuthDropdownConainer>
    </Dropdown>
  );
};

export default AuthDropdown;
