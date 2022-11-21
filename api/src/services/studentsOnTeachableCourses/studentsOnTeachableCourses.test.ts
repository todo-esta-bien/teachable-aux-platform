import type { StudentsOnTeachableCourse } from '@prisma/client'

import {
  studentsOnTeachableCourses,
  studentsOnTeachableCourse,
  createStudentsOnTeachableCourse,
  updateStudentsOnTeachableCourse,
  deleteStudentsOnTeachableCourse,
} from './studentsOnTeachableCourses'
import type { StandardScenario } from './studentsOnTeachableCourses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('studentsOnTeachableCourses', () => {
  scenario(
    'returns all studentsOnTeachableCourses',
    async (scenario: StandardScenario) => {
      const result = await studentsOnTeachableCourses()

      expect(result.length).toEqual(
        Object.keys(scenario.studentsOnTeachableCourse).length
      )
    }
  )

  scenario(
    'returns a single studentsOnTeachableCourse',
    async (scenario: StandardScenario) => {
      const result = await studentsOnTeachableCourse({
        id: scenario.studentsOnTeachableCourse.one.id,
      })

      expect(result).toEqual(scenario.studentsOnTeachableCourse.one)
    }
  )

  scenario(
    'creates a studentsOnTeachableCourse',
    async (scenario: StandardScenario) => {
      const result = await createStudentsOnTeachableCourse({
        input: {
          studentId: scenario.studentsOnTeachableCourse.two.studentId - 1,
          teachableCourseId:
            scenario.studentsOnTeachableCourse.two.teachableCourseId,
          updatedAt: '2022-11-21T06:45:26.032Z',
        },
      })

      expect(result.studentId).toEqual(
        scenario.studentsOnTeachableCourse.two.studentId - 1
      )
      expect(result.teachableCourseId).toEqual(
        scenario.studentsOnTeachableCourse.two.teachableCourseId
      )
      expect(result.updatedAt).toEqual(new Date('2022-11-21T06:45:26.032Z'))
    }
  )

  scenario(
    'updates a studentsOnTeachableCourse',
    async (scenario: StandardScenario) => {
      const original = (await studentsOnTeachableCourse({
        id: scenario.studentsOnTeachableCourse.one.id,
      })) as StudentsOnTeachableCourse
      const result = await updateStudentsOnTeachableCourse({
        id: original.id,
        input: { updatedAt: '2022-11-22T06:45:26.032Z' },
      })

      expect(result.updatedAt).toEqual(new Date('2022-11-22T06:45:26.032Z'))
    }
  )

  scenario(
    'deletes a studentsOnTeachableCourse',
    async (scenario: StandardScenario) => {
      const original = (await deleteStudentsOnTeachableCourse({
        id: scenario.studentsOnTeachableCourse.one.id,
      })) as StudentsOnTeachableCourse
      const result = await studentsOnTeachableCourse({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
