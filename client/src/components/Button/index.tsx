import { OmitProps } from 'antd/lib/transfer/ListBody';
/**
 * Button
 */

import React from 'react';
import { ButtonProps } from './interface';
import { SC } from './styled';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <SC.Button {...props}>{children}</SC.Button>;
};

export default Button;
