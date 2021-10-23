import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.button`
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  border: none;
  font-weight: bold;
  box-shadow: 2px 4px 5px ${colors.regularShadow};
`;
