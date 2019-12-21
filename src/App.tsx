import React, { useEffect } from 'react';
import { useModal, useUserList } from './hooks';
import data from './assets/data';
import Login from './components/Login';
import Search from './components/Search';
import UserList from './components/UserList';
import styled from 'styled-components';

const App = () => {
  console.log(data, 'app data');
  // const { userList } = useUserList('jacksoncohen');
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

  // useEffect(() => {
  //   useUserList('jacksoncohen');
  // }, []);

  return (
    <div>
      <Search />
      <UserList users={data} />
      <Login />
    </div>
  );
};

export default App;
