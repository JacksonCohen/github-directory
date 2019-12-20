import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from '../src/components/Search';

beforeEach(cleanup);

describe('<Search />', () => {
  it('renders successfully', () => {
    const { queryByTestId } = render(<Search />);

    expect(queryByTestId('search')).toBeTruthy();
  });
});
