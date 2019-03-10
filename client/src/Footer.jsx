import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import sombrero from './assets/sombrero.png';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  border-top: 5px solid black;
  background-color: black;
`;

const Sombrero = styled.img`
  margin: 2rem auto;
  width: 60px;
`;

const Footer = () => (
  <Wrapper>
    <Link to="/">
      <Sombrero src={sombrero} alt="say-ar-marmalan" />
    </Link>
  </Wrapper>
);

export default Footer;
