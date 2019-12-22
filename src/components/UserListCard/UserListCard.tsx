import React, { Fragment } from 'react';

import { Avatar, Username, UserProfile, ViewMore } from './styles';

const UserListCard = ({
  username,
  avatar,
  handleClick
}: {
  username: string;
  avatar: string;
  handleClick: any;
}) => {
  return (
    <Fragment>
      <UserProfile onClick={handleClick}>
        <Avatar src={avatar} />
        <Username>{username}</Username>
        <ViewMore>View More</ViewMore>
      </UserProfile>
    </Fragment>
  );
};

export default UserListCard;
