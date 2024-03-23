import React from 'react'
import ProductCard from './ProductCard'
import renderer from "react-test-renderer"

describe('ProductCard', () => {
  test('Renders Correctly', () => {
    const component = renderer.create(<ProductCard>Sample ProductCard</ProductCard>);
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})