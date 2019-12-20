import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UserProfile from '../src/components/UserProfile';

beforeEach(cleanup);

describe('<UserProfile />', () => {
  it('renders successfully', () => {
    const { queryByTestId } = render(<UserProfile />);

    expect(queryByTestId('about')).toBeTruthy();
  });
});
