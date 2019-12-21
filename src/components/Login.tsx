import React, { Fragment } from 'react';
import styled from 'styled-components';

const GitHubLogIn = styled.a`
  text-decoration: none;
  /* color: white; */
  border: 1px #ffbb45 solid;
  border-radius: 3px;
  padding: 10px 7px;
`;

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
