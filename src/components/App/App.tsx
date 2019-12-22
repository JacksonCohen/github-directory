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
  const { isModalShowing, showUserModal } = useModal();
  const { setUserModal } = useUserModal();

  useEffect(() => {
    getUserLists();
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
          {isModalShowing && <Modal />}
        </Fragment>
      )}
    </Container>
  );
};

export default App;
