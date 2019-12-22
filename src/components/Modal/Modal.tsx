import React from 'react';

import {
  Avatar,
  Bio,
  BioField,
  Container,
  Edit,
  Exit,
  NameField,
  ProfileFields,
  Username
} from './styles';

const Modal = () => {
  return (
    <Container>
      <Avatar src='https://avatars3.githubusercontent.com/u/36962434?v=4' />
      <ProfileFields>
        <NameField>Username</NameField>
        <Username>
          JacksonCohen
          {/* {username} */}
        </Username>
        <BioField>
          Bio
          <Edit src='https://i.imgur.com/J2p7LEN.png' />
        </BioField>
        <Bio>
          I love coding! JavaScript and React are my favorite. When I'm not coding, you can catch me
          traveling or playing ukulele.
          {/* {bio} */}
        </Bio>
      </ProfileFields>
      <Exit>&times;</Exit>
    </Container>
  );
};

export default Modal;
