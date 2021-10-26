import styled from 'styled-components';

import { Field } from 'formik';

export const Container = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const InputForm = styled(Field)`
  border: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #70707050;
  width: 400px;
  min-height: 40px;
  padding: 8px;
`;
