import React from 'react'
import { render } from '@testing-library/react'

import WebLayoutsWeb from './web-layouts-web'

describe('WebLayoutsWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsWeb />)
    expect(baseElement).toBeTruthy()
  })
})
