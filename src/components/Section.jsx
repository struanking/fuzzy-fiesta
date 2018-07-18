import styled from 'styled-components';

const Section = styled.section`
  padding: 1rem 1rem 2rem;

  & + & {
    margin-top: 3rem;
  }
`;

export const Heading = styled.h2`
  background-color: #385b66;
  color: #efefef;
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0 0 2rem;
  padding: 0.25em;
  text-align: center;
`;

export default Section;
