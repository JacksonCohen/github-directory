import React, { Fragment, useEffect } from 'react';
import { useModal, useUserModal, useAuthenticatedUser } from '../../hooks';
import getUserLists from '../../lib/getUserLists';
import data from '../../data';
import Login from '../Login/Login';
import Modal from '../Modal/Modal';
import Search from '../Search/Search';
import UserList from '../UserList/UserList';

import { Container } from './styles';

const App = () => {
  const { isAuthenticated } = useAuthenticatedUser();
  const { isModalShowing, showUserModal, hideUserModal } = useModal();
  const { login, avatar_url, bio, setUserModal } = useUserModal();

  useEffect(() => {
    getUserLists('followers');
  }, []);

  const handleClick = () => {
    setUserModal();
    showUserModal();
  };

  return (
    <Container>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <Fragment>
          <Search />
          <UserList users={data} handleClick={handleClick} />
          {isModalShowing && (
            <Modal hideUserModal={hideUserModal} user={{ login, avatar_url, bio }} />
          )}
        </Fragment>
      )}
    </Container>
  );
};

export default App;
