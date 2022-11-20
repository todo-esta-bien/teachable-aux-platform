import { render } from '@redwoodjs/testing/web'

import LectureSection from './LectureSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LectureSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LectureSection />)
    }).not.toThrow()
  })
})
