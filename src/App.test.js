import { render, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from 'react';
import App from './App';

test('check menu items', () => {
  const {getByText, getByLabelText} = render(<App/>);

  //after rendering our component
  getByText('Withdraw');
  getByText('Create Account');
  getByText('Deposit');
  getByText('All Data');

});


test('add items to list', () => {
  const {getByText, getByLabelText} = render(<App/>);

  //after rendering our component
  getByText('Deposit');
  //const input = getByLabelText('Deposit');
  //fireEvent.change(input, {target:{value: 'wash car'}});
  fireEvent.click(getByText('Deposit'));

  //confirm data
  getByText('All Data');
  getByText('Welcome to Bad Bank');

}); 