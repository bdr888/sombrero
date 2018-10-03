import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 5;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 600px) {
    grid-template-columns: auto auto auto;
  }
`;

export {
  HomeWrapper,
};

