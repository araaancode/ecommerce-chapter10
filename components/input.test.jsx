import React from 'react'
import Input from './Input'
import renderer from "react-test-renderer"

describe('Input', () => {
  test('Renders Correctly', () => {
    const component = renderer.create(<Input>Sample Input</Input>);
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})