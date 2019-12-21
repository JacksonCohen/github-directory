import React from 'react';
import User from '../../interfaces/User.interface';
import UserListRow from '../UserListRow/UserListRow';

import { Container } from './styles';

const UserList = ({ users }: any) => {
  return (
    <Container>
      {users.map((user: User) => {
        return <UserListRow username={user.login} avatar={user.avatar_url} />;
      })}
    </Container>
  );
};

export default UserList;
