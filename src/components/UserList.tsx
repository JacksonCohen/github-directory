import React from 'react';
import User from '../interfaces/User.interface';
import UserListRow from './UserListRow';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 50px;
`;

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
