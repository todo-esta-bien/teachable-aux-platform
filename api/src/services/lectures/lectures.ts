import type {
  QueryResolvers,
  LectureRelationResolvers,
} from 'types/graphql'

import { fetch } from 'cross-undici-fetch'

export const lecture: QueryResolvers['lecture'] = async ({ lecture_id, course_id }) => {
  const url = `https://developers.teachable.com/v1/courses/${course_id}/lectures/${lecture_id}`
  const response = await fetch(url, {headers: {
    apiKey: process.env.TEACHABLE_API_KEY
  }})

  const result = await response.json()
  return result.lecture
}


export const Lecture: LectureRelationResolvers = {
  attachments: (_obj, { root }) => {
    return root.attachments
  },
}
