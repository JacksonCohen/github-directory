import React, { Fragment } from 'react';
import styled from 'styled-components';

const UserProfile = styled.div`
  max-height: 10rem;
  width: 20%;
  border: 1px grey solid;
  margin: 10px 10px;
  justify-content: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 40%;
`;

const Username = styled.div``;

const UserListRow = ({ username, avatar }: { username: string; avatar: string }) => {
  return (
    <Fragment>
      <UserProfile>
        <Avatar src={avatar} />
        <Username>{username}</Username>
      </UserProfile>
    </Fragment>
  );
};

export default UserListRow;
