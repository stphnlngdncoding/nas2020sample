import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { CreateReportContainer } from '../../app/components/CreateReportContainer'

// console.log(mount(<CreateReportContainer />))

//setup
import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.default

describe("Component: CreateReportContainer", () => {
  it("exists", () => {
    expect(shallow(<CreateReportContainer/>).exists()).toEqual(true);
  })
  it("has a form inside of it", () => {
    console.log(shallow(<CreateReportContainer />).html())
  })
})