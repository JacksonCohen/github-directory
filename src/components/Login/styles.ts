import styled from 'styled-components';
import { CriteriaSelector } from '../Search/styles';

export const GitHubLogin = styled(CriteriaSelector)`
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
