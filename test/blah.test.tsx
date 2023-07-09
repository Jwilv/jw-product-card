import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Thing } from '../src';

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest"
import { ProductTitle } from '../src/components';

describe('vos sabes', () => {

  afterEach(cleanup)

  it('renders without crashing', () => {
    expect(true).toBe(true)
  });

  it('render ProductTitle', () => {
    const wrapper = render(<ProductTitle title='hola' className='white-text' />)
    expect(wrapper).toMatchSnapshot()
  });

  it('render for parameter hello word', () => {
    render(<ProductTitle title='Hello world' className='white-text' />)
    const result = screen.getByText('Hello world')
    expect(result.classList.contains('white-text')).toBe(true)
  });

});
