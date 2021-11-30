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
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dee1e5e2;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
