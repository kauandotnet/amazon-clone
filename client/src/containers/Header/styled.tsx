/*
 * Styling using styled components
 */

import styled from 'styled-components';

const Logo = styled.img`
  height: 30px;
  width: 100px;

  &:hover {
    cursor: pointer;
  }
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 0 1rem;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const SC = {
  Logo,
  HeaderCenter,
  HeaderRight,
};
