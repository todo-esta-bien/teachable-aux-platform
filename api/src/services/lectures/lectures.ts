import type { QueryResolvers, LectureRelationResolvers } from 'types/graphql'

import { fetchLecture } from 'src/lib/teachableClient'

export const lecture: QueryResolvers['lecture'] = async ({
  lecture_id,
  course_id,
}) => {
  return await fetchLecture({ lecture_id, course_id })
}

export const Lecture: LectureRelationResolvers = {
  attachments: (_obj, { root }) => {
    return root.attachments
  },
}
