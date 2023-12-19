import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ToDoForm from './to-do-form';
import ToDoList from './to-do-list';
import ToDo from './to-do';

test('renders ', () => {
  render(<App />);
});

test('renders ', () => {
  render(<ToDoForm />);
});

test('renders ', () => {
  render(<ToDoList />);
});

test('renders ', () => {
  render(<ToDo />);
});