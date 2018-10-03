import React from 'react';
import { HomeWrapper } from './Home.styled';
import BandCard from './Card';
import Data from './data';

const Bands = Data.bands;

const Home = () => (
  <HomeWrapper>
    {Bands.map(band => (
      <BandCard
        key={band.name}
        bandUrl={`/artists/${band.url}`}
        image={band.heroImage}
      >
        {band.name}
      </BandCard>
    ))}
  </HomeWrapper>
);

export default Home;
