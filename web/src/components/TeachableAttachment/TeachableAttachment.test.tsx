import { render } from '@redwoodjs/testing/web'

import TeachableAttachment from './TeachableAttachment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeachableAttachment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeachableAttachment />)
    }).not.toThrow()
  })
})
