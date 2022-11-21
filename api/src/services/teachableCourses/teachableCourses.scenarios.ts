import type { Prisma, TeachableCourse } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TeachableCourseCreateArgs>({
  teachableCourse: {
    one: {
      data: {
        name: 'String',
        teachableId: 9586107,
        updatedAt: '2022-11-21T04:55:04.272Z',
      },
    },
    two: {
      data: {
        name: 'String',
        teachableId: 599809,
        updatedAt: '2022-11-21T04:55:04.272Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<TeachableCourse, 'teachableCourse'>
