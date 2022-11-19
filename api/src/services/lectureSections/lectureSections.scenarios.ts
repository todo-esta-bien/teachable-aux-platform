import type { Prisma, LectureSection } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LectureSectionCreateArgs>({
  lectureSection: {
    one: { data: { name: 'String', is_published: true, position: 8186029 } },
    two: { data: { name: 'String', is_published: true, position: 1454861 } },
  },
})

export type StandardScenario = ScenarioData<LectureSection, 'lectureSection'>
