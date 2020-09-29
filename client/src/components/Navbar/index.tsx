/**
 * Navbar
 */

import React from 'react';
import { NavbarProps } from './interface';
import { SC } from './styled';

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return <SC.NavbarContainer>{children}</SC.NavbarContainer>;
};

export default Navbar;
