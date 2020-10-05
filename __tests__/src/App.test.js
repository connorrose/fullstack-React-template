/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import fetchMock from 'fetch-mock-jest';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../src/App';

test('Load and render page', () => {
  const { getByText } = render(<App />);

  expect(getByText(/Template/i)).toBeVisible();
});

test('Ping status does not render before button click', () => {
  const { getByText } = render(<App />);

  expect(() => getByText(/test succeeded/i)).toThrow();
  expect(() => getByText(/test failed/i)).toThrow();
});

test('Success message renders when button click succeeds', async () => {
  fetchMock.get('/api', { success: true });

  const { getByText, getByRole, findByText } = render(<App />);

  fireEvent.click(getByRole('button'));

  try {
    await findByText(/test/i);
  } catch (err) {
    // Do nothing
  }

  expect(getByText(/succe/i)).toBeVisible();

  fetchMock.mockReset();
});

test('Failure message renders when button click fails', async () => {
  fetchMock.get('/api', 500);
  console.error = jest.fn();

  const { getByText, getByRole, findByText } = render(<App />);

  fireEvent.click(getByRole('button'));

  try {
    await findByText(/test/i);
  } catch (err) {
    // Do nothing
  }

  expect(getByText(/fail/i)).toBeVisible();

  fetchMock.mockReset();
});
