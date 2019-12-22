import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Login from '../src/components/Login/Login';

beforeEach(cleanup);

describe('<Login />', () => {
  it('renders successfully', () => {
    const { queryByTestId } = render(<Login />);

    expect(queryByTestId('login')).toBeTruthy();
  });
});
