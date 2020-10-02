import { makeVar } from '@apollo/client';

export interface CartItemsVarProps {
  name: string;
  price: number;
  imgUrl: string;
}

export const cartItmesVar = makeVar<CartItemsVarProps[]>([]);
