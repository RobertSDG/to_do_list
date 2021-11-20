import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render Task label', () => {
  render(<App/>);
  const i = screen.getByText("Task:");
  expect(i).toBeInTheDocument();
})

//checks to see if there is exactly one element with the text "Prioroty" in the rendered app.
test('should render Priority label;', () => {
  render(<App/>);
  const i = screen.getByText("Priority");
  expect(i).toBeInTheDocument();
})

test('should render table - first row task', () => {
  render(<App/>);
  const i = screen.getByText("Pick up Milk");
  expect(i).toBeInTheDocument()
})

test('should render table - first row priority', () => {
  render(<App/>);
  const i = screen.getByText("1");
  expect(i).toBeInTheDocument()
})

