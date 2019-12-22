import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Modal from '../src/components/Modal/Modal';

beforeEach(cleanup);

describe('<Modal />', () => {
  it('renders successfully', () => {
    const { queryByTestId } = render(<Modal />);

    expect(queryByTestId('modal')).toBeTruthy();
  });
});
