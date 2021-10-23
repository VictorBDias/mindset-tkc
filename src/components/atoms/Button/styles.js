import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${props => {
    switch (props.variant) {
      case 'regular':
        return css``;
      case 'contained':
        return css``;
      default:
        break;
    }
  }}
`;
