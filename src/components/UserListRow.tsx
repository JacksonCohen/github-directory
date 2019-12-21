import React, { Fragment } from 'react';
import styled from 'styled-components';

const UserProfile = styled.div`
  position: relative;
  max-height: 10rem;
  width: 15%;
  border: 1px #d9d7d6 solid;
  border-radius: 3px;
  margin: 10px 10px;
  text-align: center;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 10px 40px 2px;
    transform: scale3d(1.01, 1.01, 1);
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 50%;
  margin: 10px 0 5px 0;
`;

const ViewMore = styled.a`
  position: relative;
  top: 20px;
`;

const Username = styled.div``;

const UserListRow = ({ username, avatar }: { username: string; avatar: string }) => {
  return (
    <Fragment>
      <UserProfile>
        <Avatar src={avatar} />
        <Username>{username}</Username>
        <ViewMore>View More</ViewMore>
      </UserProfile>
    </Fragment>
  );
};

export default UserListRow;
