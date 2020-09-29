/*
 * Styling using styled components
 */

import styled from 'styled-components';

const Logo = styled.img`
  height: 40px;
  width: 140px;
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 0 1rem;
`;

export const SC = {
  Logo,
  HeaderCenter,
};
