import {
  lecture
} from './lectures'
import type { StandardScenario } from './lectures.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('lectures', () => {
  scenario('returns a single lecture', async (scenario: StandardScenario) => {
    const result = await lecture({ lecture_id: scenario.lecture.one.id, course_id: 1 })

    expect(result).toEqual(scenario.lecture.one)
  })
})
