import React, { Fragment } from 'react';
import getAccessToken from '../../lib/getAccessToken';
import { useAuthenticatedUser } from '../../hooks';

import { GitHubLogIn } from './styles';

const Login = () => {
  const { markUserAuthenticated } = useAuthenticatedUser();
  return (
    <Fragment>
      <GitHubLogIn
        href='https://github.com/login/oauth/authorize?client_id=6f7c14d6f3a82966cbb6'
        onClick={() => {
          getAccessToken().then(() => {
            markUserAuthenticated();
          });
        }}
      >
        Login With GitHub
      </GitHubLogIn>
    </Fragment>
  );
};

export default Login;
