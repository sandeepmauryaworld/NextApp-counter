import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './components/Counter';

test('Counter (Custom Increment)', () => {
  const { getByTestId, getByText } = render(<Counter />);

  // Initial count should be 0
  const countDisplay = getByTestId('count-display');
  expect(countDisplay).toHaveTextContent('Count: 0');

  // Increment the counter
  const incrementButton = getByTestId('increment-button');
  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent('Count: 1');

  // Decrement the counter
  const decrementButton = getByTestId('decrement-button');
  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent('Count: 0');
});
