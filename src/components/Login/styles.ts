import styled from 'styled-components';

export const GitHubLogIn = styled.a`
  text-decoration: none;
  color: white;
  font-family: monospace;
  border: 1px #e5c453 solid;
  border-radius: 3px;
  background: #484848;
  padding: 20px 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    color: black;
    background: #e5c453;
  }
`;
