import React from 'react';
import ArtistsWrapper from './Artists.styled';
import Card from './Card';
import Data from '../data';

// @todo make this a class, fetch data on mount
const Bands = Data.bands;

const Artists = () => (
  <ArtistsWrapper>
    {Bands.map(band => (
      <Card key={band.name} bandUrl={band.url} image={band.heroImage}>
        {band.name}
      </Card>
    ))}
  </ArtistsWrapper>
);

export default Artists;
