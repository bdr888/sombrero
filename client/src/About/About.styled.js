import styled from 'styled-components';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Image = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid black;
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  margin: 1rem 0;
`;

export {
  AboutWrapper,
  Image,
  Paragraph,
};
