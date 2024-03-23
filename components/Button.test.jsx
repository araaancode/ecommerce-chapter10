import React from 'react'
import Button from './Button'
import renderer from "react-test-renderer"

describe('Button', () => {
  test('Renders Correctly', () => {
    const component = renderer.create(<Button>Sample Button</Button>);
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  
})