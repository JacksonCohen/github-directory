import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  /* display: none; */
  z-index: 50;
  /* border-radius: 5px; */
  left: 35%;
  top: 25%;
  width: 30%;
  height: 50%;
  border: 1px solid;
  background: white;
  animation-name: animatetop;
  animation-duration: 0.4s;

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 25%;
      opacity: 1;
    }
  }
`;

const Avatar = styled.img`
  position: relative;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  bottom: 40px;
  width: 40%;
`;

const NameField = styled.div`
  align-items: center;
  margin: 3% 10%;
  border-bottom: 1px solid #000;
  width: 80%;
`;

const Username = styled.div`
  /* content: ''; */
  flex: 1 1 auto;
  margin-left: 10%;
`;

const BioField = styled.div`
  align-items: center;
  margin: 3% 10%;
  border-bottom: 1px solid #000;
  width: 80%;
`;

const Bio = styled.div`
  flex: 1 1 auto;
  margin-left: 10%;
  width: 80%;
`;

const Exit = styled.div`
  position: absolute;
  top: 0;
  right: 7px;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  :focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Edit = styled.img`
  position: absolute;
  right: 10%;
  top: 40%;
  width: 5%;
`;

const ProfileFields = styled.div`
  position: relative;
  bottom: 5%;
`;

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
          <Edit src='https://icons-for-free.com/iconfiles/png/512/edit+pen+pencil+icon-1320183237584811650.png' />
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
