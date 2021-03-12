import React from 'react'
import { render } from '@testing-library/react'

import WebLayoutsAdmin from './web-layouts-admin'

describe('WebLayoutsAdmin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayoutsAdmin />)
    expect(baseElement).toBeTruthy()
  })
})
