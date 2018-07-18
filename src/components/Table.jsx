import styled from 'styled-components';

const Table = styled.table`
  border: 1px solid #548e87;
  border-collapse: collapse;
  margin: auto;
  max-width: 540px;
  width: 96%;
`;

export const Head = styled.thead`
  background-color: #548e87;
  color: #efefef;
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
