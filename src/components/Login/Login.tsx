import React, { Fragment, useEffect } from 'react';
import getAccessToken from '../../lib/getAccessToken';
import { useAuthenticatedUser, useAuthenticatedUserInfo } from '../../hooks';

import { GitHubLogin } from './styles';

const Login = () => {
  const { markUserAuthenticated } = useAuthenticatedUser();
  const { setAuthenticatedUserInfo } = useAuthenticatedUserInfo();
  const accessToken = sessionStorage.getItem('access-token');

  useEffect(() => {
    markUserAuthenticated();
    setAuthenticatedUserInfo();
  }, [accessToken]);

  return (
    <Fragment>
      <GitHubLogin
        href='https://github.com/login/oauth/authorize?client_id=6f7c14d6f3a82966cbb6'
        onClick={getAccessToken}
      >
        Login With GitHub
      </GitHubLogin>
    </Fragment>
  );
};

export default Login;
