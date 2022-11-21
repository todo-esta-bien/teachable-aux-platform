import type { Prisma, StudentsOnTeachableCourse } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard =
  defineScenario<Prisma.StudentsOnTeachableCourseCreateArgs>({
    studentsOnTeachableCourse: {
      one: {
        data: {
          updatedAt: '2022-11-21T06:45:26.042Z',
          student: {
            create: { name: 'String', updatedAt: '2022-11-21T06:45:26.042Z' },
          },
          teachableCourse: {
            create: {
              name: 'String',
              teachableId: 2777212,
              updatedAt: '2022-11-21T06:45:26.042Z',
            },
          },
        },
      },
      two: {
        data: {
          updatedAt: '2022-11-21T06:45:26.042Z',
          student: {
            create: { name: 'String', updatedAt: '2022-11-21T06:45:26.042Z' },
          },
          teachableCourse: {
            create: {
              name: 'String',
              teachableId: 9971459,
              updatedAt: '2022-11-21T06:45:26.042Z',
            },
          },
        },
      },
    },
  })

export type StandardScenario = ScenarioData<
  StudentsOnTeachableCourse,
  'studentsOnTeachableCourse'
>
