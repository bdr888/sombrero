import React from 'react';
import { Links, Wrapper, MyLink, Title } from './Header.styled';

const Header = () => (
  <Wrapper>
    <MyLink to={'/'}>
      <Title>Sombrero Records</Title>
    </MyLink>
    <Links>
      <MyLink to={'/'}>Home</MyLink>
      <MyLink to={'/about'}>About</MyLink>
      <MyLink to={'/artists'}>Artists</MyLink>
      <MyLink to={'/gallery'}>Gallery</MyLink>
      <MyLink to={'/listen'}>Listen</MyLink>
    </Links>
  </Wrapper>
);

export default Header;
