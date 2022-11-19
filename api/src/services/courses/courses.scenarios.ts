import type { Prisma, Course } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CourseCreateArgs>({
  course: {
    one: {
      data: {
        name: 'String',
        heading: 'String',
        is_published: true,
        image_url: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        heading: 'String',
        is_published: true,
        image_url: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Course, 'course'>
