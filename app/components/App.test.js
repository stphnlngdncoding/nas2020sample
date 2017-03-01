import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import App from './App'

describe("component: app component", () => {
  it("shows links to the three screens", () => {
    expect(shallow(<App /> ).contains())
  })
})