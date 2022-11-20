import { render } from '@redwoodjs/testing/web'

import HomeNavbar from './HomeNavbar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomeNavbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeNavbar />)
    }).not.toThrow()
  })
})
