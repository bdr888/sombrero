import React from 'react';
import { string } from 'prop-types';
// import axios from 'axios';
import {
  SpotifyEmbed,
  Record,
  RecordArt,
  RecordTitle,
  RecordArtist,
  RecordDetails,
  Wrapper,
  ReleaseTitle,
  ReleasesWrapper,
} from './Releases.styled';

// @todo album art modal

// @todo where should this go? 
// Artist page could be the container that calls for data, then passes down albumLength prop to here.

// dynamically calculate height of album embed
// const getAlbumLength = () => (
//   axios.get('https://api.spotify.com/v1/users/etsitramai/playlists/0CJzBeJcS8d0wv5PP9tWhp/tracks')
//     .then((response) => {
//       console.log(response);
//      (response.how many tracks it returns) * ~46px + 80px for the header
//     })
//     .catch((error) => {
//       console.log(error);
//     }));

const Releases = props => (
  <ReleasesWrapper>
    <ReleaseTitle>Recordings</ReleaseTitle>
    <Wrapper>
      <Record>
        <RecordArt src={props.albumImage} />
        <RecordTitle>{props.albumTitle}</RecordTitle>
        <RecordArtist>{props.albumArtist}</RecordArtist>
        <RecordDetails>{props.albumDetails}</RecordDetails>
      </Record>
      <SpotifyEmbed>
        <iframe
          title="HoT-ThankYou"
          src={props.spotifyEmbed}
          width="100%"
          height="500"
          // height={props.albumLenght}
          frameBorder="0"
        />
      </SpotifyEmbed>
    </Wrapper>
  </ReleasesWrapper>
);

Releases.propTypes = {
  albumArtist: string.isRequired,
  albumDetails: string.isRequired,
  albumImage: string.isRequired,
  albumTitle: string.isRequired,
  spotifyEmbed: string.isRequired,
};

export default Releases;
