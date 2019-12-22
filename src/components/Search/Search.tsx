import React from 'react';
import { useSearchCriteria } from '../../hooks';

import { Container, CriteriaSelector } from './styles';

const Search = () => {
  const { updateSearchCriteria } = useSearchCriteria();

  return (
    <Container>
      <CriteriaSelector onClick={() => updateSearchCriteria('followers')}>
        Followers
      </CriteriaSelector>
      <CriteriaSelector onClick={() => updateSearchCriteria('following')}>
        Following
      </CriteriaSelector>
    </Container>
  );
};

export default Search;
