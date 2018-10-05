import React from 'react';
import { Wrapper, MyLink, Title } from './Header.styled';
// import sombrero from './assets/SombreroTitle.png';

// @todo make header smaller on artist page
// @todo

const Header = () => (
  <Wrapper>
    <MyLink to={'/'}>
      <Title>Sombrero Records</Title>
      {/* <Sombrero alt="home" src={sombrero} /> */}
    </MyLink>
  </Wrapper>
);

export default Header;
