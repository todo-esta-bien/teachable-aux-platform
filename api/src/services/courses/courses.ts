import type {
  QueryResolvers,
  CourseRelationResolvers,
} from 'types/graphql'

import {fetchCourse} from 'src/lib/teachableClient'

export const course: QueryResolvers['course'] = async ({ id }) => {
  return await fetchCourse(id)
}

export const Course: CourseRelationResolvers = {
  lecture_sections: (_obj, { root }) => {
    return root.lecture_sections
  },
}
