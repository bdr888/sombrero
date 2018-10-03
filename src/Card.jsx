import React from 'react';
import { string, node } from 'prop-types';
import { Wrapper, Image, Title, MyLink } from './Card.styled';

const BandCard = props => (
  <Wrapper>
    <MyLink to={props.bandUrl}>
      <Image src={props.image} />
      <Title>{props.children}</Title>
    </MyLink>
  </Wrapper>
);

BandCard.propTypes = {
  bandUrl: string.isRequired,
  children: string.isRequired,
  image: node.isRequired,
};

export default BandCard;

