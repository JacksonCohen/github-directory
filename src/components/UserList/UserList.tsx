import React from 'react';
import { User } from '../../interfaces/SetUser.interface';
import UserListCard from '../UserListCard/UserListCard';

import { Container } from './styles';

const UserList = ({ users }: any) => {
  return (
    <Container>
      {users.map((user: User) => {
        return <UserListCard key={user.id} username={user.login} avatar={user.avatar_url} />;
      })}
    </Container>
  );
};

export default UserList;
