import type { TeachableCourse } from '@prisma/client'

import {
  teachableCourses,
  teachableCourse,
  createTeachableCourse,
  updateTeachableCourse,
  deleteTeachableCourse,
} from './teachableCourses'
import type { StandardScenario } from './teachableCourses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('teachableCourses', () => {
  scenario(
    'returns all teachableCourses',
    async (scenario: StandardScenario) => {
      const result = await teachableCourses()

      expect(result.length).toEqual(
        Object.keys(scenario.teachableCourse).length
      )
    }
  )

  scenario(
    'returns a single teachableCourse',
    async (scenario: StandardScenario) => {
      const result = await teachableCourse({
        id: scenario.teachableCourse.one.id,
      })

      expect(result).toEqual(scenario.teachableCourse.one)
    }
  )

  scenario('creates a teachableCourse', async () => {
    const result = await createTeachableCourse({
      input: {
        name: 'String',
        teachableId: 6931600,
        updatedAt: '2022-11-21T04:55:04.260Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.teachableId).toEqual(6931600)
    expect(result.updatedAt).toEqual(new Date('2022-11-21T04:55:04.260Z'))
  })

  scenario('updates a teachableCourse', async (scenario: StandardScenario) => {
    const original = (await teachableCourse({
      id: scenario.teachableCourse.one.id,
    })) as TeachableCourse
    const result = await updateTeachableCourse({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a teachableCourse', async (scenario: StandardScenario) => {
    const original = (await deleteTeachableCourse({
      id: scenario.teachableCourse.one.id,
    })) as TeachableCourse
    const result = await teachableCourse({ id: original.id })

    expect(result).toEqual(null)
  })
})
