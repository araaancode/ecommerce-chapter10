import React from 'react'
import Navbar from './Navbar'
import renderer from "react-test-renderer"

describe('Navbar', () => {
  test('Renders Correctly', () => {
    const component = renderer.create(<Navbar>Sample Navbar</Navbar>);
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})