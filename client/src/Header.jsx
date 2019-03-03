import React from 'react';
import { Links, Section, Wrapper, MyLink, Title } from './Header.styled';

const Header = () => (
  <Wrapper>
    <MyLink to={'/'}>
      <Title>Sombrero Records</Title>
    </MyLink>
    <Links>
      <MyLink to={'/'}>Home</MyLink>
      <MyLink to={'/about'}>About</MyLink>
      <MyLink to={'/'}>Artists</MyLink>
      <MyLink to={'/'}>Gallery</MyLink>
      <MyLink to={'/'}>Listen</MyLink>
    </Links>
  </Wrapper>
);

export default Header;
