import React from 'react';
import { arrayOf, string, node, shape } from 'prop-types';
import {
  Description,
  BandName,
  Image,
  Lineup,
  Info,
  Wrapper,
  Bio,
} from './Profile.styled';

import Data from './data';

const artists = Data.bands;


const Profile = ({ bandName, image, members, description }) => (
  <Wrapper>
    <Image src={image} />
    <BandName>{bandName}</BandName>
    <Lineup>
      {members.map(member => (
        <div key={member.name}>
          {member.instrument} - {member.name}
        </div>
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
