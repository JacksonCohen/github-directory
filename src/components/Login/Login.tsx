import React, { Fragment } from 'react';

import { GitHubLogIn } from './styles';

const Login = () => {
  return (
    <Fragment>
      <GitHubLogIn href='https://github.com/login/oauth/authorize?client_id=6f7c14d6f3a82966cbb6'>
        Sign In Using GitHub
      </GitHubLogIn>
    </Fragment>
  );
};

export default Login;
