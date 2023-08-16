import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px auto;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  > thead {
    > tr {
      background-color: grey;
      > th {
        border: 1px solid black;
      }
    }
  }
  > tbody {
    > tr {
      &:nth-child(2n-1) {
        background-color: #dcdcdc;
      }
      &:nth-child(2n) {
        background-color: #c0c0c0;
      }
      border: 1px solid black;
      > td {
        border: 1px solid black;
        text-align: center;
      }
    }
  }
`;
