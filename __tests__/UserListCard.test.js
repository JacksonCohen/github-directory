import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UserListCard from '../src/components/UserListCard/UserListCard';

beforeEach(cleanup);

describe('<UserListCard />', () => {
  it('renders successfully', () => {
    const { queryByTestId } = render(<UserListCard />);

    expect(queryByTestId('userlistcard')).toBeTruthy();
  });
});
