import React from 'react';
import { arrayOf, string, node, shape } from 'prop-types';
import {
  BandName,
  Bio,
  Image,
  Instrument,
  Lineup,
  Member,
  Name,
  Wrapper,
} from './Profile.styled';

const Profile = ({ bandName, image, members, description }) => (
  <Wrapper>
      <Image src={image} />
      <BandName>{bandName}</BandName>
      <Lineup>
        {members.map(member => (
          <Member key={member.name}>
            <Name>{member.name}</Name>
            <Instrument>{member.instrument}</Instrument>
          </Member>
        ))}
      </Lineup>
      <Bio>{description}</Bio>
  </Wrapper>
);

Profile.propTypes = {
  bandName: string.isRequired,
  description: string.isRequired,
  image: node.isRequired,
  members: arrayOf(shape({ name: string, instrument: string })).isRequired,
};

export default Profile;
