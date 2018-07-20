import styled from 'styled-components';

const Table = styled.table`
  border: 1px solid #477872;
  border-collapse: collapse;
  margin: auto;
  max-width: 540px;
  width: 96%;
`;

export const Head = styled.thead`
  background-color: #477872;
  color: #fff;
`;

export const Body = styled.tbody`
  background-color: #fff;
  
  & > tr:nth-child(even) {
    background-color: #eee;
  }
`;

export const Row = styled.tr``;

export const ColHeading = styled.th`
  font-weight: normal;
  padding: 0.5em;
  text-align: left;
`;

export const Cell = styled.td`
  padding: 0.5em;
`;

export default Table;
