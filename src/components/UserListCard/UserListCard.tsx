import React, { Fragment } from 'react';
import { useUserModal } from '../../hooks';

import { Avatar, Username, UserProfile, ViewMore } from './styles';

const UserListCard = ({
  login,
  avatar_url,
  handleClick
}: {
  login: string;
  avatar_url: string;
  handleClick: any;
}) => {
  const { setUserModal } = useUserModal();

  return (
    <Fragment>
      <UserProfile
        onClick={() => {
          setUserModal(login, avatar_url);
          handleClick();
        }}
      >
        <Avatar src={avatar_url} />
        <Username>{login}</Username>
        <ViewMore>View More</ViewMore>
      </UserProfile>
    </Fragment>
  );
};

export default UserListCard;
