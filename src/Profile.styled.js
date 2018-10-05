import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  justify-content: space-around;
  align-items: center;
  
  @media (min-width:515px) {
    grid-template: auto / 1fr 2fr;
  }

`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const Image = styled.img`
  margin: 1rem auto;
  max-width: 300px;
`;

const Lineup = styled.div`
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem;
`;

const Description = styled.div`
  font-size: 1rem;
  text-align: left;
  max-width: 600px;
  padding: 1rem;
  
  @media (min-width:515px) {
    grid-column-start: 2;
  }
`;

const BandName = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 1rem;
  
  @media (min-width:515px) {
    grid-column-start: 2;
  }
`;

const Bio = styled.div`
  font-size: 1rem;
  text-align: left;
  padding: 1rem;
`;

export {
  Description,
  BandName,
  Image,
  Lineup,
  Wrapper,
  Info,
  Bio,
};
