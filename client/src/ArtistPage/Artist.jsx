import React from 'react';
import Profile from './Profile';
import Releases from './Releases';
import ArtistWrapper from './Artist.styled';
import FooterNav from '../../src/FooterNav';
import Data from '../data';

const Bands = Data.bands;

const Artist = ({ artistId }) => {
  const artist = Bands.filter(band => band.url === artistId);
  return (
    <ArtistWrapper>
      <Profile
        bandName={artist[0].name}
        headline={artist[0].headline}
        description={artist[0].description}
        image={artist[0].heroImage}
        members={artist[0].members}
      />
      <Releases
        albumArtist={artist[0].albums.albumArtist}
        albumDetails={artist[0].albums.albumDetails}
        albumImage={artist[0].albums.albumImage}
        albumTitle={artist[0].albums.albumTitle}
        spotifyEmbed={artist[0].albums.spotifyEmbed}
      />
      <FooterNav />
    </ArtistWrapper>
  );
};

export default Artist;
