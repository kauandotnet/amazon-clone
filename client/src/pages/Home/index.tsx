/**
 * Home
 */

import React from 'react';
import { HomeProps } from './interface';
import { SC } from './styled';

export const Home: React.FC<HomeProps> = () => {
  return (
    <SC.HomeContainer>
      <SC.HomeHeroBg />
    </SC.HomeContainer>
  );
};

export default Home;
