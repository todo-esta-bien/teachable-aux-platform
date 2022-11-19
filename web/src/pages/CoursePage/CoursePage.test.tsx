import { render } from '@redwoodjs/testing/web'

import CoursePage from './CoursePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CoursePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CoursePage />)
    }).not.toThrow()
  })
})
