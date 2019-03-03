import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const ReleaseTitle = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem auto 1rem;
  border-bottom: 5px solid black;
  width: 100%;
`;

const SpotifyEmbed = styled.div`
  margin: 1rem;
`;

const Record = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RecordArt = styled.img`
  height: 20rem;
  width: 20rem;
  margin-bottom: 1rem;
`;

const RecordTitle = styled.div`
  font-weight: 700;
`;

const RecordArtist = styled.div`
  font-weight: 300;
  font-style: italic; 
`;

const RecordDetails = styled.div`
`;

export {
  Record,
  RecordArt,
  RecordTitle,
  RecordArtist,
  RecordDetails,
  Wrapper,
  ReleaseTitle,
  SpotifyEmbed,
};
