import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  table {
    border-collapse: collapse;
  }

  td,
  th {
    text-align: left;
  }

  tr:nth-child(odd) {
    background-color: #dee1e5e2;
  }
  tr:nth-child(even) {
    background-color: #c5cdd8;
  }

  .chakra-checkbox__control {
    border: 2px solid #000;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;
