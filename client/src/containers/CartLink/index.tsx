/**
 * CartLink
 */

import React from 'react';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { SC } from './styled';
import { useHistory } from 'react-router-dom';
import { Routes } from 'enums/Routes';
import { cartItmesVar } from 'apollo/cache/cartItems';

const CartLink: React.FC = () => {
  const history = useHistory();

  return (
    <SC.CartLinkContainer onClick={() => history.push(Routes.CART)}>
      <Badge size="small" count={cartItmesVar().length} showZero>
        <ShoppingCartOutlined style={{ fontSize: '32px' }} />
      </Badge>
    </SC.CartLinkContainer>
  );
};

export default CartLink;
