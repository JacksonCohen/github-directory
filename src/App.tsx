import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Search from './components/Search';
import UserList from './components/UserList';

const App = () => {
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

  useEffect(() => {
    const fetchUsers = (username: string) => {
      fetch(`https://api.github.com/users/${username}/followers`)
        .then(raw => raw.json())
        .then(data => console.log(data));
    };
    fetchUsers('jacksoncohen');
  }, []);

  return (
    <div>
      <div className='sign-in'>
        <a href='https://github.com/login/oauth/authorize?client_id=6f7c14d6f3a82966cbb6'>
          Sign In Using GitHub
        </a>
      </div>
    </div>
  );
};

export default App;
