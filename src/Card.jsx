import React from 'react';
import { string, node } from 'prop-types';
import { Wrapper, Image, Title, MyLink } from './Card.styled';

const Card = ({ bandUrl, image, children }) => (
  <Wrapper>
    <MyLink to={bandUrl}>
      <Image src={image} />
      <Title>{children}</Title>
    </MyLink>
  </Wrapper>
);

Card.propTypes = {
  bandUrl: string.isRequired,
  children: string.isRequired,
  image: node.isRequired,
};

export default Card;

