/**
 * Input
 */

import React from 'react';
import { InputProps } from './interface';
import { SC } from './styled';

const Input: React.FC<InputProps> = ({ ...props }) => {
  return <SC.Input {...props} />;
};

export default Input;
