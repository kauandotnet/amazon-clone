/*
 * Styling using styled components
 */

import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.amazonnavbar};
  color: white;
  padding: 0.5rem;
`;

export const SC = {
  NavbarContainer,
};
