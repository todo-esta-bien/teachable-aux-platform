import type { LectureSection } from '@prisma/client'

import {
  lectureSections,
  lectureSection,
  createLectureSection,
  updateLectureSection,
  deleteLectureSection,
} from './lectureSections'
import type { StandardScenario } from './lectureSections.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('lectureSections', () => {
  scenario(
    'returns all lectureSections',
    async (scenario: StandardScenario) => {
      const result = await lectureSections()

      expect(result.length).toEqual(Object.keys(scenario.lectureSection).length)
    }
  )

  scenario(
    'returns a single lectureSection',
    async (scenario: StandardScenario) => {
      const result = await lectureSection({
        id: scenario.lectureSection.one.id,
      })

      expect(result).toEqual(scenario.lectureSection.one)
    }
  )

  scenario('creates a lectureSection', async () => {
    const result = await createLectureSection({
      input: { name: 'String', is_published: true, position: 8563085 },
    })

    expect(result.name).toEqual('String')
    expect(result.is_published).toEqual(true)
    expect(result.position).toEqual(8563085)
  })

  scenario('updates a lectureSection', async (scenario: StandardScenario) => {
    const original = (await lectureSection({
      id: scenario.lectureSection.one.id,
    })) as LectureSection
    const result = await updateLectureSection({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a lectureSection', async (scenario: StandardScenario) => {
    const original = (await deleteLectureSection({
      id: scenario.lectureSection.one.id,
    })) as LectureSection
    const result = await lectureSection({ id: original.id })

    expect(result).toEqual(null)
  })
})
