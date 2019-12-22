import React, { Fragment, useEffect } from 'react';
import { useModal, useUserList, useUserModal } from '../../hooks';
import data from '../../data';
import Login from '../Login/Login';
import Modal from '../Modal/Modal';
import Search from '../Search/Search';
import UserList from '../UserList/UserList';

import { Container } from './styles';

const App = () => {
  const { isModalShowing, showUserModal } = useModal();
  const { setUserModal } = useUserModal();
  let modalUser;
  // const { setUserList, userList } = useUserList('jacksoncohen');
  // const { isAuthenticated } = useAuthenticatedUser();
  // console.log(userList);

  const getAccessToken = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    try {
      const response = await fetch(`http://localhost:11111/getAuthToken`, {
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      const json = await response.json();
      console.log('Success:', JSON.stringify(json));
    } catch (error) {
      console.error(`Error Authenticating on Client: ${error}`);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  const handleClick = () => {
    setUserModal();
    showUserModal();
  };

  return (
    <Container>
      {!true ? (
        <Login />
      ) : (
        <Fragment>
          <Search />
          <UserList users={data} handleClick={handleClick} />
          {isModalShowing && <Modal modalUser={modalUser} />}
        </Fragment>
      )}
    </Container>
  );
};

export default App;
