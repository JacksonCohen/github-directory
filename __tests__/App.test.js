import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

beforeEach(cleanup);

describe('<App />', () => {
  it('renders successfully', () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId('app')).toBeTruthy();
  });
});
