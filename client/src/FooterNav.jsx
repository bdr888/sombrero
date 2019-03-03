import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import sombrero from './assets/sombrero.png';

const Footer = styled.div`
  margin: 1rem auto 0;
  width: 100%;
  border-top: 5px solid black;
`;

const Sombrero = styled.img`
  margin: 2rem auto;
  width: 60px;
`;

const FooterNav = () => (
  <Footer>
    <Link to="/">
      <Sombrero src={sombrero} alt="say-ar-marmalan" />
    </Link>
  </Footer>
);

export default FooterNav;
