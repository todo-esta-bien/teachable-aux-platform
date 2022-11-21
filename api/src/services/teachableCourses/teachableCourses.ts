import type {
  QueryResolvers,
  MutationResolvers,
  TeachableCourseRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const teachableCourses: QueryResolvers['teachableCourses'] = () => {
  return db.teachableCourse.findMany()
}

export const teachableCourse: QueryResolvers['teachableCourse'] = ({ id }) => {
  return db.teachableCourse.findUnique({
    where: { id },
  })
}

export const createTeachableCourse: MutationResolvers['createTeachableCourse'] =
  ({ input }) => {
    return db.teachableCourse.create({
      data: input,
    })
  }

export const updateTeachableCourse: MutationResolvers['updateTeachableCourse'] =
  ({ id, input }) => {
    return db.teachableCourse.update({
      data: input,
      where: { id },
    })
  }

export const deleteTeachableCourse: MutationResolvers['deleteTeachableCourse'] =
  ({ id }) => {
    return db.teachableCourse.delete({
      where: { id },
    })
  }

export const TeachableCourse: TeachableCourseRelationResolvers = {
  students: (_obj, { root }) => {
    return db.teachableCourse.findUnique({ where: { id: root?.id } }).students()
  },
}
