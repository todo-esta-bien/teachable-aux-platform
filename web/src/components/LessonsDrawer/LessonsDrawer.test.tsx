import { render } from '@redwoodjs/testing/web'

import LessonsDrawer from './LessonsDrawer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LessonsDrawer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <LessonsDrawer lectureSections={[]}>
          <p>holi</p>
        </LessonsDrawer>
      )
    }).not.toThrow()
  })
})
