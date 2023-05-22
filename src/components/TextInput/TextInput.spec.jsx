import userEvent from "@testing-library/user-event";
import React from 'react';
import { TextInput } from "../TextInput";
import { render, screen } from "@testing-library/react";


describe('should have a value of searchValue', () => {

  it('should call handleChange function each key pressed', () => {

    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'testando'} />)

    const input = screen.getByPlaceholderText('Type your search');
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {

    const value = 'o valor';
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={value} />)

    const input = screen.getByPlaceholderText('Type your search');

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length)
  });

  it('should call match snapshot', () => {

    const fn = jest.fn();
    const container = render(<TextInput handleChange={fn} searchValue={'testando'} />)

    expect(container).toMatchSnapshot()
  });
})
