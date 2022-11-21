import type { Prisma, Student } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StudentCreateArgs>({
  student: {
    one: { data: { name: 'String', updatedAt: '2022-11-21T06:19:34.679Z' } },
    two: { data: { name: 'String', updatedAt: '2022-11-21T06:19:34.679Z' } },
  },
})

export type StandardScenario = ScenarioData<Student, 'student'>
