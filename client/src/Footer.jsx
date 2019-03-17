import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import sombrero from './assets/sombrero.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  background: linear-gradient(to bottom right, #545454, black);
`;

const Sombrero = styled.img`
  margin: 1rem auto 0;
  width: 60px;

  @media (min-width: 440px) {
    margin: 1.5rem auto;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 700px;
  padding: 0 0 2rem;

  @media (min-width: 440px) {
    display: none;
  }
`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0.5rem 0;
  padding: 0.5rem 0;

  &:link {
    color: white;
  }

  &:hover {
    color: grey;
  }

  &:active {
    color: #f410b1;
  }
`;
const Footer = () => (
  <Wrapper>
    <MyLink to={'/'}>
      <Sombrero src={sombrero} alt="home" />
    </MyLink>
    <Links>
      <MyLink to={'/about'}>About</MyLink>
      <MyLink to={'/artists'}>Artists</MyLink>
      <MyLink to={'/gallery'}>Gallery</MyLink>
      <MyLink to={'/listen'}>Listen</MyLink>
    </Links>
  </Wrapper>
);

export default Footer;
