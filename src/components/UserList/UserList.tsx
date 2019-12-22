import React from 'react';
import { User } from '../../interfaces/SetUser.interface';
import UserListCard from '../UserListCard/UserListCard';
import { useAuthenticatedUserInfo } from '../../hooks';

import { Container } from './styles';

interface Props {
  users: User[];
  handleClick: any;
}

const UserList = ({ users, handleClick }: Props) => {
  return (
    <Container>
      {users.map((user: User) => {
        return (
          <UserListCard
            key={user.id}
            login={user.login}
            avatar_url={user.avatar_url}
            bio={user.bio}
            handleClick={handleClick}
          />
        );
      })}
    </Container>
  );
};

export default UserList;
