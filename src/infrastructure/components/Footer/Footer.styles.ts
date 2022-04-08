import styled, { StyledComponent } from 'styled-components';

export const attribution: StyledComponent<'div', any, {}, never> = styled.div`
  font-size: 11px;
  text-align: center;

  & a {
    color: hsl(228, 45%, 44%);
  }
`;
