import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UserList from '../src/components/UserList/UserList';
import data from '../src/data';

beforeEach(cleanup);

describe('<UserList />', () => {
  it('renders successfully', () => {
    const { queryByTestId } = render(<UserList data={data} func={() => {}} />);

    expect(queryByTestId('userlist')).toBeTruthy();
  });
});
