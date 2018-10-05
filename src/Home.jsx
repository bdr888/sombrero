import React from 'react';
import { HomeWrapper } from './Home.styled';
import Card from './Card';
import Data from './data';

const Bands = Data.bands;

const Home = () => (
  <HomeWrapper>
    {Bands.map(band => (
      <Card
        key={band.name}
        bandUrl={band.url}
        image={band.heroImage}
      >
        {band.name}
      </Card>
    ))}
  </HomeWrapper>
);

export default Home;
