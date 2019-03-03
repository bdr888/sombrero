import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  max-width: 800px;
  
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  padding: 1rem;
`;

const Member = styled.div`
  padding: 0.25rem 0;
`;

const Name = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

const Instrument = styled.div`
  font-size: 1rem;
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
  BandName,
  Bio,
  Image,
  Info,
  Instrument,
  Lineup,
  Member,
  Name,
  Wrapper,
};
