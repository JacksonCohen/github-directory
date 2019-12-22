import React from 'react';

import { Container, CriteriaSelector } from './styles';

const Search = () => {
  return (
    <Container>
      <CriteriaSelector>Following</CriteriaSelector>
      <CriteriaSelector>Followers</CriteriaSelector>
    </Container>
  );
};

export default Search;
