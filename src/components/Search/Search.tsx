import React from 'react';

import { Container } from './styles';

const Search = () => {
  return (
    <Container>
      <select>
        <option disabled selected hidden>
          Select your search criteria
        </option>
        <option>Followers</option>
        <option>Following</option>
      </select>
    </Container>
  );
};

export default Search;
