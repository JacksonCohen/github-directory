import React, { Fragment } from 'react';

import { Avatar, Username, UserProfile, ViewMore } from './styles';

const UserListCard = ({ username, avatar }: { username: string; avatar: string }) => {
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

export default UserListCard;
