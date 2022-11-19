import type {
  QueryResolvers,
  MutationResolvers,
  CourseRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { fetch } from 'cross-undici-fetch'


export const courses: QueryResolvers['courses'] = () => {
  return db.course.findMany()
}

export const course: QueryResolvers['course'] = async ({ id }) => {
  const url = `https://developers.teachable.com/v1/courses/${id}`
  const response = await fetch(url, {headers: {
    apiKey: process.env.TEACHABLE_API_KEY
  }})

  const result = await response.json()
  return result.course

  // return db.course.findUnique({
  //   where: { id },
  // })
}

export const createCourse: MutationResolvers['createCourse'] = ({ input }) => {
  return db.course.create({
    data: input,
  })
}

export const updateCourse: MutationResolvers['updateCourse'] = ({
  id,
  input,
}) => {
  return db.course.update({
    data: input,
    where: { id },
  })
}

export const deleteCourse: MutationResolvers['deleteCourse'] = ({ id }) => {
  return db.course.delete({
    where: { id },
  })
}

export const Course: CourseRelationResolvers = {
  lecture_sections: (_obj, { root }) => {
    return root.lecture_sections
    // return db.course.findUnique({ where: { id: root?.id } }).lecture_sections()
  },
}
