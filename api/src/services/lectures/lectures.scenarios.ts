import type { Prisma, Lecture } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LectureCreateArgs>({
  lecture: {
    one: {
      data: {
        name: 'String',
        is_published: true,
        position: 2581310,
        lecture_section_id: 5744735,
      },
    },
    two: {
      data: {
        name: 'String',
        is_published: true,
        position: 1072511,
        lecture_section_id: 525432,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Lecture, 'lecture'>
