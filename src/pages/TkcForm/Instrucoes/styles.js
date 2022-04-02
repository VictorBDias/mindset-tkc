import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

export const LeftContainer = styled.div`
  float: left;
  width: 50%;
  margin-bottom: 80px;

  table {
    border-collapse: collapse;
    width: 400px;
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

export const RightContainer = styled.div`
  margin-top: 40px;
  float: left;
  width: 50%;
`;
