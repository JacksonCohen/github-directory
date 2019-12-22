import React, { Fragment, useEffect } from 'react';
import { useModal, useUserList } from '../../hooks';
import data from '../../assets/data';
import Login from '../Login/Login';
import Modal from '../Modal/Modal';
import Search from '../Search/Search';
import UserList from '../UserList/UserList';
import { showUserModal } from '../../actions/actions';

import { Container } from './styles';

const App = () => {
  const { isModalShowing, hideUserModal } = useModal();
  // const { setUserList, userList } = useUserList('jacksoncohen');
  // const { isAuthenticated } = useAuthenticatedUser();
  // console.log(userList);

  // const getAccessToken = async () => {
  //   const url = 'https://github.com/login/oauth/access_token';
  //   const data = { username: 'example' };

  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     const json = await response.json();
  //     console.log('Success:', JSON.stringify(json));
  //   } catch (error) {
  //     console.error(`Error authenticating: ${error}`);
  //   }
  // };

  // useEffect(() => {}, []);
  const handleClick = () => console.log('Handleclick invoked in app');

  return (
    <Container>
      {!true ? (
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
