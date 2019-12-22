import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 30px;
`;

export const CriteriaSelector = styled.a`
  text-decoration: none;
  color: white;
  font-family: monospace;
  border: 1px #e5c453 solid;
  border-radius: 3px;
  background: #484848;
  padding: 10px 5px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    color: black;
    background: #e5c453;
  }
`;
